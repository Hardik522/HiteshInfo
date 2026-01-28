import React, { useState } from "react";

const Budget = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    areas: "",
    minBudget: "",
    maxBudget: "",
    propertyType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // "success" or "error"

  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => setToastMessage(""), 4000); // Hide after 4 seconds
  };

  // Validation Functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/; // 10 digits for Indian numbers
    return mobileRegex.test(mobile.replace(/[^\d]/g, ""));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate Full Name - Accept all text but not empty
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate Mobile
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    // Validate City
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    // Validate State
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    // Validate Areas/Location
    if (!formData.areas.trim()) {
      newErrors.areas = "Location (Areas) is required";
    }

    // Validate Property Type
    if (!formData.propertyType) {
      newErrors.propertyType = "Property Type is required";
    }

    // Validate Budget
    if (!formData.minBudget) {
      newErrors.minBudget = "Min Budget is required";
    } else if (isNaN(formData.minBudget) || formData.minBudget < 0) {
      newErrors.minBudget = "Please enter a valid amount";
    }

    if (!formData.maxBudget) {
      newErrors.maxBudget = "Max Budget is required";
    } else if (isNaN(formData.maxBudget) || formData.maxBudget < 0) {
      newErrors.maxBudget = "Please enter a valid amount";
    }

    if (formData.minBudget && formData.maxBudget && parseInt(formData.minBudget) > parseInt(formData.maxBudget)) {
      newErrors.maxBudget = "Max Budget must be greater than Min Budget";
    }

    // Validate Additional Details
    if (!formData.message.trim()) {
      newErrors.message = "Additional Details are required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Please provide at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      showToast("Please fix the errors in the form", "error");
      return;
    }

    const { name, email, mobile, city, state, areas, minBudget, maxBudget, propertyType, message } = formData;
    const text = `*New Budget Inquiry* 🏡\n---------------------------------\n👤 Name: ${name}\n📧 Email: ${email}\n📞 Mobile: ${mobile}\n🏙️ City: ${city}\n📍 State: ${state}\n📍 Areas: ${areas}\n💰 Budget: ₹${minBudget} - ₹${maxBudget}\n🏠 Property Type: ${propertyType}\n📝 Message: ${message}`;
    
    try {
      const response = await fetch("http://localhost:5000/send-whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: "919624769172", message: text }),
      });
      const data = await response.json();
      if (data.success) {
        showToast("Message sent with Hitesh Chaudhary. He will connect soon as possible. 🎉");
        setFormData({ name: "", email: "", mobile: "", city: "", state: "", areas: "", minBudget: "", maxBudget: "", propertyType: "", message: "" });
        setErrors({});
        setTimeout(() => {
          if (onClose) onClose();
        }, 2000);
      } else {
        showToast(`Failed to send message: ${data.error || "Unknown error"}`, "error");
      }
    } catch (err) {
      console.error("Error details:", err);
      showToast("Error sending WhatsApp message. Please check backend connection.", "error");
    }
  };

  const labelStyle = "block text-xs font-bold text-gray-800 mb-1";
  const inputStyle = "w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base font-medium transition-all";
  const errorInputStyle = "w-full px-4 py-3 bg-white border-2 border-red-500 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200 text-base font-medium transition-all";
  const errorTextStyle = "text-red-500 text-xs mt-1 font-semibold";

  return (
    <div className="w-full" style={{fontSize: '12px'}}>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
        
        {/* Row 1: Full Name - Full Width */}
        <div>
          <label style={{...{className: labelStyle}}}>👤 Full Name <span style={{color: 'red'}}>*</span></label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your full name" 
            className={inputStyle}
            style={errors.name ? {border: '2px solid #ef4444', backgroundColor: '#fef2f2'} : {}}
            value={formData.name} 
            onChange={handleChange}
          />
          {errors.name && <div style={{...errorTextStyle}}>{errors.name}</div>}
        </div>

        {/* Row 2: Email & Mobile - Two Columns */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
          <div>
            <label style={{...{className: labelStyle}}}>📧 Email Address <span style={{color: 'red'}}>*</span></label>
            <input 
              type="email" 
              name="email" 
              placeholder="your@email.com" 
              className={inputStyle}
              style={errors.email ? {border: '2px solid #ef4444', backgroundColor: '#fef2f2'} : {}}
              value={formData.email} 
              onChange={handleChange}
            />
            {errors.email && <div style={{...errorTextStyle}}>{errors.email}</div>}
          </div>
          <div>
            <label style={{...{className: labelStyle}}}>📞 Mobile Number <span style={{color: 'red'}}>*</span></label>
            <input 
              type="tel" 
              name="mobile" 
              placeholder="9876543210" 
              className={inputStyle}
              style={errors.mobile ? {border: '2px solid #ef4444', backgroundColor: '#fef2f2'} : {}}
              value={formData.mobile} 
              onChange={(e) => {
                const value = e.target.value.replace(/[^\d]/g, "").slice(0, 10);
                setFormData((prev) => ({ ...prev, mobile: value }));
                if (errors.mobile) {
                  setErrors((prev) => ({ ...prev, mobile: "" }));
                }
              }}
              maxLength="10"
            />
            {errors.mobile && <div style={{...errorTextStyle}}>{errors.mobile}</div>}
          </div>
        </div>

        {/* Row 3: City & State - Two Columns (Half Width Each) */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
          <div>
            <label style={{...{className: labelStyle}}}>🏙️ City <span style={{color: 'red'}}>*</span></label>
            <input 
              type="text" 
              name="city" 
              placeholder="e.g., Mumbai, Delhi, Bangalore" 
              className={inputStyle}
              style={errors.city ? {border: '2px solid #ef4444', backgroundColor: '#fef2f2'} : {}}
              value={formData.city} 
              onChange={handleChange}
            />
            {errors.city && <div style={{...errorTextStyle}}>{errors.city}</div>}
          </div>
          <div>
            <label style={{...{className: labelStyle}}}>📍 State <span style={{color: 'red'}}>*</span></label>
            <input 
              type="text" 
              name="state" 
              placeholder="e.g., Maharashtra, Delhi, Karnataka" 
              className={inputStyle}
              style={errors.state ? {border: '2px solid #ef4444', backgroundColor: '#fef2f2'} : {}}
              value={formData.state} 
              onChange={handleChange}
            />
            {errors.state && <div style={{...errorTextStyle}}>{errors.state}</div>}
          </div>
        </div>

        {/* Row 4: Location (Areas) - Full Width */}
        <div>
          <label style={{...{className: labelStyle}}}>📍 Location (Areas) <span style={{color: 'red'}}>*</span></label>
          <input 
            type="text" 
            name="areas" 
            placeholder="e.g., Bandra, Andheri, Powai, etc." 
            className={inputStyle}
            style={errors.areas ? {border: '2px solid #ef4444', backgroundColor: '#fef2f2'} : {}}
            value={formData.areas} 
            onChange={handleChange}
          />
          {errors.areas && <div style={{...errorTextStyle}}>{errors.areas}</div>}
        </div>

        {/* Row 5: Property Type - Half Width */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '12px'}}>
          <div>
            <label style={{...{className: labelStyle}}}>🏠 Property Type <span style={{color: 'red'}}>*</span></label>
            <select 
              name="propertyType" 
              className={inputStyle}
              style={errors.propertyType ? {border: '2px solid #ef4444', backgroundColor: '#fef2f2', appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27%3E%3Cpath fill=%27%23ef4444%27 d=%27M4.5 6L8 10l3.5-4z%27/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '16px', paddingRight: '40px', cursor: 'pointer'} : {appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 16 16%27%3E%3Cpath fill=%27%232563eb%27 d=%27M4.5 6L8 10l3.5-4z%27/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '16px', paddingRight: '40px', cursor: 'pointer'}}
              value={formData.propertyType} 
              onChange={handleChange}
            >
              <option value="">-- Select Property Type --</option>
              <option value="Residential">🏘️ Residential</option>
              <option value="Commercial">🏢 Commercial</option>
              <option value="Land">🌱 Land</option>
              <option value="Plot">📍 Plot</option>
              <option value="Other">➕ Other</option>
            </select>
            {errors.propertyType && <div style={{...errorTextStyle}}>{errors.propertyType}</div>}
          </div>
        </div>

        {/* Row 6: Min & Max Budget - Two Columns Side by Side */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
          <div>
            <label style={{...{className: labelStyle}}}>💰 Min Budget (₹) <span style={{color: 'red'}}>*</span></label>
            <input 
              type="number" 
              name="minBudget" 
              placeholder="1000000" 
              className={inputStyle}
              style={errors.minBudget ? {border: '2px solid #ef4444', backgroundColor: '#fef2f2'} : {}}
              value={formData.minBudget} 
              onChange={handleChange}
            />
            {errors.minBudget && <div style={{...errorTextStyle}}>{errors.minBudget}</div>}
          </div>
          <div>
            <label style={{...{className: labelStyle}}}>💰 Max Budget (₹) <span style={{color: 'red'}}>*</span></label>
            <input 
              type="number" 
              name="maxBudget" 
              placeholder="5000000" 
              className={inputStyle}
              style={errors.maxBudget ? {border: '2px solid #ef4444', backgroundColor: '#fef2f2'} : {}}
              value={formData.maxBudget} 
              onChange={handleChange}
            />
            {errors.maxBudget && <div style={{...errorTextStyle}}>{errors.maxBudget}</div>}
          </div>
        </div>

        {/* Row 7: Additional Details - Full Width */}
        <div>
          <label style={{...{className: labelStyle}}}>📝 Additional Details <span style={{color: 'red'}}>*</span></label>
          <textarea 
            name="message" 
            placeholder="Describe your requirements, preferences, timeline..." 
            style={{width: '100%', padding: '12px', minHeight: '60px', maxHeight: '100px', border: errors.message ? '2px solid #ef4444' : '2px solid #d1d5db', borderRadius: '8px', fontSize: '15px', fontFamily: 'inherit', resize: 'vertical', fontWeight: '500', color: '#111827', lineHeight: '1.5', transition: 'all 0.3s', backgroundColor: errors.message ? '#fef2f2' : 'white'}} 
            onFocus={(e) => {e.target.style.borderColor = '#2563eb'; e.target.style.boxShadow = '0 0 0 2px rgba(37, 99, 235, 0.1)';}} 
            onBlur={(e) => {e.target.style.borderColor = errors.message ? '#ef4444' : '#d1d5db'; e.target.style.boxShadow = 'none';}} 
            value={formData.message} 
            onChange={handleChange}
            rows="3"
          />
          {errors.message && <div style={{...errorTextStyle}}>{errors.message}</div>}
        </div>

        {/* Row 8: Button - Centered */}
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '8px'}}>
          <button 
            type="submit" 
            style={{background: 'linear-gradient(to right, #2563eb, #1d4ed8, #1e40af)', color: 'white', fontWeight: 'bold', padding: '10px 32px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '13px', transition: 'all 0.3s', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', width: 'auto'}}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            ✓ Send via WhatsApp
          </button>
        </div>

        <p style={{fontSize: '11px', color: '#999', textAlign: 'center', marginTop: '4px'}}>✓ We'll contact within 24 hours</p>
      </form>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '16px 24px',
            backgroundColor: toastType === 'success' ? '#10b981' : '#ef4444',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            fontSize: '14px',
            fontWeight: 'bold',
            zIndex: 9999,
            animation: 'slideIn 0.3s ease-out',
            maxWidth: '320px',
            wordWrap: 'break-word',
          }}
        >
          {toastMessage}
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Budget;
