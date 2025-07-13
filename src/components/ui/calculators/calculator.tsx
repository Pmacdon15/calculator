'use client'
import { useCursorBlink } from "@/app/hoohks/hooks";
import { useState } from "react";
import CalculatorButtons from "../buttons/calculator-buttons";

export default function Calculator() {
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
                console.log("Error: ", error)
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
            setTotal(result || "_");
            return;
        }


        if (input === "_") {
            setInput(strValue);
            setTotal(strValue)
        } else {
            let newInput = input + strValue;
            // Insert * between numbers and parentheses
            newInput = newInput.replace(/(\d)(\()/g, '$1*$2');
            newInput = newInput.replace(/(\))(\d)/g, '$1*$2');
            setInput(newInput);
            try {
                setTotal(eval(newInput).toString());
            } catch (error) {
                console.log("Error: ", error)
                setTotal("")
            }
        }
    }
    return (
        <div className={`bg-[var(--maincolor)] p-4 rounded-sm shadow-2xl `}>
            <div className="text-right text-lg rounded-sm flex flex-col mb-4 border w-full justify-end pr-2">
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

    );
}