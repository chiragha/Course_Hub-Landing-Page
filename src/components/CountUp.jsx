import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CountUp = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endValue = parseFloat(end);
    const totalFrames = duration * 60;
    const increment = endValue / totalFrames;

    const timer = setInterval(() => {
      start += increment;

      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }

      setCount(start);
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {Math.floor(count)}
      {suffix}
    </span>
  );
};

export default CountUp;