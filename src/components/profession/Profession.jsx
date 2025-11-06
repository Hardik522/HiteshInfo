import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Property Research",
    description:
      "I analyze the real estate market to identify the best properties for my clients, considering location, price trends, and investment potential to ensure informed decisions.",
  },
  {
    id: 2,
    title: "Client Consultation",
    description:
      "I provide personalized guidance to clients, understanding their requirements, budget, and preferences to match them with properties that meet their needs.",
  },
  {
    id: 3,
    title: "Deal Closure & Negotiation",
    description:
      "I assist clients in negotiations and handle the paperwork, ensuring a smooth and secure transaction, from offer to final deal closure.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in helping clients buy, sell, and invest in properties
      across residential and commercial sectors. My focus is on finding the
      perfect property that matches your needs and budget.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            With extensive market knowledge and a client-first approach, I guide
      you through every step of the transaction, from property research and
      negotiations to deal closure, ensuring a smooth and transparent process.
          </p>
        </div>
        <div className="mt-5 md:mt-12.5 text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5">
          {/* <a href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
           Get in Touch!
        </a> */}
        </div>  
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
