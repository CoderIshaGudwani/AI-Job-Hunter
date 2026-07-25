import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Icon from "./Icon";

const trendStyles = {
  up: "text-emerald-400",
  down: "text-rose-400",
  neutral: "text-zinc-500",
};

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const numericValue = parseFloat(String(value).replace(/[^0-9.]/g, "")) || 0;
  const hasPercent = String(value).includes("%");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    const duration = 1100;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(numericValue * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {isInView ? (hasPercent ? `${count}%` : String(count)) : value}
    </span>
  );
}

export default function StatCard({
  label,
  value,
  change,
  trend = "neutral",
  icon,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.45,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -2 }}
      className="glass-panel glass-panel-hover group rounded-2xl p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[13px] font-medium text-zinc-500">{label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
            <AnimatedNumber value={value} />
          </p>
          <p className={`mt-2 text-xs font-medium ${trendStyles[trend]}`}>
            {change}
          </p>
        </div>
        <motion.div
          whileHover={{ rotate: 5, scale: 1.05 }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20 transition-shadow group-hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]"
        >
          <Icon name={icon} className="h-5 w-5" />
        </motion.div>
      </div>
    </motion.div>
  );
}
