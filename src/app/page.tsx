'use client'
import { useState, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("_");
  const [total, setTotal] = useState("_");
  const cursorVisible = useCursorBlink(600);

  function onButtonPress(value: string | number) {
    const strValue = value.toString();

    if (strValue === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
        setTotal(result.toString());
      } catch (error) {
        setInput("Error");
      }
      return
    } else if (strValue === "Clear") {
      setInput("_")
      setTotal("_")
      return
    } else if (strValue === "Del") {
      const result = input.slice(0, -1);
      setInput(result || "_");
      return;
    }


    if (input === "_") {
      setInput(strValue);
      setTotal(strValue)
    } else {
      setInput(input + strValue);
      try {
        setTotal(eval(input + strValue).toString());
      } catch (error) {
        setTotal("")
      }
    }
  }


  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <div className={`bg-[var(--maincolor)] p-4 rounded-sm`}>
        <div className="text-right rounded-sm flex flex-col mb-4 border w-full justify-end pr-2">
          <p>
            {input === "_" && cursorVisible ? "|" : input}
          </p>
          <p>{total !== "_" ? total : ""}</p>
        </div>
        <div className="grid grid-cols-4 gap-4 border p-8 rounded-sm">
          <CalculatorButtons value="Clear" onCalculatorButtonPress={onButtonPress} />
          <CalculatorButtons value="Del" onCalculatorButtonPress={onButtonPress} />
          {["(", ")",].map((number, index) =>
            <CalculatorButtons key={index} value={number} onCalculatorButtonPress={onButtonPress} />
          )}
          {["+", "-", "*", "/", 7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number, index) =>
            <CalculatorButtons key={index} value={number} onCalculatorButtonPress={onButtonPress} />
          )}

          <CalculatorButtons value="." onCalculatorButtonPress={onButtonPress} />
          <CalculatorButtons value="=" onCalculatorButtonPress={onButtonPress} />
        </div>
      </div>
    </div>
  );
}

function CalculatorButtons({ value, onCalculatorButtonPress }: { value: string | number, onCalculatorButtonPress: (value: string | number) => void }) {
  return (
    <button
      className="rounded-sm border p-2"
      onClick={() => onCalculatorButtonPress(value)}
    >{value}</button>
  );
}

function useCursorBlink(interval: number) {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCursorVisible(!cursorVisible);
    }, interval);
    return () => clearInterval(intervalId);
  }, [cursorVisible, interval]);

  return cursorVisible;
}