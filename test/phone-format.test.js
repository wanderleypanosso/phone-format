/**
 * Created by wanderley_panosso on 29/01/2016.
 */

'use strict';

const phoneFormat = require('../lib/phone-format');


let phonesApi = [
    '+5531965588885',
    '+5516996000581',
    '+552197097252',
    '+5511990653478',
    '+555199701234'
];

let phonesContact = [
    '31965588885',
    '01516996000581',
    '(015)21 9709-7252',
    '+5511990653478',
    '996051111',
    '5199701234'
];

let phonesNormalized = phoneFormat.normalizeArraySync(phonesContact, '55', '16');

// filters the matching numbers
let phonesResult = phonesNormalized.filter(function(phoneNormalized){
    // if contact exists on the api it returns it's index, otherwise, -1
    return phonesApi.indexOf(phoneNormalized.formattedNumber) > -1;
});

console.log('\nNormalized');
console.log(phonesNormalized);

console.log('\nContact');
console.log(phonesContact);

console.log('\nApi');
console.log(phonesApi);

console.log('\nResult');
console.log(phonesResult);
