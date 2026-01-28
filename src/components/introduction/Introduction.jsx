import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import Budget from "../contact/Budget.jsx";

const informationSummaryData = [
  { id: 1, title: "Experience in Real Estate", description: "6+ Years" },
  { id: 2, title: "Properties Sold", description: "350+ Deals" },
  { id: 3, title: "Happy Clients", description: "400+" },
  { id: 4, title: "Service Radius", description: "20 KM" },
  { id: 5, title: "Client Satisfaction", description: "100%" },
];

const Introduction = () => {
  const [showBudget, setShowBudget] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showBudget ? "hidden" : "auto";
  }, [showBudget]);

  return (
    <>
      <div className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-32 lg:mb-28 max-xl:gap-2 p-2 max-xxl:px-4" id="introduction">
      {/* Left section */}
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-32 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m <span className="text-nowrap shrink-0 inline-block w-full">Hitesh Chaudhary</span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a dedicated <span className="bg-highlight">Real Estate Broker</span> based in India, helping families and individuals <span className="bg-highlight">buy, sell, and rent</span> properties.
          </p>

          <p className="text-center lg:text-start">
            <button type="button"
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
              onClick={() => setShowBudget(true)}
            >
              Chat with me!
            </button>
          </p>
        </div>

        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative">
        <img
          className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl"
          src={person}
          alt="person"
        />
      </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        /* ULTIMATE MODAL STYLING - GUARANTEED TO SHOW */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          padding: 16px;
          box-sizing: border-box;
          overflow: auto;
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .modal-content {
          background: white;
          border-radius: 20px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          width: 100%;
          max-width: 750px;
          max-height: 93vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: fadeIn 0.3s ease-out forwards;
          margin: auto;
        }
        
        .modal-header {
          position: sticky;
          top: 0;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 100;
          flex-shrink: 0;
        }
        
        .modal-header h2 {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
          flex: 1;
        }
        
        .modal-body {
          padding: 10px 14px;
          overflow-y: auto;
          overflow-x: hidden;
          flex: 1;
        }
        
        /* Responsive for mobile */
        @media (max-width: 480px) {
          .modal-overlay {
            padding: 12px;
          }
          
          .modal-content {
            max-width: 100%;
            max-height: 95vh;
            border-radius: 16px;
          }
          
          .modal-header {
            padding: 16px;
          }
          
          .modal-header h2 {
            font-size: 18px;
          }
          
          .modal-body {
            padding: 16px;
          }
        }
        
        /* Responsive for tablet */
        @media (min-width: 481px) and (max-width: 768px) {
          .modal-content {
            max-width: 500px;
          }
        }
        
        /* Responsive for desktop */
        @media (min-width: 769px) {
          .modal-content {
            max-width: 600px;
          }
          
          .modal-body {
            padding: 32px;
          }
        }
      `}</style>

      {/* Modal Portal - Rendered at document body level */}
      {showBudget && createPortal(
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Header with Close Button */}
            <div className="modal-header">
              <h2 style={{textAlign: "center", flex: 1, margin: 0}}>Set Your Budget</h2>
              <button 
                className="ml-4 text-gray-400 hover:text-gray-600 transition-colors text-2xl xs:text-3xl font-light leading-none flex-shrink-0" 
                onClick={() => setShowBudget(false)}
                aria-label="Close modal"
                style={{marginLeft: "16px", fontSize: "28px", background: "none", border: "none", cursor: "pointer", padding: 0}}
              >
                ×
              </button>
            </div>
            
            {/* Form Content */}
            <div className="modal-body">
              <Budget onClose={() => setShowBudget(false)} />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Introduction;
