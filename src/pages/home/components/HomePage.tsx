import { Spinner } from "@/components/ui/spinner";
import { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("./HeroSection"));
const FeaturedWorks = lazy(() => import("./FeaturedWorks"));
const AboutSection = lazy(() => import("./AboutSection"));
const Testimonials = lazy(() => import("./Testimonials"));
const FooterSection = lazy(() => import("./FooterSection"));

const SuspenseFallback = () => (
  <div className="flex h-screen w-full items-center justify-center flex-col space-y-4">
    <Spinner className="size-28 text-[#36363A] dark:text-gray-200" />
    <p className="text-sm font-medium text-[#36363A] dark:text-gray-200">
      Loading...
    </p>
  </div>
);

const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Suspense fallback={<SuspenseFallback />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<SuspenseFallback />}>
        <FeaturedWorks />
      </Suspense>

      <Suspense fallback={<SuspenseFallback />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SuspenseFallback />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SuspenseFallback />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
