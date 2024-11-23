setTimeout(callback, 2000); //callback version

//promisified version
/**
 * This function creates a new Promise that resolves after a specified number of milliseconds.
 * It uses the setTimeout function to delay the resolution of the Promise.
 *
 * @param {number} ms - The number of milliseconds to delay the resolution of the Promise.
 * @return {Promise} A new Promise that resolves after the specified number of milliseconds.
 */
function setTimeoutPromisified(ms) {
  // Create a new Promise that takes a callback function as an argument.
  return new Promise((resolve) => {
    // Use the setTimeout function to delay the execution of the callback function.
    // The callback function is passed as an argument to the setTimeout function.
    setTimeout(resolve, ms);
  });
}

/**
 * This function is a callback function that logs a message to the console after 3 seconds.
 */
function callback() {
  // Log a message to the console indicating that 3 seconds have passed.
  console.log("3 seconds have passed");
}

// Call the setTimeoutPromisified function with an argument of 3000 (3 seconds).
// The function returns a Promise that resolves after 3 seconds.
// The Promise is then chained with the .then() method, which calls the callback function when the Promise is resolved.
setTimeoutPromisified(3000).then(callback);

// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file

/**
 * @param {string} file - The path to the file to be cleaned.
 * @param {function} callback - A callback function to be called when the file has been cleaned.
 */
function cleanFile(file, callback) {
  // Read the contents of the file using the fs.readFile function.
  fs.readFile(file, "utf8", (data) => {
    // Trim the extra space from the left and right of the data.
    data = data.trim();
    // Write the trimmed data back to the file using the fs.writeFile function.
    fs.writeFile(file, data, "utf8", callback);
  });
}

// Example usage of the cleanFile function.
function onDone() {
  console.log("file has been cleaned");
}
cleanFile("a.txt", onDone);

/**
 * The same functionality as the cleanFile function, but returns a promise instead of taking a callback.
 * @param {string} filePath - The path to the file to be cleaned.
 * @return {Promise} A promise that resolves when the file has been cleaned.
 */
function cleanFiles(filePath) {
  return new Promise(function (resolve) {
    // Read the contents of the file using the fs.readFile function.
    fs.readFile(filePath, "utf-8", function (data) {
      // Trim the extra space from the left and right of the data.
      data = data.trim();
      // Write the trimmed data back to the file using the fs.writeFile function.
      fs.writeFile(filePath, data, function () {
        // Resolve the promise when the file has been cleaned.
        resolve();
      });
    });
  });
}

// Example usage of the cleanFiles function.
async function main() {
  // Call the cleanFiles function and wait for the promise to resolve using the await keyword.
  await cleanFiles("a.txt");
  console.log("Done cleaning file");
}

// Call the main function to start the program.
main();

/**
 * Reads the contents of a file
 * @param {string} filePath - The path to the file to be read.
 * @param {function} afterDone - A callback function to be called when the file has been read.
 */
const fs = require("fs");

function afterDone(err, data) {
  if (err) {
    console.log("Error while reading file");
  } else {
    console.log(data);
  }
}

// Example usage of the afterDone function.
fs.readFile("a.txt", "utf-8", afterDone);

/**
 * The same functionality as the afterDone function, but returns a promise instead of taking a callback.
 * @param {string} filePath - The path to the file to be read.
 * @return {Promise} A promise that resolves with the contents of the file.
 */
const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    // Read the contents of the file using the fs.readFile function.
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        // Reject the promise if there is an error when reading the file.
        reject("Error while reading file");
      } else {
        // Resolve the promise with the contents of the file.
        resolve(data);
      }
    });
  });
}

// Example usage of the readFilePromisified function.
function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

// Call the readFilePromisified function and use the .then() method to handle the promise.
readFilePromisified("a.txt").then(onDone).catch(onError);
