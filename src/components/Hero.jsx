export default function Hero() {
  return (
    <section className="bg-secondary min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop"
                alt="Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-light rounded-2xl -z-10 opacity-30"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-accent font-medium mb-4 uppercase text-sm tracking-wide">
              Licensed Clinical Psychologist
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-dark leading-tight mb-6">
              Anxiety, Trauma & Stress Therapy in{" "}
              <span className="text-primary">Santa Monica</span>
            </h1>

            <p className="text-light text-lg md:text-xl mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Find relief from anxiety, heal from trauma, and recover from burnout.
              I offer warm, evidence-based therapy for adults navigating overwhelming
              stress and emotional exhaustion.
            </p>

            <p className="text-light text-base mb-8 max-w-xl mx-auto lg:mx-0">
              Therapy is a space to slow down, feel supported, and begin making
              changes that feel sustainable and meaningful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn-primary px-8 py-4 rounded-full text-lg font-medium text-center shadow-lg hover:shadow-xl transition"
              >
                Schedule a Consultation
              </a>

              <a
                href="#services"
                className="px-8 py-4 rounded-full text-lg font-medium text-primary border-2 border-primary hover:bg-primary hover:text-white transition text-center"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-light">
              <span>✓ In-Person & Telehealth</span>
              <span>✓ Evidence-Based Care</span>
              <span>✓ California Licensed</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
