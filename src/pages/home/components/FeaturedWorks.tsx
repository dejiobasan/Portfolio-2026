import { useState } from "react";
import {
  HeZa,
  FraudShield,
  CoopHub,
  MRTB,
  PFT,
  SARA,
  SheCan,
  Afb,
  Vector,
} from "@/assets";
import { LayoutGrid, List, MoveUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FeaturedData = [
  {
    title: "HeZa - Health Zone Africa",
    image: HeZa,
    link: "https://healthzoneafrica.com/",
  },
  {
    title: "AFB - Alat for Business",
    image: Afb,
    link: "https://business.alat.ng/",
  },
  {
    title: "CoopHub - Cooperative Hub",
    image: CoopHub,
    link: "https://coophub.alat.ng/",
  },
  {
    title: "MRTB Licensing Renewal Portal",
    image: MRTB,
    link: "https://mrtb-license-renewal-prod.azurewebsites.net/",
  },
  {
    title: "PFT - Personal Finance Tracker",
    image: PFT,
    link: "https://personal-finance-tracker-gules-pi.vercel.app/",
  },
  {
    title: "Fraud Shield",
    image: FraudShield,
    link: "https://sentinel-web-dev.azurewebsites.net/",
  },
  {
    title: "SheCan Conference",
    image: SheCan,
    link: "https://wema-shecan.alat.ng/",
  },
  {
    title: "SaraByWema",
    image: SARA,
    link: "https://sara.wemabank.com/",
  },
];

const FeaturedWorks = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section
      id="featured"
      className="py-20 px-4 md:px-8 max-w-[1280px] mx-auto w-full font-sans"
    >
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative w-full">
        <div className="flex items-center gap-1 border border-gray-200 rounded-full p-1 bg-white order-2 md:order-1 mt-8 md:mt-0 shadow-sm z-10 w-fit">
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300 ${
              viewMode === "grid"
                ? "bg-[#36363A] text-white shadow-md"
                : "bg-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <LayoutGrid size={18} /> Grid
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300 ${
              viewMode === "list"
                ? "bg-[#36363A] text-white shadow-md"
                : "bg-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <List size={18} /> List
          </button>
        </div>

        <h2 className="text-4xl md:text-[44px] font-bold text-[#36363A] order-1 md:order-2 md:absolute left-1/2 md:-translate-x-1/2 tracking-tight">
          Featured Works
        </h2>
      </div>

      <motion.div
        layout
        className={`grid ${
          viewMode === "grid"
            ? "grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 justify-items-center"
            : "grid-cols-1 max-w-4xl mx-auto gap-6"
        }`}
      >
        <AnimatePresence mode="popLayout">
          {FeaturedData.map((project, idx) => (
            <motion.a
              layout
              initial={
                viewMode === "grid"
                  ? { opacity: 0, x: idx % 2 === 0 ? -100 : 100, y: 0 }
                  : { opacity: 0, x: 0, y: -50 }
              }
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              key={project.title}
              className={`group flex ${
                viewMode === "grid"
                  ? "flex-col w-full max-w-[620px] aspect-square"
                  : "flex-row items-center p-4 bg-white w-full"
              } ${
                viewMode === "grid" ? "rounded-[40px]" : "rounded-[24px]"
              } overflow-hidden bg-[#f3f4f6] relative cursor-pointer border border-gray-200/60 hover:shadow-2xl hover:shadow-gray-200/50 transition-shadow duration-500`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {viewMode === "grid" && (
                <div className="relative w-full h-[400px] overflow-hidden bg-[#e5e7eb]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top origin-top"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </div>
              )}
              <div
                className={`${
                  viewMode === "grid"
                    ? "absolute bottom-0 w-full"
                    : "flex-1 w-full px-4 sm:px-6 py-2 bg-white flex items-center justify-between"
                }`}
              >
                {viewMode === "grid" && (
                  <img
                    src={Vector}
                    alt=""
                    draggable={false}
                    className="w-full h-auto block pointer-events-none select-none z-0"
                  />
                )}

                <div
                  className={`flex ${
                    viewMode === "grid"
                      ? "absolute inset-0 items-center pt-[15%] md:pt-[12%] pb-[4%] px-6 md:px-10"
                      : "relative h-full items-center"
                  } justify-between w-full z-10 gap-4`}
                >
                  <h3
                    className={`${
                      viewMode === "grid"
                        ? "text-2xl md:text-[28px] font-bold text-[#36363A] max-w-[70%] leading-tight"
                        : "text-2xl md:text-3xl font-bold text-[#36363A] max-w-[75%] leading-tight"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <motion.div
                    className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-[#36363A] text-white flex items-center justify-center shrink-0 shadow-[0_8px_16px_rgba(0,0,0,0.1)] relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <MoveUpRight size={28} strokeWidth={2.2} />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default FeaturedWorks;
