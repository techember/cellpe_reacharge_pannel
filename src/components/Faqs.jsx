import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is CellPe?",
    answer:
      "CellPe is a modern digital payment app that allows you to recharge, book travel, pay bills,  all in one secure platform.",
  },
  {
    question: "Is CellPe safe to use?",
    answer:
      "Absolutely! CellPe uses bank-grade encryption and secure payment gateways to ensure your transactions and personal data remain protected.",
  },
  {
    question: "Do I get rewards on payments?",
    answer:
      "Yes! CellPe offers cashback, rewards, and exclusive discounts on recharges, bookings, and more.",
  },
  {
    question: "How do I get started?",
    answer:
      "Download the CellPe app, sign up using your mobile number, and start using all services instantly.",
  },
  {
    question: "Does CellPe support all operators?",
    answer:
      "Yes, CellPe supports all major mobile networks, DTH providers, and broadband operators.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-[#F3F7FF]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#0A224A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Quick answers to help you get the most out of CellPe.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-xl text-white 
              bg-gradient-to-br from-[#0A224A] via-[#0D2D64] to-[#00C853]/20
              border border-white/10"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 
                text-left font-semibold text-white focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
