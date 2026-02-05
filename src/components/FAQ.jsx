"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer in-person therapy sessions?",
      answer:
        "Yes. I offer in-person therapy sessions at my Santa Monica office. The space is designed to feel calm, private, and comfortable, helping clients feel at ease during sessions.",
    },
    {
      question: "Do you offer telehealth sessions?",
      answer:
        "I also provide secure telehealth sessions for clients located throughout California. Online sessions offer flexibility while maintaining the same level of care and attention.",
    },
    {
      question: "Who do you typically work with?",
      answer:
        "I primarily work with adults and professionals who are experiencing anxiety, burnout, or the effects of past experiences. Many of my clients are high-achieving individuals who feel overwhelmed or emotionally exhausted.",
    },
    {
      question: "What concerns do you specialize in?",
      answer:
        "My areas of focus include anxiety and panic, trauma (including EMDR), and chronic stress or burnout. I use evidence-based approaches such as CBT, EMDR, mindfulness, and body-based techniques.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-3 uppercase text-sm tracking-wide">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark mb-4">
            Common Questions
          </h2>
          <p className="text-light text-lg max-w-2xl mx-auto">
            Here are a few questions clients often ask when considering therapy.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-dark pr-4">
                  {faq.question}
                </span>
                <span className="text-primary text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-white rounded-2xl">
          <h3 className="text-xl font-semibold text-dark mb-3">
            Still Have Questions?
          </h3>
          <p className="text-light mb-6">
            If you’re unsure whether therapy is right for you, I’m happy to help.
          </p>
          <a
            href="#contact"
            className="inline-block btn-primary px-8 py-3 rounded-full font-medium"
          >
            Reach Out
          </a>
        </div>

      </div>
    </section>
  );
}
