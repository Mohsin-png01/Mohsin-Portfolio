import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return null; // No UI needed since there's no toggle button
};
