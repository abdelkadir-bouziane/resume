import { FaSun, FaMoon } from "react-icons/fa";

function HeaderBar({ language, setLanguage, theme, setTheme, handlePrint }) {
  return (
    <header>
      <div className="header-content">
        <div className="resume-language">
          <label>Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="english">En</option>
            <option value="french">Fr</option>
          </select>
        </div>

        <div className="print-and-lightness">
          <button onClick={handlePrint}>Print it</button>
          <div
            className="lightness-mode"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderBar;
