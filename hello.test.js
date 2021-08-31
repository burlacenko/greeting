var utils  = require('course-utilities');

// if npm test is been called from "mitfacts":
var hello = utils.load('./hello.js', 'hello');

// if npm test is been called from "mit forks", path is relative to folder from which jest (npm test) is been called:
// var hello = utils.load('./greeting/hello.js', 'hello');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello World!");
});