// Checks if the 'myForEach' method already exists in the Array prototype
// If it doesn't exist, we add it to avoid overriding any existing implementation
if (!Array.prototype.myForEach) {
    // Adds a custom implementation of 'forEach' to the Array prototype
    Array.prototype.myForEach = function (cb) {
        // Loops through each element in the array
        for (let i = 0; i < this.length; i++) {
            // Calls the callback function with current value and index as arguments
            cb(this[i], i);
        }
    };
}

// Sample array to test our implementation
const arr = [1, 2, 3, 4, 5];

// Using our custom 'myForEach' method to log each value and its index
arr.myForEach((value, index) => console.log(value + " " + index));


// Checks if the 'myMap' method already exists in the Array prototype
// If it doesn't exist, we add it to avoid overriding any existing implementation
if (!Array.prototype.myMap) {
    // Adds a custom implementation of 'map' to the Array prototype
    Array.prototype.myMap = function (cb) {
      // Initialize an empty array to store the mapped values
      const result = [];
  
      // Loop through each element in the array
      for (let i = 0; i < this.length; i++) {
        // Call the callback function with current value and index as arguments
        // Store the returned value
        const value = cb(this[i], i);
        // Add the transformed value to our result array
        result.push(value);
      }
  
      // Return the new array with transformed values
      return result;
    };
  }

  // Test our custom 'myMap' implementation by tripling each value in the array
  const trippedArray = arr.myMap((e) => e * 3);
  console.log(trippedArray);
  
  
  // Checks if the 'myReduce' method already exists in the Array prototype
  // If it doesn't exist, we add it to avoid overriding any existing implementation
  if (!Array.prototype.myReduce) {
    // Adds a custom implementation of 'reduce' to the Array prototype
    Array.prototype.myReduce = function (cb, initalValue = undefined) {
      // Set the initial accumulator value either from initialValue or the first element
      let acc = initalValue || this[0];
      // If initialValue is provided, start from index 0, otherwise start from index 1
      const startIndex = initalValue ? 0 : 1;
  
      // Loop through the array, starting from the appropriate index
      for (let i = startIndex; i < this.length; i++) {
        // Update the accumulator by calling the callback with the current accumulator and element
        acc = cb(acc, this[i]);
      }
  
      // Return the final accumulated value
      return acc;
    };
  }

// Test our custom 'myReduce' implementation by summing all values in the array
const myRes = arr.myReduce(
  (abTakKiValue, currentValue) => abTakKiValue + currentValue
);