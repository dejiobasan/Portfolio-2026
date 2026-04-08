const FooterSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center pt-20 lg:pt-32 bg-[#F9FAFB] dark:bg-[#111113] overflow-hidden">
      <div className="w-[90%] lg:w-full flex flex-col items-center rounded-xl justify-center border-t-4 border-r-4 border-l-4 md:border-t-8 md:border-r-8 md:border-l-8 border-[#36363A] dark:border-white max-w-[1200px] h-[400px] md:h-[720px] mx-auto bg-white dark:bg-[#1E1E20] relative z-20 mb-[-200px] md:mb-[-360px] px-4 md:px-8">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-[72px] text-center leading-tight mb-2 md:mb-0">
          Your Application Is <br className="hidden md:block" /> In Solid Hands
        </h1>
        <p className="text-center text-base md:text-[20px] mt-2 md:mt-4 text-gray-700 dark:text-gray-300 max-w-[600px] md:max-w-none">
          I'm open to collaborating with startups, engineering teams, and{" "}
          <br className="hidden lg:block" />
          organizations to build impactful digital products.
        </p>
      </div>
      <div className="w-full pt-[260px] md:pt-[460px] pb-16 flex flex-col items-center z-10 relative bg-[#36363A] dark:bg-white text-white dark:text-[#111113]">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 font-bold text-sm mb-20 md:mb-16 tracking-wide">
          <a
            href="https://github.com/dejiobasan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 dark:hover:text-gray-500 transition-colors hover:underline"
          >
            Github
          </a>
          <a
            href="https://www.instagram.com/deji_obs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 dark:hover:text-gray-500 transition-colors hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/ayodeji-obasan-gmnse-9096151b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 dark:hover:text-gray-500 transition-colors hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dejiobasan02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 dark:hover:text-gray-500 transition-colors hover:underline"
          >
            Email
          </a>
        </div>

        <div className="w-full max-w-[1400px] items-center justify-center flex flex-col font-bold uppercase overflow-hidden select-none">
          <div className="w-full flex justify-end mr-[20%]">
            <span className="text-[16vw] lg:text-[160px] leading-[0.85] tracking-tight">
              AYODEJI
            </span>
          </div>
          <div className="w-full flex justify-start ml-[35%]">
            <span className="text-[16vw] lg:text-[160px] leading-[0.85] tracking-tight">
              OBASAN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
