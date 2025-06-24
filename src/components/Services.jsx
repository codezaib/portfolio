import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
const services = [
  {
    name: "Front End Development",
    description: "Crafting responsive and dynamic user interfaces.",
    icon: "fa-solid fa-code",
  },
  {
    name: "Back End Development",
    description: "Building robust server-side logic and scalable APIs.",
    icon: "fa-solid fa-server",
  },
  {
    name: "UI/UX",
    description:
      "Designing intuitive, user-friendly, and accessible digital experiences.",
    icon: "fa-solid fa-pen-nib",
  },
  {
    name: "Code Quality Assurance",
    description:
      "Ensuring clean, maintainable code through testing and best practices.",
    icon: "fa-solid fa-bug",
  },
  {
    name: "Database Management",
    description:
      "Managing structured and unstructured data with efficient queries and security.",
    icon: "fa-solid fa-database",
  },
  {
    name: "DevOps",
    description:
      "Streamlining deployment and operations through automation and CI/CD pipelines.",
    icon: "fa-brands fa-ubuntu",
  },
  {
    name: "API Integration",
    description:
      "Connecting applications with third-party services and internal systems.",
    icon: "fa-solid fa-network-wired",
  },
];

const Services = () => {
  return (
    <motion.section
      key="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="w-4/5 mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{ el: ".custom-swiper-pagination", clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service) => {
            return (
              <SwiperSlide key={service.name}>
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <div className="glassdoor-effect p-6 flex flex-col justify-center text-center h-60 [@media(min-height:1100px)]:h-80 gap-y-2">
                    <i className={`${service.icon} text-3xl`}></i>
                    <h3 className="text-2xl font-semibold">{service.name}</h3>
                    <p className="text-sm">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-swiper-pagination mt-6 flex justify-center" />
      </div>
    </motion.section>
  );
};

export default Services;
