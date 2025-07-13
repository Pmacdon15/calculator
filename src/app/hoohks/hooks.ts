import { useEffect, useState } from "react";

export function useCursorBlink(interval: number) {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCursorVisible(!cursorVisible);
    }, interval);
    return () => clearInterval(intervalId);
  }, [cursorVisible, interval]);

  return cursorVisible;
}