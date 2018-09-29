import {addNumber, setMathType, calculate} from '../components/calculator.js'

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const divideButton = document.getElementById('divideButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const multiplyButton = document.getElementById('multiplyButton');
const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const subtractButton = document.getElementById('subtractButton');
const zeroButton = document.getElementById('zeroButton');
const equalsButton = document.getElementById('equalButton');
const addButton = document.getElementById('addButton');

// Pulling the addNumber function from calc.js file //
const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
};

// Functions below call the individual numbers using the function above //

const sevenButtonEvent = () => {
    sevenButton.addEventListener('click', addNumberCaller);
};

const eightButtonEvent = () => {
    eightButton.addEventListener('click', addNumberCaller);
};

const nineButtonEvent = () => {
    nineButton.addEventListener('click', addNumberCaller);
};

const divideButtonEvent = () => {
    divideButton.addEventListener('click', () => {
        setMathType('divide');
    })
};

const fourButtonEvent = () => {
    fourButton.addEventListener('click', addNumberCaller);
};

const fiveButtonEvent = () => {
    fiveButton.addEventListener('click', addNumberCaller);
};

const sixButtonEvent = () => {
    sixButton.addEventListener('click', addNumberCaller);
};

const multiplyButtonEvent = () => {
    multiplyButton.addEventListener('click', () => {
        setMathType('multiply');
    })
};

const oneButtonEvent = () => {
    oneButton.addEventListener('click', addNumberCaller);
};

const twoButtonEvent = () => {
    twoButton.addEventListener('click', addNumberCaller);
};

const threeButtonEvent = () => {
    threeButton.addEventListener('click', addNumberCaller);
};

const subtractButtonEvent = () => {
    subtractButton.addEventListener('click', () => {
        setMathType('subtract');
    })
};

const zeroButtonEvent = () => {
    zeroButton.addEventListener('click', addNumberCaller);
};

const equalsButtonEvent = () => {
    equalButton.addEventListener('click', calculate);
};

const addButtonEvent = () => {
    addButton.addEventListener('click', () => {
        setMathType('add');
    })
};

// This function houses all of the individual number button functions //

const attachEvents = () => {
    sevenButtonEvent();
    eightButtonEvent();
    nineButtonEvent();
    divideButtonEvent();
    fourButtonEvent();
    fiveButtonEvent();
    sixButtonEvent();
    multiplyButtonEvent();
    oneButtonEvent();
    twoButtonEvent();
    threeButtonEvent();
    subtractButtonEvent();
    zeroButtonEvent();
    equalsButtonEvent();
    addButtonEvent();
}

export default attachEvents;