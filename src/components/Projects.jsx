import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
export default function Projects() {
  const projectList = [
    {
      name: "Recipe World",
      image:
        "https://img.freepik.com/free-photo/top-view-food-ingredients-with-vegetable-soup-bowl-notebook_23-2148834720.jpg?uid=R116487181&ga=GA1.1.1082256009.1749718934&semt=ais_hybrid&w=740",
      liveLink: "https://recipe-finder-ashy.vercel.app/",
      github: "https://github.com/codezaib/recipe-finder",
    },
    {
      name: "Easly Rented",
      image:
        "https://img.freepik.com/free-photo/still-life-teenager-s-desk_23-2149371274.jpg?uid=R116487181&ga=GA1.1.1082256009.1749718934&semt=ais_hybrid&w=740",
      liveLink: "https://your-task-app.com",
      github: "https://github.com/yourusername/task-manager",
    },
    {
      name: "Real Estate",
      image:
        "https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?uid=R116487181&ga=GA1.1.1082256009.1749718934&semt=ais_hybrid&w=740",
      liveLink: "https://your-store.com",
      github: "https://github.com/yourusername/task-manager",
    },
    {
      name: "Automobile Showrooms",
      image:
        "https://img.freepik.com/free-photo/young-couple-talking-sales-person-car-showroom_1303-15135.jpg?uid=R116487181&ga=GA1.1.1082256009.1749718934&semt=ais_hybrid&w=740",
      liveLink: "https://your-store.com",
      github: "https://github.com/yourusername/task-manager",
    },
    {
      name: "Fashion and Footwear",
      image:
        "https://img.freepik.com/free-photo/happy-lady-stylish-skirt-boater-posing-pink-wall_197531-23653.jpg?uid=R116487181&ga=GA1.1.1082256009.1749718934&semt=ais_hybrid&w=740",
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
