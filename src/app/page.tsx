'use client'
import Calculator from "@/components/ui/calculators/calculator";
import InterestCalculator from "@/components/ui/calculators/Interest-calculator";
import { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const calculators = [
    <Calculator key="calculator" />,
    <InterestCalculator key="interest-calculator" />,
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + calculators.length) % calculators.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % calculators.length);
  };

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-2 gap-2 md:p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-between w-full mb-4">
        <button onClick={handlePrev} className="px-4 py-2 bg-[var(--maincolor)] rounded">
          Prev
        </button>
        <div className="flex gap-2">
          {calculators.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full bg-blue-200`}
            />
          ))}
        </div>
        <button onClick={handleNext} className="px-4 py-2 bg-[var(--maincolor)] rounded">
          Next
        </button>
      </div>
      <div className="">{calculators[activeIndex]}</div>
    </div>
  );
}