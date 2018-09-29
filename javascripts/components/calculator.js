import {printToDom} from '../helpers/util.js';
import {multiply, divide, add, subtract} from '../helpers/maths.js';

// Needs empty strings so it concatenates the numbers // 
const calc = {
    firstNumber: '',
    secondNumber: '',
    mathType: '',
    display: ''
};

// Function that uses math functions from math.js and allows the calculator to work //
const calculate = () => {
    let answer = 0; // knows to start equation at 0
    switch(calc.mathType){
        case 'multiply':
            answer = multiply(calc.firstNumber, calc.secondNumber);
            break; // this will stop the function from going
        case 'divide':
            answer = divide(calc.firstNumber, calc.secondNumber);
            break;
        case 'add':
            answer = add(calc.firstNumber, calc.secondNumber);
            break;
        case 'subtract':
            answer = subtract(calc.firstNumber, calc.secondNumber);
            break;
        default: 
            answer = 'nope';
    }
    setDisplay(answer);
};

// Used to print the right number to the DOM // 
const setDisplay = (someNumber) => {
    calc.display = someNumber;
    printToDom(calc.display, 'result');
};

// Used on the buttons event page to allow the division, add, mult, sub, equal buttons work //
const setMathType = (newMathType) => {
    calc.mathType = newMathType;
}

// Used on main js page to print the entire app to DOM // 
const initialDisplay = () => {
    printToDom(0, 'result');
}

const addNumber = (num) => {
    if(calc.mathType === '') {
        calc.firstNumber += num;
        setDisplay(calc.firstNumber);
    } else {
        calc.secondNumber += num;
        setDisplay(calc.secondNumber);
    }
};

export {calculate, addNumber, initialDisplay, setMathType}