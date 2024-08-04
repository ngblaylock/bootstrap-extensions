(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bse = factory());
})(this, (function () { 'use strict';

  /**
   * Set the UI checkbox to a specific state
   * @param {string} theme - The selected theme to set switches to
   */
  const setSwitches = (theme) => {
    const switches = document.querySelectorAll("[data-bse-theme-switch]");
    if (theme === "dark") {
      [...switches].forEach((s) => {
        s.checked = true;
        s.indeterminate = false;
      });
    } else if (theme === "light") {
      [...switches].forEach((s) => {
        s.checked = false;
        s.indeterminate = false;
      });
    } else {
      [...switches].forEach((s) => {
        s.checked = true;
        s.indeterminate = true;
      });
    }
  };

  /**
   * Get's the current theme stored in localStorage
   * @returns {light|dark|null}
   */
  const getStoredTheme = () => {
    return localStorage.getItem("bseTheme");
  };

  /**
   * Set the page to a specific theme
   * @param {light|dark|undefined} theme The desired theme to switch to
   */
  const setTheme = (theme) => {
    if (theme) {
      localStorage.setItem("bseTheme", theme);
      document.documentElement.setAttribute("data-bs-theme", theme);
    } else {
      const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      localStorage.removeItem("bseTheme");
      document.documentElement.setAttribute("data-bs-theme", preferredTheme);
    }
    setSwitches(theme);
  };

  /**
   * Toggles a theme in order: light -> dark -> system -> light ...
   */
  const toggleTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme === "light") {
      setTheme("dark");
    } else if (storedTheme === "dark") {
      setTheme();
    } else {
      setTheme("light");
    }
  };

  // IIFE to apply the stored theme immediately
  (() => {
    const storedTheme = getStoredTheme();
    setTheme(storedTheme);
    window.onload = () => {
      setSwitches(storedTheme);
    };

    document.addEventListener("click", (e) => {
      const themeSwitch = e.target.closest("[data-bse-theme-switch]");
      if (themeSwitch) {
        toggleTheme();
      }
    });
  })();

  // Export the functions
  var themeSwitcher = { getStoredTheme, toggleTheme, setTheme };

  var bootstrapExtensions = {
    themeSwitcher
  };

  return bootstrapExtensions;

}));
