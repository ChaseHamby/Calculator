const printToDom = (stringToPrint, divId) => {
    const printHere = document.getElementById(divId);
    printHere.innerHTML = stringToPrint;
};

const multiply = (n1, n2) => {
    return n1 * n2;
};

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
    printToDom(answer, 'result'); 
};

calculate(4,2, 'multiply');
