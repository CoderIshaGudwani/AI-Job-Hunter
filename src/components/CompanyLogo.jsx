import { motion } from "framer-motion";

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
  xl: "h-16 w-16 text-lg",
};

export default function CompanyLogo({
  logo,
  company,
  size = "md",
  className = "",
}) {
  const config = logo ?? {
    initials: company?.slice(0, 2).toUpperCase(),
    gradient: "from-blue-500 to-violet-600",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br font-semibold text-white shadow-lg ring-1 ring-white/10 ${sizes[size]} ${config.gradient} ${className}`}
    >
      {config.initials}
    </motion.div>
  );
}
