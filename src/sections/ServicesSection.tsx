import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants/services";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white max-w-3xl leading-tight">
            Smart Digital Solutions For Real Businesses.
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}