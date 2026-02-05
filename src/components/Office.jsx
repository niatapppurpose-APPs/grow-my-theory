export default function Office() {
  const officeImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      alt: "Comfortable therapy seating area with natural light",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
      alt: "Calm and peaceful therapy office interior",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?w=600&h=400&fit=crop",
      alt: "Welcoming therapy office space with plants",
    },
  ];

  return (
    <section id="office" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-3 uppercase text-sm tracking-wide">
            Our Office
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark mb-4">
            My Santa Monica Office
          </h2>
          <p className="text-light text-lg max-w-3xl mx-auto leading-relaxed">
            My office in Santa Monica is designed to feel calm, private, and
            welcoming. It’s a space created to help you feel at ease, supported,
            and focused on your healing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div>
            <div className="bg-secondary rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-dark mb-4">
                A Space Designed for Comfort
              </h3>
              <p className="text-light leading-relaxed mb-4">
                The office offers comfortable seating, natural light, and a quiet
                atmosphere that feels more personal than clinical. My goal is to
                create a setting where you can slow down, reflect, and speak
                openly.
              </p>
              <p className="text-light leading-relaxed">
                Sessions are available both in person at my Santa Monica location
                and through secure telehealth for clients across California.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-primary bg-opacity-10 rounded-xl p-6">
                <h4 className="font-semibold text-dark mb-2">In-Person Sessions</h4>
                <p className="text-light text-sm">
                  Appointments available at my Santa Monica, California office.
                </p>
              </div>

              <div className="bg-accent bg-opacity-10 rounded-xl p-6">
                <h4 className="font-semibold text-dark mb-2">Telehealth Sessions</h4>
                <p className="text-light text-sm">
                  Secure online sessions available throughout California.
                </p>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl">
              <h4 className="font-semibold text-dark mb-3">Office Location</h4>
              <p className="text-light mb-2">
                Santa Monica, California
              </p>
              <p className="text-light text-sm">
                Weekday appointments available<br />
                Evening availability by request
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {officeImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
