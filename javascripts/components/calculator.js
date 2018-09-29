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
const calculate = (num1, num2, mathType) => {
    let answer = 0; // knows to start equation at 0
    switch(mathType){
        case 'multiply':
            answer = multiply(num1, num2);
            break; // this will stop the function from going
        case 'divide':
            answer = divide(num1, num2);
            break;
        case 'add':
            answer = add(num1, num2);
            break;
        case 'subtract':
            answer = subtract(num1, num2);
            break;
        default: 
            answer = 'nope';
    }
    setDisplay(answer);
};

const setDisplay = (someNumber) => {
    calc.display = someNumber;
    printToDom(calc.display, 'result');
};

const setMathType = (newMathType) => {
    calc.mathType = newMathType;
}

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