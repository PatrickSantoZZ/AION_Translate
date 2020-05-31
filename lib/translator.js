import _ from 'lodash';
import {ASMO_LETTER_KEY_MAP, ELYOS_LETTER_KEY_MAP} from './constants/letter-key-map';

//TODO: create is empty function using spread operators
const translateUserInput = (input, isAsmoSelected = true) => {

    let translation = 'Waiting to Translate';
    if (!_.isEmpty(input)) {
        try {

            translation = translateHelper(input.toLowerCase(), isAsmoSelected);

        } catch (e) {
            //logging
            console.log('there is an error')
        }
    }

    return translation;
};


function translateHelper(input, isAsmoSelected) {
    let str = '';
    let table = 0;
    let map;
    if (isAsmoSelected) {
        map = ASMO_LETTER_KEY_MAP;
    } else {
        map = ELYOS_LETTER_KEY_MAP;
    }

    for (let i in input) {
        if (map.hasOwnProperty(input.charAt(i))) {

            let inputCharacterKey = map[input.charAt(i)];
            let currentTable = inputCharacterKey[Object.keys(inputCharacterKey)[table]];

            str += currentTable.letter;
            table = currentTable.number;

        } else {
            table = 0;
            str += input.charAt(i);
        }
    }

    return str;
}


function Queue() {
    this.queue = [];

    this.enqueue = (x) => {
        this.queue.push(x)
    };

    this.dequeue = () => {
        this.queue.shift();
    };

    this.getLength = () => {
        if (this.queue) {
            return this.queue.length;
        }
    };

    this.getFirstElement = () => {
        if (this.queue) {
            return this.queue[0];
        }
    };
}

let myQueue = new Queue();

export {translateUserInput, myQueue};