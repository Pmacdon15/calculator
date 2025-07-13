import Calculator from "@/components/ui/calculators/calculator";
import InterestCalculator from "@/components/ui/calculators/Interest-calculator";

export default function Home() {



  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-2 gap-2 md:p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <Calculator />
      <InterestCalculator />
    </div>
  );
}

