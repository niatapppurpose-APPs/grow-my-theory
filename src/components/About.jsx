export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=900&fit=crop"
              alt="Dr. Maya Reynolds, psychologist in Santa Monica"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20 -z-10"></div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-accent font-medium mb-3 uppercase text-sm tracking-wide">
              About Dr. Reynolds
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-dark mb-6">
              Warm, Collaborative & Evidence-Based Care
            </h2>

            <p className="text-light text-lg mb-6 leading-relaxed">
              I’m Dr. Maya Reynolds, a licensed clinical psychologist based in
              Santa Monica, California. I work with adults who feel overwhelmed
              by anxiety, affected by past experiences, or burned out from the
              demands of work and life.
            </p>

            <p className="text-light text-lg mb-6 leading-relaxed">
              My approach is grounded, collaborative, and guided by what is
              most helpful for each individual. I integrate evidence-based
              methods such as Cognitive Behavioral Therapy (CBT), EMDR for
              trauma, mindfulness practices, and body-based techniques.
            </p>

            <p className="text-light text-lg mb-8 leading-relaxed">
              Therapy works best when it feels safe and respectful. My goal is
              not only symptom relief, but helping you feel more regulated,
              confident, and connected over time.
            </p>

            <div className="bg-white rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-dark mb-4">
                Credentials & Training
              </h3>
              <ul className="space-y-3 text-light">
                <li>✓ Doctor of Psychology (PsyD)</li>
                <li>✓ Licensed Clinical Psychologist, California</li>
                <li>✓ EMDR Certified Therapist</li>
                <li>✓ Trained in CBT & Mindfulness-Based Therapies</li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-block btn-accent px-8 py-4 rounded-full font-medium text-lg"
            >
              Get to Know Me Better
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
