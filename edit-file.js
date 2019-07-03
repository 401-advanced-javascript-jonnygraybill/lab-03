'use strict';

const fileReader = require('./lib/reader.js');
const fs = require('fs');

let file = `${__dirname}/files/test.txt`;

let doSomething = (err, data) => {
  if (err) { throw err; }
  console.log('before');
  console.log(data);
  fs.appendFile(`${__dirname}/files/test.txt`, ` ${Math.random()}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
};

setTimeout(function () {
  let readItNow = (err, data) => {
    if (err) { throw err; }
    console.log('after');
    console.log(`🤨 ${data}`);
  }
  fileReader(file, readItNow);
  }, 2000);

fileReader(file, doSomething);