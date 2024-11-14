(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.themeSwitcher = {}));
})(this, (function (exports) { 'use strict';

  /**
   * Set the UI checkbox to a specific state
   * @param {string} theme - The selected theme to set switches to
   */
  const setSwitches = (theme) => {
    theme = !theme ? theme : theme.trim();
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
   * @returns {'light'|'dark'|null}
   */
  const getStoredTheme = () => {
    return localStorage.getItem("bseTheme");
  };

  /**
   * Set the page to a specific theme
   * @param {'light'|'dark'} [theme] The desired theme to switch to
   */
  const setTheme = (theme) => {
    theme = !theme ? theme : theme.trim();
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
   * Toggles a theme to the next one
   * @param {string[]} [order] - The order of the themes to toggle through. If none is provided it will go through light -> dark -> system -> (repeat)
   * @example 
   * toggleTheme(['light', 'dark', 'system']); // Default behavior
   * toggleTheme(['light', 'dark']); // Doesn't include 'system'
   */
  const toggleTheme = (order = ["light", "dark", null]) => {
    const storedTheme = getStoredTheme();
    const storedThemeIndex = order.findIndex((o) => {
      o = !o ? o : o.trim();
      return o === storedTheme;
    });
    if (storedThemeIndex < 0 || storedThemeIndex === order.length - 1) {
      setTheme(order[0]);
    } else {
      setTheme(order[storedThemeIndex + 1]);
    }
  };

  /**
   * Initializes the theme Switcher at the time it is called.
   */
  const initTheme = () => {
    const storedTheme = getStoredTheme();
    setTheme(storedTheme);
    window.onload = () => {
      setSwitches(storedTheme);
    };

    document.addEventListener("click", (e) => {
      const themeSwitch = e.target.closest("[data-bse-theme-switch]");
      if (themeSwitch) {
        const themeSwitchValue = themeSwitch.getAttribute(
          "data-bse-theme-switch"
        );
        let order;
        if (themeSwitchValue) {
          order = themeSwitchValue
            .toLowerCase()
            .split(",")
            .map((i) => (!i ? i : i.trim()));
        }
        toggleTheme(order);
      }
    });
  };

  // IIFE to apply the stored theme immediately
  if (typeof window !== "undefined" && typeof module === "undefined") {
    (() => {
      initTheme();
    })();
  }

  exports.getStoredTheme = getStoredTheme;
  exports.initTheme = initTheme;
  exports.setTheme = setTheme;
  exports.toggleTheme = toggleTheme;

}));
