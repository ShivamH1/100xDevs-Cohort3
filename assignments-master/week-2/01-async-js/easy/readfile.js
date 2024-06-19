const fs = require('fs');

function readFileAsync(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

async function doStuff() {
    try {
      const fileContents = await readFileAsync('my-file.txt');
      console.log('File contents:', fileContents);
  
      // Simulate expensive operation (adjust loop iterations for effect)
      for (let i = 0; i < 1000000; i++) { // Increase iterations for more expensive operation
        // Do some CPU-intensive task (replace with actual work if needed)
      }
  
      console.log('Done with expensive operation!');
    } catch (error) {
      console.error('Error reading file:', error);
    }
  }
  
  doStuff();

  //without await and async
  const fs = require('fs'); // Assuming 'fs' is a black box representing the file system library

  function readFileAsync(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  
  function doStuff() {
    readFileAsync('my-file.txt')
      .then((fileContents) => {
        console.log('File contents:', fileContents);
  
        // Simulate expensive operation (adjust loop iterations for effect)
        for (let i = 0; i < 1000000; i++) {
          // Do some CPU-intensive task (replace with actual work if needed)
        }
  
        console.log('Done with expensive operation!');
      })
      .catch((error) => {
        console.error('Error reading file:', error);
      });
  }
  
  doStuff();
  
  //without promise using callback
  const fs = require('fs'); // Assuming 'fs' is a black box representing the file system library

function readFileAsync(path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      callback(err);  // Pass error to callback
    } else {
      callback(null, data); // Pass null for error, data for success
    }
  });
}

function doStuff(callback) {
  readFileAsync('my-file.txt', (err, data) => {
    if (err) {
      return callback(err); // Propagate error through callback
    }
    console.log('File contents:', data);

    // Simulate expensive operation (adjust loop iterations for effect)
    for (let i = 0; i < 1000000; i++) {
      // Do some CPU-intensive task (replace with actual work if needed)
    }

    console.log('Done with expensive operation!');
    callback(null); // Call callback with no error after operation
  });
}

doStuff((err) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Successfully completed doStuff');
  }
});
