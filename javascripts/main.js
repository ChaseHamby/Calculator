import {calculate} from './components/calculator.js'
import buttonEvents from './helpers/buttonEvents.js'

const initializeApp = () => {
    buttonEvents();
    calculate(12,8, 'add');
}

initializeApp();