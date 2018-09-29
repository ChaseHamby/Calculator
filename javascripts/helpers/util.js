const printToDom = (stringToPrint, divId) => {
    const printHere = document.getElementById(divId);
    printHere.innerHTML = stringToPrint;
};

export {printToDom} // you may have to write {printToDom: printToDom} //
//if the name of the function is different //