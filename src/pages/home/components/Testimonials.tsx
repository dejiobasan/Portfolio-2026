import { motion, type Variants } from "framer-motion";
import { Gospel, Kola, Cosmas, Temi, Tobi, Jide } from "@/assets";

const testimonials = [
  {
    name: "Gospel Chinyereugo",
    role: "ALAT, Senior Software Engineer and Web Community Manager",
    image: Gospel,
    testimonial:
      "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
  },
  {
    name: "Olajide Obasan",
    role: "Lead Software Engineer, VolvLabs",
    image: Jide,
    testimonial:
      "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
  },
  {
    name: "Oluwatobi Olajide",
    role: "ALAT, Software Engineer",
    image: Tobi,
    testimonial:
      "Deji is a smart engineer, Working with him is a great experience. He's incredibly sharp with building systems and still manages to make everything feel simple and easy to work with.",
  },
  {
    name: "Cosmas Ezejiofor",
    role: "ALAT, Software Engineer",
    image: Cosmas,
    testimonial:
      "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
  },
  {
    name: "Temitope Ogundipe",
    role: "ALAT, Senior UI/UX Designer",
    image: Temi,
    testimonial:
      "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
  },
  {
    name: "Kolawole Ayoola",
    role: "Software Engineer, Moniepoint Group",
    image: Kola,
    testimonial:
      "Quis neque, eu et ipsum amet, vel et. Varius integer enim pellentesque ornare pharetra faucibs arcu. Mauris blandit egestas nibh.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Testimonials = () => {
  return (
    <section className="bg-[#F9FAFB] dark:bg-background py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#111827] dark:text-gray-100">
            Testimonials
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`bg-white dark:bg-[#1E1E20] rounded-2xl w-full xl:w-[420px] p-8 border border-gray-100 dark:border-gray-800 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col gap-6 cursor-default xl:col-span-2`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center shrink-0 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="text-[#111827] dark:text-gray-300 leading-relaxed text-base">
                {item.testimonial}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
