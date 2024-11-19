/**
 * Initializes the theme Switcher at the time it is called.
 */
export function initTheme(): void;
/**
 * Get's the current theme stored in localStorage
 * @returns {'light'|'dark'|null}
 */
export function getStoredTheme(): "light" | "dark" | null;
/**
 * Toggles a theme to the next one
 * @param {string[]} [order] - The order of the themes to toggle through. If none is provided it will go through light -> dark -> system -> (repeat)
 * @example
 * toggleTheme(['light', 'dark', 'system']); // Default behavior
 * toggleTheme(['light', 'dark']); // Doesn't include 'system'
 */
export function toggleTheme(order?: string[] | undefined): void;
/**
 * Set the page to a specific theme
 * @param {'light'|'dark'} [theme] The desired theme to switch to
 */
export function setTheme(theme?: "light" | "dark" | undefined): void;
