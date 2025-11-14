"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is CarStudio?",
    answer: "CarStudio is a premium platform to explore, compare, and buy new and used cars, along with expert reviews and news."
  },
  {
    question: "How can I sell my car?",
    answer: "You can list your car by visiting the 'Used Cars' section and clicking on 'Sell Your Car'. Our team will guide you through the process."
  },
  {
    question: "Do you offer car loans?",
    answer: "Yes, CarStudio provides car loan assistance for both new and used cars through partnered financial institutions."
  },
  {
    question: "Can I compare multiple cars?",
    answer: "Absolutely! Use the 'Compare' feature to select up to 3 cars and see detailed comparisons of features, prices, and specs."
  },
  {
    question: "How often is the car news updated?",
    answer: "Our news and reviews section is updated daily to provide the latest information, expert insights, and user reviews."
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20 mt-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Frequently <span className="text-blue-600">Asked Questions</span>
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span className="ml-4">
                  {openIndex === index ? (
                    <svg
                      className="w-6 h-6 text-blue-600 transform rotate-180 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-400 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`px-6 pb-4 text-gray-700 transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="p-3">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
