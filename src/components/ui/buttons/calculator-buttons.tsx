'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft  } from '@fortawesome/free-solid-svg-icons';

export default function CalculatorButtons({ value, onCalculatorButtonPress }: { value: string | number, onCalculatorButtonPress: (value: string | number) => void }) {
  if(value==='Del') return(
   
     <button
      className="flex text-center justify-center rounded-sm border p-2"
      onClick={() => onCalculatorButtonPress(value)}
    > <FontAwesomeIcon icon={faDeleteLeft} /></button>
  )
  return (
    <button
      className="flex text-center justify-center rounded-sm border p-2"
      onClick={() => onCalculatorButtonPress(value)}
    >{value}</button>
  );
}



