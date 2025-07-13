'use client'
export default function CalculatorButtons({ value, onCalculatorButtonPress }: { value: string | number, onCalculatorButtonPress: (value: string | number) => void }) {
  return (
    <button
      className="rounded-sm border p-2"
      onClick={() => onCalculatorButtonPress(value)}
    >{value}</button>
  );
}
