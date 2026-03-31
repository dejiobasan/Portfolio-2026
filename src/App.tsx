import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "./components/ui/spinner";
import "./App.css";

const HomePage = lazy(() =>
  import("./pages").then((m) => ({ default: m.HomePage })),
);

const suspenseFallback = (
  <div className="flex h-screen w-full items-center justify-center flex-col space-y-4">
    <Spinner className="size-28 text-[#36363A]" />
    <p className="text-sm font-medium text-[#36363A]">Loading...</p>
  </div>
);

function App() {
  return (
    <Suspense fallback={suspenseFallback}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
