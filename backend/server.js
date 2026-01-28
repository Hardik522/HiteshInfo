/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║           WHATSAPP BUSINESS MESSAGE SERVER - DOCUMENTATION                ║
 * ║                   Real Estate Inquiry Management System                    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 * 
 * PURPOSE:
 * This server handles WhatsApp message delivery for real estate inquiries.
 * When users fill the form on the website, this server receives the data and
 * sends it to WhatsApp numbers configured in the .env file.
 * 
 * CONFIGURATION (.env file):
 * - PHONE_NUMBER_ID: Your WhatsApp Business Account Phone ID
 * - ACCESS_TOKEN: Your WhatsApp API authentication token
 * - RECIPIENT_PHONE: Number to receive inquiry messages (e.g., Hitesh's number)
 * - TEST_PHONE: Your personal number to receive test messages and error logs
 * - SEND_ERROR_LOGS: true/false - Auto-send errors to TEST_PHONE
 * - PORT: Server port (default: 5000)
 */

// ═════════════════════════════════════════════════════════════════════════════
// 1. DEPENDENCIES & SETUP
// ═════════════════════════════════════════════════════════════════════════════

const express = require("express");           // Web framework for API endpoints
const axios = require("axios");               // HTTP client for WhatsApp API calls
const bodyParser = require("body-parser");    // Parse JSON request bodies
const cors = require("cors");                 // Enable cross-origin requests from frontend
require("dotenv").config();                   // Load .env file configuration

const app = express();
app.use(cors());                              // Allow requests from any origin
app.use(bodyParser.json());                   // Parse incoming JSON data

// ═════════════════════════════════════════════════════════════════════════════
// 2. ENVIRONMENT VARIABLES & CONFIGURATION
// ═════════════════════════════════════════════════════════════════════════════

/**
 * PHONE_NUMBER_ID
 * Location: .env file
 * What: Your WhatsApp Business Account Phone Number ID
 * Where to get: Meta Business Manager → WhatsApp → Settings → Phone Number ID
 * Example: 123456789012345
 */
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID || "YOUR_PHONE_NUMBER_ID";

/**
 * ACCESS_TOKEN
 * Location: .env file
 * What: API authentication token for WhatsApp Cloud API
 * Where to get: Meta Business Manager → Apps → Your App → Tokens
 * Example: EAABs... (very long string)
 */
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "YOUR_ACCESS_TOKEN";

/**
 * RECIPIENT_PHONE
 * Location: .env file
 * What: WhatsApp number that receives inquiry messages from users
 * Format: Country code + 10 digits (e.g., 919624769172 for India)
 * Example: 919624769172 (Hitesh Chaudhary)
 */
const RECIPIENT_PHONE = process.env.RECIPIENT_PHONE || "919624769172";

/**
 * TEST_PHONE
 * Location: .env file
 * What: YOUR personal WhatsApp number for testing and error notifications
 * Format: Country code + 10 digits
 * Used for: Debugging, testing messages, error logs
 * Example: 919876543210
 */
const TEST_PHONE = process.env.TEST_PHONE || "YOUR_TEST_PHONE";

/**
 * SEND_ERROR_LOGS
 * Location: .env file
 * What: Enable/disable automatic error notifications
 * Values: "true" or "false"
 * When enabled: If message fails, error details sent to TEST_PHONE
 */
const SEND_ERROR_LOGS = process.env.SEND_ERROR_LOGS === "true";

// ═════════════════════════════════════════════════════════════════════════════
// 3. REUSABLE FUNCTION: Send WhatsApp Message
// ═════════════════════════════════════════════════════════════════════════════

/**
 * sendWhatsAppMessage(phone, message)
 * 
 * Sends a WhatsApp text message using Meta's WhatsApp Cloud API
 * 
 * PARAMETERS:
 * - phone (string): Recipient phone number with country code (e.g., "919624769172")
 * - message (string): Message content to send
 * 
 * RETURNS: 
 * - Success: API response data from Meta
 * - Failure: Throws error with details
 * 
 * API ENDPOINT: https://graph.facebook.com/v17.0/{PHONE_NUMBER_ID}/messages
 * METHOD: POST
 * 
 * TROUBLESHOOTING COMMON ERRORS:
 * - "Invalid access token" → Check .env ACCESS_TOKEN
 * - "Invalid phone number ID" → Check .env PHONE_NUMBER_ID
 * - "Message limit exceeded" → Wait before sending more messages
 * - "Invalid recipient number" → Check phone number format (include country code)
 */
const sendWhatsAppMessage = async (phone, message) => {
  try {
    console.log(`📤 Sending WhatsApp message to ${phone}...`);
    
    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",        // Always "whatsapp" for this API
        to: phone,                            // Recipient number
        type: "text",                         // Message type (text, template, etc.)
        text: { body: message },              // The actual message content
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,  // API authentication
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// ═════════════════════════════════════════════════════════════════════════════
// 4. ENDPOINT: Health Check
// ═════════════════════════════════════════════════════════════════════════════

/**
 * GET /health
 * 
 * CHECK IF SERVER IS RUNNING
 * 
 * Usage: 
 * - URL: http://localhost:5000/health
 * - Check if server is alive and responsive
 * 
 * Response:
 * {
 *   "status": "Server is running",
 *   "timestamp": "2026-01-28T10:30:45.123Z"
 * }
 */
app.get("/health", (req, res) => {
  res.json({ 
    status: "Server is running",
    timestamp: new Date(),
    credentials: {
      PHONE_NUMBER_ID: PHONE_NUMBER_ID === "YOUR_PHONE_NUMBER_ID" ? "❌ NOT SET" : "✅ CONFIGURED",
      ACCESS_TOKEN: ACCESS_TOKEN === "YOUR_ACCESS_TOKEN" ? "❌ NOT SET" : "✅ CONFIGURED",
      TEST_PHONE: TEST_PHONE === "YOUR_TEST_PHONE" ? "❌ NOT SET" : "✅ CONFIGURED"
    }
  });
});

// ═════════════════════════════════════════════════════════════════════════════
// 5. ENDPOINT: Send Inquiry Message (From Website Form)
// ═════════════════════════════════════════════════════════════════════════════

/**
 * POST /send-whatsapp
 * 
 * MAIN ENDPOINT - Receives inquiry data from website form and sends to WhatsApp
 * 
 * FLOW:
 * 1. User fills form on website (Budget.jsx)
 * 2. Frontend sends POST request with phone & message
 * 3. Server validates credentials
 * 4. Server calls WhatsApp API to send message to RECIPIENT_PHONE
 * 5. If error occurs and SEND_ERROR_LOGS=true, sends error log to TEST_PHONE
 * 
 * REQUEST BODY:
 * {
 *   "phone": "919624769172",  // From frontend (user's phone - can be ignored)
 *   "message": "Full inquiry details..."
 * }
 * 
 * RESPONSES:
 * 
 * ✅ SUCCESS (200):
 * {
 *   "success": true,
 *   "message": "Message sent successfully",
 *   "data": { ... WhatsApp API response ... }
 * }
 * 
 * ❌ ERROR - Missing Fields (400):
 * {
 *   "success": false,
 *   "error": "Phone and message are required"
 * }
 * 
 * ❌ ERROR - Credentials Not Set (500):
 * {
 *   "success": false,
 *   "error": "WhatsApp API credentials not configured..."
 * }
 * 
 * ❌ ERROR - WhatsApp API Failure (500):
 * {
 *   "success": false,
 *   "error": { ... detailed error from WhatsApp API ... }
 * }
 * 
 * HOW TO MODIFY:
 * - Change message recipient: Modify RECIPIENT_PHONE in .env
 * - Change error recipient: Modify TEST_PHONE in .env
 * - Disable error logs: Set SEND_ERROR_LOGS=false in .env
 * - Add more validation: Add checks before sendWhatsAppMessage call
 * - Change API version: Update v17.0 to newer version if available
 */
app.post("/send-whatsapp", async (req, res) => {
  const { phone, message } = req.body;

  // ─────────────────────────────────────────────────────────────────────────
  // VALIDATION 1: Check if phone and message are provided
  // ─────────────────────────────────────────────────────────────────────────
  if (!phone || !message) {
    console.warn("⚠️  Missing required fields: phone or message");
    return res.status(400).json({ success: false, error: "Phone and message are required" });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // VALIDATION 2: Check if WhatsApp credentials are configured
  // ─────────────────────────────────────────────────────────────────────────
  if (PHONE_NUMBER_ID === "YOUR_PHONE_NUMBER_ID" || ACCESS_TOKEN === "YOUR_ACCESS_TOKEN") {
    console.error("❌ WhatsApp credentials not configured in environment variables");
    console.error("   📝 Please update .env file with:");
    console.error("   - PHONE_NUMBER_ID: Get from Meta Business Manager");
    console.error("   - ACCESS_TOKEN: Get from Meta Business Manager");
    
    return res.status(500).json({ 
      success: false, 
      error: "WhatsApp API credentials not configured. Please set PHONE_NUMBER_ID and ACCESS_TOKEN in .env file" 
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SEND MESSAGE TO RECIPIENT
  // ─────────────────────────────────────────────────────────────────────────
  try {
    console.log(`\n📤 SENDING MESSAGE TO WHATSAPP:`);
    console.log(`   📱 Recipient: ${RECIPIENT_PHONE}`);
    console.log(`   📊 Message length: ${message.length} characters`);
    
    // Send to the configured recipient (RECIPIENT_PHONE)
    const response = await sendWhatsAppMessage(RECIPIENT_PHONE, message);

    console.log("✅ WhatsApp message sent successfully!");
    console.log(`   📨 API Response:`, response);
    
    res.status(200).json({ success: true, data: response, message: "Message sent successfully" });
    
  } catch (error) {
    const errorMsg = error.response?.data || error.message || error;
    console.error("\n❌ ERROR SENDING WHATSAPP MESSAGE:");
    console.error(`   🔴 Error Details:`, errorMsg);
    
    // ───────────────────────────────────────────────────────────────────────
    // AUTOMATIC ERROR LOGGING (Optional)
    // If SEND_ERROR_LOGS=true in .env, sends error notification to TEST_PHONE
    // ───────────────────────────────────────────────────────────────────────
    if (SEND_ERROR_LOGS && TEST_PHONE !== "YOUR_TEST_PHONE") {
      console.log(`📨 Sending error log to TEST_PHONE: ${TEST_PHONE}`);
      
      const errorLogMessage = `❌ ERROR LOG FROM SERVER\n---------------------------------\n⏰ Time: ${new Date().toLocaleString()}\n🔴 Error: ${JSON.stringify(errorMsg)}\n📞 Failed to send to: ${RECIPIENT_PHONE}\n🔧 Please check server configuration`;
      
      try {
        await sendWhatsAppMessage(TEST_PHONE, errorLogMessage);
        console.log("✅ Error notification sent to TEST_PHONE successfully");
      } catch (logError) {
        console.error("❌ Failed to send error log to TEST_PHONE:", logError);
      }
    } else if (!SEND_ERROR_LOGS) {
      console.log("ℹ️  SEND_ERROR_LOGS is disabled in .env file");
    } else if (TEST_PHONE === "YOUR_TEST_PHONE") {
      console.log("⚠️  TEST_PHONE not configured in .env file - error logs cannot be sent");
    }
    
    res.status(500).json({ success: false, error: errorMsg });
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// 6. ENDPOINT: Test WhatsApp Connection
// ═════════════════════════════════════════════════════════════════════════════

/**
 * GET /test-message
 * 
 * TEST THE WHATSAPP INTEGRATION
 * 
 * USAGE:
 * - URL: http://localhost:5000/test-message
 * - Check if credentials are working
 * - Verify TEST_PHONE receives messages
 * - Debug connection issues
 * 
 * REQUIREMENTS:
 * - TEST_PHONE must be set in .env file
 * - PHONE_NUMBER_ID and ACCESS_TOKEN must be valid
 * 
 * WHAT HAPPENS:
 * 1. Sends test message to TEST_PHONE (your personal number)
 * 2. Message contains timestamp and confirmation
 * 3. If successful: Shows "Message sent to TEST_PHONE"
 * 4. If failed: Shows detailed error
 * 
 * RESPONSE - SUCCESS (200):
 * {
 *   "success": true,
 *   "message": "Test message sent to 91XXXXXXXXXX"
 * }
 * 
 * RESPONSE - ERROR (400):
 * {
 *   "success": false,
 *   "error": "TEST_PHONE not configured in .env"
 * }
 * 
 * HOW TO TROUBLESHOOT:
 * 1. Check console output for errors
 * 2. Verify TEST_PHONE format (country code + 10 digits)
 * 3. Ensure phone is registered on WhatsApp
 * 4. Check PHONE_NUMBER_ID and ACCESS_TOKEN are correct
 * 5. Wait a few seconds between test messages (API rate limit)
 */
app.get("/test-message", async (req, res) => {
  console.log("\n🧪 TEST MESSAGE REQUEST RECEIVED\n");

  // ─────────────────────────────────────────────────────────────────────────
  // Check if TEST_PHONE is configured
  // ─────────────────────────────────────────────────────────────────────────
  if (TEST_PHONE === "YOUR_TEST_PHONE") {
    console.error("❌ TEST_PHONE not configured in .env");
    return res.status(400).json({ 
      success: false, 
      error: "TEST_PHONE not configured in .env file. Please add it to test WhatsApp connection." 
    });
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Send test message
  // ─────────────────────────────────────────────────────────────────────────
  const testMessage = `✅ TEST MESSAGE - WhatsApp Integration Working!\n---------------------------------\n🕐 Time: ${new Date().toLocaleString()}\n✨ Connection Status: SUCCESS\n📱 Receiving Number: ${TEST_PHONE}\n🎉 Ready to send real inquiries!`;
  
  try {
    console.log(`📤 Sending test message to: ${TEST_PHONE}`);
    const response = await sendWhatsAppMessage(TEST_PHONE, testMessage);
    
    console.log("✅ Test message sent successfully!");
    console.log(`   📨 API Response:`, response);
    
    res.status(200).json({ 
      success: true, 
      message: `Test message sent to ${TEST_PHONE}` 
    });
  } catch (error) {
    console.error("❌ Error sending test message:", error);
    res.status(500).json({ success: false, error: error });
  }
});

// ═════════════════════════════════════════════════════════════════════════════
// 7. ERROR HANDLING MIDDLEWARE
// ═════════════════════════════════════════════════════════════════════════════

/**
 * Global error handler for unexpected server errors
 * 
 * WHEN IT'S CALLED:
 * - When an unhandled error occurs in any endpoint
 * - When middleware catches an exception
 * 
 * RESPONSE:
 * {
 *   "success": false,
 *   "error": "Internal server error"
 * }
 * 
 * HOW TO MODIFY:
 * - Add logging to file/database
 * - Send error notifications
 * - Track error patterns
 */
app.use((err, req, res, next) => {
  console.error("\n❌ UNEXPECTED SERVER ERROR:");
  console.error("   🔴 Error Message:", err.message);
  console.error("   📍 Stack:", err.stack);
  
  res.status(500).json({ success: false, error: "Internal server error" });
});

// ═════════════════════════════════════════════════════════════════════════════
// 8. SERVER STARTUP & CONFIGURATION
// ═════════════════════════════════════════════════════════════════════════════

/**
 * PORT CONFIGURATION
 * - Reads from environment variable: process.env.PORT
 * - Default port: 5000 (if not set)
 * 
 * HOW TO CHANGE:
 * - Set PORT=3000 in .env file to use port 3000
 * - Or set via command line: PORT=3000 node server.js
 */
const PORT = process.env.PORT || 5000;

/**
 * START THE SERVER
 * 
 * WHAT HAPPENS:
 * 1. Server starts listening on configured PORT
 * 2. Shows status in console
 * 3. Displays configuration status (credentials set or not)
 * 4. Ready to receive requests from frontend
 * 
 * COMMON ISSUES:
 * - "Port already in use" → Change PORT in .env
 * - "EADDRINUSE" error → Kill process using the port
 *   Windows: netstat -ano | findstr :5000
 *   Linux/Mac: lsof -i :5000
 */
app.listen(PORT, () => {
  console.log("\n╔════════════════════════════════════════════════════════════════╗");
  console.log("║            ✅ WHATSAPP SERVER STARTED SUCCESSFULLY             ║");
  console.log("╚════════════════════════════════════════════════════════════════╝\n");
  
  console.log(`🌐 Server URL: http://localhost:${PORT}`);
  console.log(`📊 Server Health Check: http://localhost:${PORT}/health`);
  console.log(`🧪 Test WhatsApp: http://localhost:${PORT}/test-message`);
  
  console.log("\n📋 CONFIGURATION STATUS:");
  console.log(`   PHONE_NUMBER_ID: ${PHONE_NUMBER_ID === "YOUR_PHONE_NUMBER_ID" ? "❌ NOT SET - Messages won't send" : "✅ CONFIGURED"}`);
  console.log(`   ACCESS_TOKEN: ${ACCESS_TOKEN === "YOUR_ACCESS_TOKEN" ? "❌ NOT SET - Messages won't send" : "✅ CONFIGURED"}`);
  console.log(`   RECIPIENT_PHONE: ${RECIPIENT_PHONE}`);
  console.log(`   TEST_PHONE: ${TEST_PHONE === "YOUR_TEST_PHONE" ? "⚠️  NOT SET" : "✅ " + TEST_PHONE}`);
  console.log(`   ERROR LOGGING: ${SEND_ERROR_LOGS ? "✅ ENABLED" : "⚠️  DISABLED"}`);
  
  console.log("\n📝 QUICK START:");
  console.log("   1. Open http://localhost:5000/health to check server status");
  console.log("   2. Open http://localhost:5000/test-message to test WhatsApp");
  console.log("   3. Form submissions will send messages to RECIPIENT_PHONE");
  console.log("   4. Errors will be sent to TEST_PHONE (if enabled)\n");
});
