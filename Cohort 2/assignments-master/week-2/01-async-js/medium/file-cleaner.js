const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

function readFileAsync(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err,data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
};

function removeSpace(content){
    return content.replace(/\s/g,' ');
};

function writeFileAync(path,data){
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'urf-8', (err) => {
            if (err) {
                reject(err);
            }else{
                resolve();
            }
        });
    });
}

async function removeSpaceFromFile(filepath){
    try{
        const fileContent = await readFileAsync(filepath);
        const contentWOSpace = removeSpace(fileContent);
        console.log("Content w/o space : ", contentWOSpace);
    }catch(error){
        console.log("Error Processing Files : ", error);
    }
}

const filepath = 'my-file.txt';
removeSpaceFromFile(filepath);

