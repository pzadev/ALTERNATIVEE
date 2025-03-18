import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      Question: "What is ALTERNATIVE?",
      Answer:
        "ALTERNATIVE is a directory for educating and displaying information about alternatives to leading products/software and companies from friendly countries.",
    },
    {
      Question: "What is a 'friendly' company?",
      Answer:
        "A 'friendly' company is one that is from a European or Canadian source and one that does not engage in anti-consumer practises.",
    },
    {
      Question:
        "Is it easy to add my own information and ideas of alternatives?",
      Answer:
        "Yes! Simply click Submit in the header or in the sidebar and fill in the form. It will be added instantly.",
    },
    {
      Question: "I found some incorrect data, where do I report or fix it?",
      Answer: "Please contact data@alternative.world to report incorrect info.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Frequently Asked Questions
      </h1>
      {questions.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleAnswer(index)}
          className="hover:scale-105 transition-transform duration-100 font-bold bg-blue-200 w-100 h-auto p-6 mb-5 rounded-lg shadow-sm flex flex-col items-center text-center cursor-pointer"
        >
          Q: {item.Question}
          {openIndex === index && (
            <p className="text-red-600 mt-2">A: {item.Answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
