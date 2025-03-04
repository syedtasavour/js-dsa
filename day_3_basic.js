/**
 * Creates a debounced function that delays invoking the provided function
 * until after a specified delay from the last time it was called.
 *
 * @param {function} func - The function to debounce
 * @param {number} waitTime - The delay in milliseconds
 * @returns {function} - The debounced function
 */
function debounce(func, waitTime) {
  let timeoutId;

  return function (...args) {
    // Clear any existing timeout to prevent previous calls
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      // Use apply to maintain the correct context (this) when calling the function
      func.apply(this, args);
    }, waitTime);
  };
}

/**
 * Simple greeting function
 * @param {string} name - Name of the person to greet
 */
function greet(name) {
  console.log(`Hi ${name}`);
}

// Create a debounced version of the greet function with a 3 second delay
const debouncedGreet = debounce(() => greet("hitesh"), 3000);

// Multiple calls within the delay window will only result in one execution
debouncedGreet(); // These three calls will only execute the function once
debouncedGreet(); //  after 3 seconds, since each call resets the timer
debouncedGreet();
 