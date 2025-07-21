import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("hs_theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("transition-colors", "duration-500", "ease-in-out");

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("hs_theme", next);
    console.log("Theme changed to:", next);
  };

  const getIcon = () => {
    return theme === "dark" ? (
      // Sun icon for light mode
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ) : (
      // Moon icon for dark mode
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    );
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="font-medium text-gray-800 dark:text-neutral-200 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 p-2 cursor-pointer"
      aria-label="Toggle Theme"
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle;
