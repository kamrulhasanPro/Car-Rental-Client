import React from "react";
import MyContainer from "../../../Components/MyContainer/MyContainer";
import MyTitle from "../../../Components/Title/MyTitle";

const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: "What do I need to rent a car?",
      answer:
        "You need a valid driving license, a government-issued ID or passport, and a valid payment method. Additional documents may be required for certain vehicles.",
    },
    {
      id: 2,
      question: "What is the minimum age to rent a car?",
      answer:
        "The minimum age to rent a car is usually 21 years. Some premium or luxury vehicles may require the driver to be at least 25 years old.",
    },
    {
      id: 3,
      question: "Is there a security deposit?",
      answer:
        "Yes, a refundable security deposit may be required depending on the vehicle type. The deposit is returned after the car is inspected.",
    },
    {
      id: 4,
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking from your account dashboard within the allowed cancellation period.",
    },
    {
      id: 5,
      question: "Is insurance included in the rental price?",
      answer:
        "Basic insurance coverage is included with every rental. Additional coverage options may be available during checkout.",
    },
  ];

  return (
    <MyContainer>
      <MyTitle>Frequently <span className="text-primary border-b-2">Asked</span> Questions</MyTitle>

      {/* FAQ */}
      <div className="space-y-3">
        {questions.map((question) => (
          <div
            key={question.id}
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border"
          >
            <div className="collapse-title font-semibold">
              {question.question}
            </div>
            <div className="collapse-content text-sm text-neutral/50">{question.answer}</div>
          </div>
        ))}
      </div>
    </MyContainer>
  );
};

export default FAQ;
