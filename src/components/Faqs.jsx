import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is CELLPE?",
    answer:
      "CELLPE is a modern digital ment app that allows you to recharge,  bills, book travel, and access city services — all in one secure platform.",
  },
  {
    question: "Is CELLPE safe to use?",
    answer:
      "Absolutely! CELLPE uses bank-grade encryption and secure ment gateways to ensure your transactions and data remain safe.",
  },
  {
    question: "Do I get rewards on payments?",
    answer:
      "Yes! CELLPE offers cashback, rewards, and exclusive discounts on recharges, bill ments, bookings, and more.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply download the CELLPE app, sign up with your mobile number, and start using all services instantly.",
  },
  {
    question: "Does CELLPE support all operators?",
    answer:
      "Yes, CELLPE supports all major mobile operators, DTH providers, utility billers registered under BBPS, and city services.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Quick answers to help you get the most out of CELLPE.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#B9FBC0] via-[#A6E3E9] to-[#4FC3F7] rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-black focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? "rotate-180 text-black" : "text-black"
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-black">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
