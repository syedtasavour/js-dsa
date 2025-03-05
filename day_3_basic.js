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
const debouncedGreet = debounce(() => greet("name here"), 3000);

// Multiple calls within the delay window will only result in one execution
debouncedGreet(); // These three calls will only execute the function once
debouncedGreet(); //  after 3 seconds, since each call resets the timer
debouncedGreet();
 

/**
 * Creates a throttled function that only invokes the provided function
 * at most once per specified delay, no matter how many times it's called.
 *
 * @param {function} callback - The function to throttle
 * @param {number} delayMs - The delay in milliseconds
 * @returns {function} - The throttled function
 */
const throttle = (callback, delayMs) => {
  // Store the timer ID to track throttle state
  let throttleTimerId = null
  
  // Return the throttled wrapper function
  return (...args) => {
      // Only execute if we're not currently in a throttle period
      if (throttleTimerId === null) {
          // Step 1: Execute the function immediately
          callback(...args);
          
          // Step 2: Set the throttle timer
          throttleTimerId = setTimeout(() => {
              // Step 3: Reset timer ID when delay completes
              throttleTimerId = null
          }, delayMs);
      }
      // Otherwise, ignore the call during throttle period
  }
}

// Example usage (would need actual function and args):
// const throttledScroll = throttle(handleScroll, 1000);
// window.addEventListener('scroll', throttledScroll);
