export default function Services() {
  const services = [
    {
      id: 1,
      title: "Anxiety & Panic",
      description:
        "Support for ongoing worry, panic attacks, and anxiety. Together, we’ll use practical, evidence-based tools to help you feel calmer and more grounded in daily life.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Trauma & EMDR",
      description:
        "Work through past experiences that still impact your present. EMDR and trauma-focused therapy can help reduce distress and rebuild a sense of safety.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Burnout & Chronic Stress",
      description:
        "Help for exhaustion, overwhelm, and feeling constantly “on.” Therapy focuses on sustainable changes that support balance, energy, and long-term well-being.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3 uppercase text-sm tracking-wide">
            How I Can Support You
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark mb-4">
            Areas of Focus
          </h2>
          <p className="text-light text-lg max-w-2xl mx-auto">
            I work with adults navigating anxiety, trauma, and burnout, using
            evidence-based approaches tailored to your individual needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-secondary rounded-2xl p-8 text-center hover:shadow-lg transition duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-primary mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-dark mb-4">
                {service.title}
              </h3>

              <p className="text-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-light mb-4">
            Unsure which type of support feels right for you?
          </p>
          <a
            href="#contact"
            className="inline-block btn-primary px-8 py-3 rounded-full font-medium"
          >
            Book a Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
