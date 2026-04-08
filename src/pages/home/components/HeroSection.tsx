import { motion } from "framer-motion";

const TypingText = ({
  text,
  className = "",
  delay = 0,
  speed = 0.08,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) => {
  const characters = Array.from(text);

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: speed,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.01 } },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-[#111113] overflow-hidden px-4 md:px-8 py-20">
      <div className="flex flex-col items-center z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-start w-fit">
          <div className="flex items-baseline gap-4 lg:gap-8">
            <TypingText
              text="I'm"
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#36363A] dark:text-gray-100"
              delay={0.2}
            />
            <TypingText
              text="AYODEJI"
              className="text-[4.5rem] sm:text-8xl md:text-9xl lg:text-[140px] leading-[0.9] font-bold tracking-tighter text-[#36363A] dark:text-gray-100"
              delay={0.6}
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <TypingText
              text="OBASAN"
              className="text-[4.5rem] sm:text-8xl md:text-9xl lg:text-[140px] leading-[0.9] font-bold tracking-tighter text-[#36363A] dark:text-gray-100"
              delay={1.4}
            />
            <motion.p
              className="max-w-[280px] sm:max-w-sm text-base md:text-lg lg:text-xl text-[#36363A] dark:text-gray-300 font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
            >
              A full-stack software engineer focused on building scalable web
              and mobile applications and modern digital platforms.
            </motion.p>
          </div>
        </div>
        <motion.div
          className="flex flex-row items-center gap-4 sm:gap-6 mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
        >
          <a 
            href="mailto:dejiobasan02@gmail.com" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-3.5 md:py-4 rounded-full bg-[#36363A] dark:bg-white text-white dark:text-[#111113] hover:text-[#36363A] dark:hover:text-white hover:bg-white dark:hover:bg-[#111113] text-sm md:text-base font-medium hover:scale-105 transition-all duration-300 hover:border hover:border-[#36363A] dark:hover:border-white"
          >
            Contact
          </a>
          <button 
            onClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 md:py-4 rounded-full border border-[#36363A] dark:border-white text-[#36363A] dark:text-white text-sm md:text-base font-medium hover:bg-[#36363A] dark:hover:bg-white hover:text-white dark:hover:text-[#111113] hover:scale-105 transition-all duration-300"
          >
            View My Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;