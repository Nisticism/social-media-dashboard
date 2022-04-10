import './DarkMode.css';
import { ChangeEventHandler } from "react";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("theme", "light");
};

const storedTheme = localStorage.getItem("theme");

// Uncomment the 4 lines below and comment out the 2 lines below that in order to ask the browser to try to search for its user's 
// default color scheme.  Otherwise leave it there to retain a default dark color theme.

// const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
// const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
// const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);
// const defaultLight = storedTheme === "light" || (storedTheme === null && prefersLight);

const defaultDark = storedTheme === "dark";
const defaultLight = storedTheme === "light";

if (defaultDark) {
  setDark();
}

if (defaultLight) {
  setLight();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setLight();
  } else {
    setDark();
  }
};

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultLight}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default DarkMode;