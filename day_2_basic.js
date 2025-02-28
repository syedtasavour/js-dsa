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

