import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function DarkModeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeToggle;
