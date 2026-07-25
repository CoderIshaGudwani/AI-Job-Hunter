export default function GlassCard({
  children,
  className = "",
  hover = true,
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={`glass rounded-2xl ${hover ? "glass-hover" : ""} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
