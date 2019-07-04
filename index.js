'use strict';

const fileReader = require('./lib/reader-promises.js');


// Obtain and assert input
let files = [`${__dirname}/files/1.txt`, `${__dirname}/files/2.txt`, `${__dirname}/files/3.txt`]

if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});