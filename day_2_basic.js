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

// Implementation of a Promise-like class called MyPromise
class MyPromise {
  constructor(executorFn) {
    // Initialize state to 'pending'
    this._state = 'pending';
    // Arrays to store callback functions
    this._successCallbacks = [];
    this._errorCallbacks = [];
    this._finallyCallbacks = [];
    
    // Will hold the resolved value
    this.value = undefined;

    // Execute the executor function with resolver and rejector functions
    executorFn(
      this.resolverFunction.bind(this),
      this.rejectorFunction.bind(this)
    );
  }

  // Method to attach success callbacks
  then(cb) {
    if (this._state == 'fulfilled') {
      // If promise is already fulfilled, execute callback immediately
      console.log(`Apka promise toh pehle hi pura hogya, Run hi kar deta hu`);
      cb(this.value);
      return this;
    }
    // Otherwise, store callback for later execution
    this._successCallbacks.push(cb);
    return this;
  }

  // Method to attach error callbacks
  catch(cb) {
    if (this._state == 'rejected') {
      // If promise is already rejected, execute callback immediately
      console.log(`Apka promise toh pehle hi reject hogya, Run hi kar deta hu`);
      cb();
      return this;
    }
    // Otherwise, store callback for later execution
    this._errorCallbacks.push(cb);
    return this;
  }

  // Method to attach finally callbacks (runs after promise settles)
  finally(cb) {
    if (this._state !== 'pending') {
      // If promise is already settled, execute callback immediately
      cb();
      return this;
    }
    // Otherwise, store callback for later execution
    this._finallyCallbacks.push(cb);
    return this;
  }

  // Function to resolve the promise
  resolverFunction(value) {
    console.log(
      `Fullfilling Promise, Running ${this._successCallbacks.length} callbacks`
    );
    // Store resolved value
    this.value = value;
    // Change state to fulfilled
    this._state = 'fulfilled';
    // Execute all success callbacks
    this._successCallbacks.forEach((cb) => cb(value));
    // Execute all finally callbacks
    this._finallyCallbacks.forEach((cb) => cb());
  }

  // Function to reject the promise
  rejectorFunction(err) {
    // Change state to rejected
    this._state = 'rejected';
    // Execute all error callbacks
    this._errorCallbacks.forEach((cb) => cb(err));
    // Execute all finally callbacks
    this._finallyCallbacks.forEach((cb) => cb());
  }
}

// Helper function that creates and immediately resolves a MyPromise
function wait(seconds) {
  const p = new MyPromise((resolve, reject) => {
    resolve('Hahaha');
  });
  return p;
}

// Create a promise that resolves immediately
const p = wait(5);

console.log('Registering Callbacks');

// Chain methods on the promise with different callbacks
p.then((e) => console.log(`V1 Promise Resolved After 5 sec`, e))
  .catch(() => console.log(` V1Rejected after 5 sec`))
  .finally(() => console.log(` V1 Mei toh harr baar chalunga`));

// Add another set of callbacks to the same promise
p.then((e) => console.log(`V2 Promise Resolved After 5 sec`, e))
  .catch(() => console.log(`V2 Rejected after 5 sec`))
  .finally(() => console.log(`V2 Mei toh harr baar chalunga`));
