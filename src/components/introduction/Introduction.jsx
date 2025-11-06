import React, { useState, useEffect } from "react";
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

      {/* Centered Modal */}
      {showBudget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 md:p-10 max-h-screen overflow-y-auto relative flex flex-col animate-fadeIn">
            <button className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold" onClick={() => setShowBudget(false)}>✖</button>
            <Budget onClose={() => setShowBudget(false)} />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default Introduction;
