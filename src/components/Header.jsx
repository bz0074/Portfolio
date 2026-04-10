import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>

      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <ThemeToggle />
    </header>
  );
}

export default Header;
