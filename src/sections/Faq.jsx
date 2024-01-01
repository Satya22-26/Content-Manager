import React from "react";
import Accordion from "../components/Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-900 text-white text-center">
      <p className="text-3xl font-bold mb-4">Frequently Asked Questions!</p>
      <div className="flex flex-col">
        <Accordion
          title="Can I create images from text?"
          answer="Yes! Input text prompts, and our platform generates images based on your descriptions."
          className="mb-2 h-full"
        />
        <Accordion
          title="Does the language translator support multiple languages?"
          answer="Absolutely! Translate content seamlessly across a wide range of languages."
          className="mb-2 h-full"
        />
        <Accordion
          title="How does text summarization work?"
          answer="Our platform condenses long texts to highlight key points, making it easier to understand."
          className="mb-2 h-full"
        />
        <Accordion
          title="Is my data secure on your platform?"
          answer="Yes, we prioritize your data security. All interactions are encrypted, and we don't store your input data."
          className="h-full"
        />
      </div>
    </div>
  );
};

export default FAQ;
