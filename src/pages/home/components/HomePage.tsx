import { Spinner } from "@/components/ui/spinner";
import { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("./HeroSection"));
const FeaturedWorks = lazy(() => import("./FeaturedWorks"));
const AboutSection = lazy(() => import("./AboutSection"));
const Testimonials = lazy(() => import("./Testimonials"));
const FooterSection = lazy(() => import("./FooterSection"));

const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Suspense
        fallback={
          <div className="flex h-screen w-full items-center justify-center flex-col space-y-4">
            <Spinner className="size-28 text-[#36363A]" />
            <p className="text-sm font-medium text-[#36363A]">Loading...</p>
          </div>
        }
      >
        <HeroSection />
        <FeaturedWorks />
        <AboutSection />
        <Testimonials />
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
