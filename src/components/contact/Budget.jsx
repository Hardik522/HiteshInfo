import React, { useState } from "react";

const Budget = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    minBudget: "",
    maxBudget: "",
    propertyType: "",
    message: "",
  });

  const commonClass =
    "border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-picto-primary w-full";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare WhatsApp message
    const { name, email, mobile, location, minBudget, maxBudget, propertyType, message } = formData;
    const text = `
*New Budget Inquiry* 🏡
---------------------------------
👤 Name: ${name}
📧 Email: ${email}
📞 Mobile: ${mobile}
📍 Location: ${location}
💰 Budget: ${minBudget} - ${maxBudget}
🏠 Property Type: ${propertyType}
📝 Message: ${message}
    `;
    try {
      const response = await fetch("http://localhost:5000/send-whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: "919624769172", message: text }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully via WhatsApp!");
        if (onClose) onClose();
        setFormData({ name: "", email: "", mobile: "", location: "", minBudget: "", maxBudget: "", propertyType: "", message: "" });
      } else {
        alert("Failed to send message: " + JSON.stringify(data.error));
      }
    } catch (err) {
      console.error(err);
      alert("Error sending WhatsApp message.");
    }
  };

  return (
    // <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
    //   <h2 className="text-3xl font-bold mb-4 text-center text-picto-primary">Set Your Budget</h2>
    //   <p className="text-gray-500 mb-6 text-center">Discuss your property needs, budget, and preferences with me.</p>

    //   <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    //     {/* Name */}
    //     <input type="text" name="name" placeholder="Name*" className={commonClass} value={formData.name} onChange={handleChange} required />

    //     {/* Email */}
    //     <input type="email" name="email" placeholder="Email*" className={commonClass} value={formData.email} onChange={handleChange} required />

    //     {/* Mobile */}
    //     <input type="text" name="mobile" placeholder="Mobile No*" className={commonClass} value={formData.mobile} onChange={handleChange} required />

    //     {/* Location & Property Type */}
    //     <div className="flex flex-col sm:flex-row gap-4">
    //       <input type="text" name="location" placeholder="Location*" className={`${commonClass} sm:w-1/2`} value={formData.location} onChange={handleChange} required />
    //       <select name="propertyType" className={`${commonClass} sm:w-1/2`} value={formData.propertyType} onChange={handleChange} required>
    //         <option value="">Property Type*</option>
    //         <option value="Residential">Residential</option>
    //         <option value="Commercial">Commercial</option>
    //         <option value="Land">Land</option>
    //         <option value="Other">Other</option>
    //       </select>
    //     </div>

    //     {/* Min Budget & Max Budget */}
    //     <div className="flex flex-col sm:flex-row gap-4">
    //       <input type="number" name="minBudget" placeholder="Min Budget*" className={`${commonClass} sm:w-1/2`} value={formData.minBudget} onChange={handleChange} required />
    //       <input type="number" name="maxBudget" placeholder="Max Budget*" className={`${commonClass} sm:w-1/2`} value={formData.maxBudget} onChange={handleChange} required />
    //     </div>

    //     {/* Message */}
    //     <textarea name="message" placeholder="Message*" rows={4} className={commonClass} value={formData.message} onChange={handleChange} required />

    //     {/* Submit Button */}
    //     <div className="mt-4 flex justify-center">
    //       <button type="submit" className="bg-picto-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-picto-dark transition-colors">
    //         Send via WhatsApp
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div>
      <p className="text-[12px] xs:text-[14px] max-lg:text-center sm:text-lg font-normal text-soft-dark" style={{ textAlignLast: "center" }} >
        Set Your Budget
      </p>
      <div className="mx-2">
        <form className="flex flex-col gap-4 mt-4">
          <input type="text" name="name" placeholder="Name*" className={`${commonClass}`} value={formData.name} onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile No*" className={commonClass} value={formData.mobile} onChange={handleChange} required />

          <div className="flex max-xs:flex-col max-xs:gap-4">
            <select name="propertyType" className={`${commonClass} xs:w-[50%] me-5`} value={formData.propertyType} onChange={handleChange} required>
             <option value="">Property Type*</option>
             <option value="Residential">Residential</option>
             <option value="Commercial">Commercial</option>
             <option value="Land">Land</option>
             <option value="Other">Other</option>
           </select>
           <input type="text" name="location" placeholder="Location*" className={`${commonClass} xs:w-[50%] me-7`} value={formData.location} onChange={handleChange} required />
          </div>
          <div className="flex max-xs:flex-col max-xs:gap-4">
            <input type="number" name="minBudget" placeholder="Min Budget*" className={`${commonClass} xs:w-[50%] me-5`} value={formData.minBudget} onChange={handleChange} required />
           <input type="number" name="maxBudget" placeholder="Max Budget*" className={`${commonClass} xs:w-[50%] me-7`} value={formData.maxBudget} onChange={handleChange} required />
          </div>
          <textarea name="message" placeholder="Message*" rows={4} className={commonClass} value={formData.message} onChange={handleChange} required />          
          <button type="submit" className="btn gap-3 max-lg:mx-auto btn-primary rounded-sm mt-5 text-[13px] md:text-[16px] w-fit font-semibold lg:mt-12.5 p-2 md:px-4" >
            Submit 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Budget;
