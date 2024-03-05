import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
