const sevenButton = document.getElementById('sevenButton');

const sevenButtonEvent = () => {
    sevenButton.addEventListener('click', () => {
        console.log('you clicked 7');
    })
};

// This function houses all of the individual number button functions //

const attachEvents = () => {
    sevenButtonEvent();
    
}

export default attachEvents;