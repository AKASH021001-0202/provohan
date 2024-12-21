import React, { useState } from "react";
import { faqs } from "../localstorage";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle between opening and closing
  };


 
  return (
    <div>
      <div className="container mx-auto">
      <div className="flex items-center justify-center pt-10">
  <hr className="w-36 h-0.5 bg-gray-400 border-0" />
  <h1 className="text-2xl font-semibold text-current mx-4">FAQs about Used Cars in Chennai</h1>
  <hr className="w-36 h-0.5 bg-gray-400 border-0" />
</div>

        <div id="accordion-color " className="p-3">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <h2 id={`accordion-color-heading-${index}`}>
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`flex items-center justify-between w-full p-5 font-medium text-black border  rounded-xl ${
                    activeIndex === index
                      ? "bg-[#EDE7FF] text-[#FF7101] border-b-0 rounded-b-none"
                      : "dark:border-gray-700 dark:text-[#FF7101] hover:bg-blue-100 dark:hover:bg-gray-800"
                  }`}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion-color-body-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transform ${
                      activeIndex === index ? "" : "rotate-180"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-color-body-${index}`}
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } px-5 py-2 bg-[#ede7ff] rounded-b-xl  border-x-slate-100 dark:border-gray-700 dark:bg-gray-900`}
              >
                <p className="mb-2 text-[#64598F] dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
