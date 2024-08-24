const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('wordcounter')
  .description('CLI to count the number of words in a file')
  .version('1.0.0');

// Define a subcommand for counting words
program
  .command('count <file>')
  .description('Count the number of words in a file')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
      } else {
        const words = data.trim().split(/\s+/).length;
        console.log(`You have ${words} words in this file.`);
      }
    });
  });

// Parse command line arguments
program.parse();