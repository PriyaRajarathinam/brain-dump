const fs = require('fs');
const validateEmail = require('./email');

test('banana@ucsc.edu', () => {
  expect(validateEmail('banana@ucsc.edu')).toBeTruthy();
});

test('sluggy@gmail.com', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeTruthy();
});

test('@@@@@.....', () => {
  expect(validateEmail('@@@@@.....')).toBeFalsy();
});

test('sluggy.gmail@', () => {
  expect(validateEmail('sluggy.gmail@')).toBeFalsy();
});

test('lol', () => {
  expect(validateEmail('lol')).toBeFalsy();
});

test('priya@gmail.compriya@gmail.com', ()=> {
  expect(validateEmail('priya@gmail.compriya@gmail.com')).toBeFalsy();  
});