# WhatsApp Integration Setup Guide

## Overview
The "Set Your Budget" form sends messages directly through your WhatsApp Business Account via the WhatsApp Cloud API. The flow is:
- User fills form in modal
- Clicks "✓ Send via WhatsApp" button
- Message is sent to backend
- Backend forwards to WhatsApp API
- Message delivered to your WhatsApp

## Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Get WhatsApp Credentials

#### Option A: Use WhatsApp Cloud API (Recommended)
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a Meta App
3. Add WhatsApp product
4. Get your:
   - **PHONE_NUMBER_ID**: Your WhatsApp Business Phone Number ID
   - **ACCESS_TOKEN**: Permanent access token for API calls

#### Option B: Use Twilio (Alternative)
If using Twilio instead:
1. Sign up at [Twilio](https://www.twilio.com/)
2. Get your Account SID and Auth Token
3. Configure WhatsApp Sandbox

### 3. Configure Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your credentials
PHONE_NUMBER_ID=your_phone_number_id
ACCESS_TOKEN=your_access_token
PORT=5000
```

### 4. Start Backend Server
```bash
npm start
```

You should see:
```
✅ Server running on http://localhost:5000
📱 WhatsApp API Status: ✅ CONFIGURED
```

## Frontend Integration

The frontend is already configured to:
1. Collect user details in the modal form
2. Format message with all information
3. Send POST request to `http://localhost:5000/send-whatsapp`
4. Handle success/error responses

### Form Data Sent
```javascript
{
  phone: "919624769172",  // Your WhatsApp number (with country code)
  message: "
    *New Budget Inquiry* 🏡
    ---
    👤 Name: [User Name]
    📧 Email: [User Email]
    📞 Mobile: [User Mobile]
    📍 Location: [User Location]
    💰 Budget: [Min] - [Max]
    🏠 Property Type: [Type]
    📝 Message: [User Details]
  "
}
```

## Testing

### Test 1: Check Backend Health
```bash
curl http://localhost:5000/health
```

### Test 2: Send Test Message
```bash
curl -X POST http://localhost:5000/send-whatsapp \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "919624769172",
    "message": "Test message from backend"
  }'
```

### Test 3: Use Frontend Form
1. Open your website
2. Click "Chat with me!" button
3. Fill the form
4. Click "✓ Send via WhatsApp"
5. Check your WhatsApp for the message

## Error Handling

| Error | Cause | Solution |
|-------|-------|----------|
| 401 Unauthorized | Invalid access token | Update ACCESS_TOKEN in .env |
| 400 Bad Request | Invalid phone number | Ensure phone includes country code (e.g., +91) |
| Phone number invalid | Wrong format | Use international format: +[country code][number] |
| API rate limit | Too many requests | Wait before retrying |

## Phone Number Format

Always use international format:
- India: +91 followed by 10 digits
- US: +1 followed by 10 digits
- UK: +44 followed by digits

## Troubleshooting

### Messages not sending?
1. Check backend is running: `http://localhost:5000/health`
2. Verify WhatsApp credentials in .env
3. Check browser console for error messages
4. Check backend logs for API errors

### Frontend not connecting to backend?
1. Ensure backend is running on port 5000
2. Check CORS is enabled (already enabled in server.js)
3. Verify API endpoint URL in Budget.jsx

### WhatsApp not receiving messages?
1. Verify phone number is registered with WhatsApp Business
2. Check Access Token hasn't expired
3. Confirm PHONE_NUMBER_ID is correct
4. Check WhatsApp Business Account status

## Security Notes

1. **Never commit .env file** - Add to .gitignore
2. **Keep ACCESS_TOKEN secret** - Don't share publicly
3. **Use HTTPS in production** - Ensure encrypted transmission
4. **Validate input** - Backend already validates phone and message
5. **Rate limiting** - Add in production for API protection

## Production Deployment

When deploying to production:

1. Update backend URL in Budget.jsx:
```javascript
// Change from:
const response = await fetch("http://localhost:5000/send-whatsapp", ...)

// To:
const response = await fetch("https://your-api.com/send-whatsapp", ...)
```

2. Update environment variables on hosting platform
3. Ensure CORS allows frontend domain
4. Add SSL certificate for HTTPS
5. Monitor API usage and costs

## Next Steps

✅ Backend WhatsApp integration ready
✅ Frontend form ready to send messages
✅ Error handling configured
✅ Environment variable support added

Just add your WhatsApp credentials to `.env` and you're ready to go!
