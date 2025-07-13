'use client'
import { useState } from "react";

export default function InterestCalculator() {
    const [principal, setPrincipal] = useState(0.00)
    const [interestRate, setInterestRate] = useState(0.00)
    const [term, setTerm] = useState(0)
    const [compoundsPerYear, setCompoundsPerYear] = useState(12)

    const calculateTotal = () => {
        if (principal > 0 && interestRate > 0 && term > 0 && compoundsPerYear > 0 && compoundsPerYear < 10000) {
            const interestRateDecimal = interestRate / 100;
            return principal * Math.pow((1 + interestRateDecimal / compoundsPerYear), compoundsPerYear * term);
        } else {
            return 0;
        }
    }

    const total = calculateTotal();

    return (
        <div className={`bg-[var(--maincolor)] p-4 rounded-sm shadow-2xl `}>
            <h1>Interest Calculator </h1>
            <div className="flex flex-col gap-2 p-2">
                <span className="flex justify-between gap-2">
                    <label>Term (years)</label>
                    <input
                        className="border rounded-sm p-1"
                        type="number"
                        value={term}
                        onChange={(e) => setTerm(Number(e.target.value))}
                    />
                </span>
                <span className="flex justify-between gap-2">
                    <label>Amount ($)</label>
                    <input
                        className="border rounded-sm p-1"
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(Number(e.target.value))}
                    />
                </span>
                <span className="flex justify-between gap-2">
                    <label>Interest Rate (%)</label>
                    <input
                        className="border rounded-sm p-1 "
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                    />
                </span>
                <span className="flex justify-between gap-2">
                    <label>Compounds per year</label>
                    <input
                        className="border rounded-sm p-1"
                        type="number"
                        value={compoundsPerYear}
                        onChange={(e) => setCompoundsPerYear(Number(e.target.value))}
                    />
                </span>
                <span className="flex justify-between gap-2">
                    <label>Total : $</label>
                    <label>{total.toLocaleString('en-US', { maximumFractionDigits: 0 })}</label>
                </span>
            </div>
        </div>
    );
}