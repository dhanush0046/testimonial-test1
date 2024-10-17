// lib/utils.ts

/**
 * Utility function to conditionally join class names.
 * @param classes - A list of classes to conditionally include.
 * @returns A string of class names.
 */
export function cn(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * A simple debounce function to limit the rate at which a function can fire.
 * @param func - The function to debounce.
 * @param delay - The delay in milliseconds.
 * @returns A debounced function.
 */
export function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeoutId: NodeJS.Timeout;

  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Now 'this' is correctly typed
    }, delay);
  };
}

/**
 * A utility function to generate a unique ID.
 * @returns A unique string identifier.
 */
export function generateId(): string {
  return 'id-' + Math.random().toString(36).substr(2, 9);
}

/**
 * A utility function to format a date to a readable string.
 * @param date - The date to format.
 * @returns A formatted date string.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
