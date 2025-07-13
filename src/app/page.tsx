'use client'
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("0");
  const [total, setTotal] = useState("0");

  function onButtonPress(value: string | number) {
    const strValue = value.toString();
    if (total === "0") setTotal("")

    if (strValue === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
        setTotal(result.toString());
      } catch (error) {
        setInput("Error");
      }
      return
    }

    if (input === "0" ) {
      setInput(strValue);
      setTotal(strValue)
    } else {
      setInput(input + strValue);
    }

    try {
      setTotal(eval(input).toString());
    } catch (error) {
    }
  }

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <div className="text-right rounded-sm flex flex-col mb-4 border w-full justify-end pr-2">
          <p>{input}</p>
          <p>{total}</p>
        </div>
        <div className="grid grid-cols-4 gap-4 border p-8 rounded-sm">
          {["+", "-", "*", "/", 7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number, index) =>
            <CalculatorButtons key={index} value={number} onButtonPress={onButtonPress} />
          )}

          <CalculatorButtons value="." onButtonPress={onButtonPress} />
          <CalculatorButtons value="=" onButtonPress={onButtonPress} />
        </div>
      </div>
    </div>
  );
}

function CalculatorButtons({ value, onButtonPress }: { value: string | number, onButtonPress: (value: string | number) => void }) {
  return (
    <button
      className="rounded-sm border p-2"
      onClick={() => onButtonPress(value)}
    >{value}</button>
  );
}