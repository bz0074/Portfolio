import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.body.classList.toggle("dark", nextDark);
  }

  return (
    <button type="button" onClick={toggleTheme}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
