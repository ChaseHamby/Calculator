import {addNumber} from '../components/calculator.js'

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const divideButton = document.getElementById('divideButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const multiplyButton = document.getElementById('multiplyButton');


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
    divideButton.addEventListener('click', addNumberCaller);
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
    multiplyButton.addEventListener('click', addNumberCaller);
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
}

export default attachEvents;