'use strict';

// const fileReader = require('./lib/reader.js');
const fs = require('fs');
const faker = require('faker');
let file = `${__dirname}/files/test.txt`;

let savedData = []
let i = 0;
do {
  savedData.push(faker.hacker.noun());
  i++;
} while (i < 100);

fs.readFile(file, (err, data) => {
    let buffer = data.toString()
    if (err) { throw (err); }
    else { 
      console.log(`😂 ${buffer}`); return (buffer); 
    }
})

fs.appendFile(file, savedData, function (err) {
    if (err) { throw err };
    console.log(`The File Got Saved 😍`);
});

fs.readFile(file, (err, data) => {
    let buffer = data.toString()
    if (err) { throw (err); }
    else { 
      console.log(`😱 ${buffer}`); return (buffer); 
    }
})