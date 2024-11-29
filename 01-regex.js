const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/m;

const userInput = "dsadsadsadsadsa";

const userValidInput = "hello@world.com";

console.log(userValidInput.match(regex)); // we'll get an array with the info or null if it doesn't match

console.log(regex.test(userValidInput));
