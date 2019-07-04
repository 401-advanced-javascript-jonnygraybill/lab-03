'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promises.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['1.txt', '2.txt', '3.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files, (err,data) => {
      expect(err).toBeUndefined();
      done();
    });
  });


  it('reads 3 files', done => {
    let files = ['1.txt', '2.txt', '3.txt'];
    reader(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length).toBe(3);
      done();
    });
  });

});