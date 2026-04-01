import { motion } from "framer-motion";
import { MyImage, Resume } from "@/assets";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About</h2>
        
        <div className="bg-[#36363A] rounded-[32px] p-4 md:p-6 text-white">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-[35%] border border-[#B7B7B7] rounded-3xl p-6 md:p-8 flex flex-col">
              <div className="w-full aspect-4/3 bg-[#E8E8E8] rounded-2xl mb-8 overflow-hidden">
                {MyImage ? (
                  <img src={MyImage} alt="Ayodeji Obasan" className="w-full h-full object-cover grayscale" />
                ) : (
                  <div className="w-full h-full bg-[#E8E8E8]" />
                )}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-white mb-1 uppercase">NAME</h3>
                  <p className="text-sm text-white/80">Ayodeji Obasan</p>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold tracking-wider text-white mb-1 uppercase">ROLE</h3>
                  <p className="text-sm text-white/80">Full Stack Engineer</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-bold tracking-wide text-white mb-3">Specialization</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "Nestjs"].map((tech) => (
                      <span 
                        key={tech} 
                        className="border border-white/40 rounded-full px-3 py-1 text-xs text-white/80 hover:bg-white/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href={Resume} 
                target="_blank" 
                rel="noreferrer" 
                className="mt-auto pt-12 inline-block text-sm underline underline-offset-4 text-white/80 hover:text-white transition-colors"
              >
                read more
              </a>
            </div>
            <div className="md:w-[65%] border border-[#B7B7B7] rounded-3xl p-6 md:p-10 lg:p-12">
              <div className="space-y-10">
                <section>
                  <h3 className="text-xl font-bold mb-3 text-white">Overview</h3>
                  <p className="text-sm text-white/80 leading-relaxed md:text-[15px]">
                    A full-stack software engineer focused on building scalable web and mobile applications and modern digital platforms. With a background in electrical and computer engineering, development is approached with a systems-thinking mindset, designing software that is not only functional but reliable, efficient, and built to scale.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-bold mb-3 text-white">Experience</h3>
                  <p className="text-sm text-white/80 leading-relaxed md:text-[15px]">
                    My experience spans fintech platforms, enterprise applications, and data-driven systems, including work on <strong className="text-white font-semibold">ALAT products</strong> and backend infrastructure projects developed during work with <strong className="text-white font-semibold">The Sahara Group.</strong>
                    <br />
                    The focus is always on creating clean architectures, efficient APIs, and user-centered experiences that allow products to grow reliably.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-bold mb-3 text-white">Backend Project</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-white/80 md:text-[15px]">
                    <li>Data Validation Api for Sahara Group (Nodejs and PostgreSQL)</li>
                    <li>Expense Split API (Nodejs and MongoDB)</li>
                    <li>Expense Tracker API (NestJS, Prisma and PostgreSQL)</li>
                    <li>FX Trading Platform API (NestJS, Type ORM and PostgreSQL)</li>
                    <li>E-commerce API (Nodejs, MongoDB, Microservices (Cloudinary, Redis))</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-xl font-bold mb-3 text-white">Outside Coding</h3>
                  <p className="text-sm text-white/80 leading-relaxed md:text-[15px]">
                    Beyond development, there is a strong interest in building technology that improves accessibility, bridges infrastructure gaps, and enables smarter digital systems in emerging markets.
                  </p>
                </section>

              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
