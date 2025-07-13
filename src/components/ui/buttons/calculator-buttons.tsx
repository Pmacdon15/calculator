'use client'
export default function CalculatorButtons({ value, onCalculatorButtonPress }: { value: string | number, onCalculatorButtonPress: (value: string | number) => void }) {
  return (
    <button
      className="flex text-center justify-center rounded-sm border p-2"
      onClick={() => onCalculatorButtonPress(value)}
    >{value}</button>
  );
}
