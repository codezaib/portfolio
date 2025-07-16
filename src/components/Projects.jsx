import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
export default function Projects() {
  const projectList = [
    {
      name: "Recipe World",
      image: "/images/recipe.avif",
      liveLink: "https://recipe-finder-ashy.vercel.app/",
      github: "https://github.com/codezaib/recipe-finder",
    },
    {
      name: "Easly Rented",
      image: "/images/easly.avif",
      liveLink: "https://easly-rented.vercel.app/",
      github: "https://github.com/codezaib/easly-rented",
    },
    {
      name: "Real Estate",
      image: "/images/real-estate.avif",
      liveLink: "https://your-store.com",
      github: "https://github.com/yourusername/task-manager",
    },
    {
      name: "Automobile Showrooms",
      image: "/images/showroom.avif",
      liveLink: "https://your-store.com",
      github: "https://github.com/yourusername/task-manager",
    },
    {
      name: "expense tracker",
      image: "/images/expense.avif",
      liveLink: "https://your-store.com",
      github: "https://github.com/yourusername/task-manager",
    },
  ];

  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center relative"
    >
      <div className="w-4/5">
        <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2 text-3xl swiper-prev cursor-pointer text-white transition-opacity duration-300">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2 swiper-next cursor-pointer text-white transition-opacity duration-300 text-3xl">
          <i className="fas fa-chevron-right"></i>
        </div>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projectList.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 rounded-2xl overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 [@media(min-height:1000px)]:h-55 object-cover hover:scale-105 overflow-hidden transition-transform duration-300"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <div className="flex justify-center gap-6 text-[#f4eded] text-xs">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline hover:text-[#9333ea]"
                    >
                      <i className="fas fa-external-link-alt" />
                      Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline hover:text-[#9333ea]"
                    >
                      <i className="fab fa-github" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
