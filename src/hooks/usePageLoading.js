import { useEffect, useState } from "react";

export function usePageLoading(delay = 650) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return loading;
}
