var colors = require('colors');
colors.setTheme({
	input: "green",
	warn: 'yellow',
	error: 'red',
	silly: 'rainbow',
});

console.log("hello".green);
console.log('this is an error'.error);
console.log('this is a warning'.warn);
console.log('this is a debug'.debug);  