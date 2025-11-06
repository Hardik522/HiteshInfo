import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "Property Research",
    description:
      "I research the best residential and commercial properties that match clients’ needs and budgets, staying up-to-date with market trends.",
    svgPath:"M3 11L12 4L21 11V21H14V15H10V21H3V11ZM16.5 16.5C17.8807 16.5 19 17.6193 19 19C19 20.3807 17.8807 21.5 16.5 21.5C15.1193 21.5 14 20.3807 14 19C14 17.6193 15.1193 16.5 16.5 16.5ZM18.5 18.5L21 21"
  },
  {
    id: 2,
    title: "Property Analysis",
    description:
      "I evaluate property values, location benefits, and investment potential to guide clients in making informed decisions.",
    svgPath:
      "M3 21V10H7V21H3ZM10 21V5H14V21H10ZM17 21V14H21V21H17Z",
  },
  {
    id: 3,
    title: "Client Consultation",
    description:
      "I meet with clients to understand their requirements, explain options, and provide personalized recommendations for buying, selling, or renting.",
    svgPath:
      "M21 15C21 16.6569 19.6569 18 18 18H6L3 21V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V15ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z",
  },
  {
    id: 4,
    title: "Deal Closure",
    description:
      "I handle negotiations, contracts, and paperwork, ensuring a smooth and transparent transaction for both buyers and sellers.",
    svgPath:
      "M2 12L7 17L11 13L13 15L18 10L22 14M7 17L5 21M18 10L20 6",
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Work Process</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          I help families and investors find their ideal properties with a clear, step-by-step approach. From understanding your needs to presenting the best options, every step is tailored to ensure a smooth experience.
        </p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
           My process combines market research, property tours, and personalized advice to make buying, selling, or investing in real estate simple, transparent, and rewarding.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
