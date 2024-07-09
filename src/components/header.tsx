import { useEffect, useState } from "react";
import sunIcon from "../assets/icons/icon-sun.svg";
import moonIcon from "../assets/icons/icon-moon.svg";

export function Header() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDark));

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleIsDark = () => setIsDark((prev) => !prev);

  return (
    <header className="mb-10 flex w-full items-center justify-between gap-x-1">
      <h1 className="text-2xl font-bold uppercase tracking-[.4em] text-white md:text-[2rem] lg:text-[2.5rem]">
        <a href="/" rel="noopener noreferrer">
          Todo
        </a>
      </h1>

      <button type="button" onClick={handleIsDark}>
        <img
          src={isDark ? sunIcon : moonIcon}
          alt={`${isDark ? "sun" : "moon"} icon`}
        />
      </button>
    </header>
  );
}
