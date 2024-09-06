const fs = require('fs'); // Assuming 'fs' is a black box representing the file system library

function writeFileAsync(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function writeToFile(filePath, content) {
  try {
    await writeFileAsync(filePath, content);
    console.log('Successfully wrote to file:', filePath);
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

const someData = 'This is some data to write to the file.';
writeToFile('my-file.txt', someData);