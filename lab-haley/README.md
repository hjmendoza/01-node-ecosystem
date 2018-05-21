# Code Fellows 401n5 Lab 01: Node Ecosystem

[![Build Status](https://travis-ci.com/hjmendoza/01-node-ecosystem.svg?branch=haley-01)](https://travis-ci.com/hjmendoza/01-node-ecosystem)

* **lib/** - contains module definitions
* **test/** - contains unit tests

## Greet Module
* `greet.js` exports a single function.
* `greet` has an arity of one that expects a string as input. It returns the input name, concatenated with "hello". Returns null if the input is not a string.

## Arithmetic Module
* `arithmetic.js` exports an object with `add` and `sub` methods that implement addition and subtraction.
* `add` has airty of two. `if` either argument is a non-number the function returns `null`. `else` return the sum of the 2 numbers
* `sub` has airty of two. `if` either argument is a non-number the function should return `null`. `else` return the second parameter subtracted from the first parameter
