const {ASMO_LETTER_KEY_MAP, ELYOS_LETTER_KEY_MAP} = require('./letter-key-map.js');

class Translator {
    constructor(){


    }
    // function start
 translateHelper(input, isAsmoSelected) {
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
    console.log(str)
}
}
module.exports = Translator