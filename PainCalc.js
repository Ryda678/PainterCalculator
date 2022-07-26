const prompt = require('prompt-sync')();

const questionone = parseInt(prompt('What is the width of your wall?: '));
const questiontwo = parseInt(prompt('What is the height of your wall?: '));

const area = questionone * questiontwo;
console.log(area + ' Square Feet')

const questionthree = parseInt(prompt('How many doors do you have?: '));
const doorarea = 0
if (questionthree != 0) {
    const questionfour = parseInt(prompt('What is the width of your door?: '));
    const questionfive = parseInt(prompt('What is the height of your door?: '));

    
    doorarea = questionthree * (questionfour * questionfive);
}
console.log(doorarea);

/*const questionsix = parseInt(prompt('How many windows do you have?: '));
const windowarea = 0
if (questionsix != 0) {
    const questionseven = parseInt(prompt('What is the width of your window?: '));
    const questioneight = parseInt(prompt('What is the height of your window?: '));

    const windowarea = questionsix * (questionseven * questioneight);
}
console.log(windowarea)

const usedspace = doorarea + windowarea
const totalspace = area - usedspace

console.log(usedspace + ' Used space in feet');
console.log(totalspace + ' Space left in feet');




//gallon of paint covers approximately 350 square feet

let a = 350;
const sum = totalspace/a
console.log('You are going to need ' + sum + ' gallons of paint');*/


