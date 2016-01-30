/**
 * Created by wanderley_panosso on 29/01/2016.
 */
'use strict';

const formatters = require('./formatters');


const validDigits = '1234567890';

function normalizeArraySync(phoneNumbers, DDI, DDD){

    DDI = DDI || '55';

    if(!(phoneNumbers instanceof Array)){
        throw new Error('Expected an Array of phone numbers!');
    }

    return phoneNumbers.map((phoneNumber) => {

        // removes all illegal digits and returns an array of valid digits.
        let phoneDigits = phoneNumber.split('').reduce((prev, curr) => {
            if(validDigits.indexOf(curr) !== -1)
                prev = prev + curr;
            return prev;
        }, '').split('');

        // if number does not start with (+) performs some processing
        if(phoneNumber[0] !== '+'){

            phoneDigits = formatters(DDI)(phoneDigits, DDD);

        }

        // prepends the + sign
        phoneDigits = ['+'].concat(phoneDigits);

        return {
            // concatenates the array into a string
            formattedNumber: phoneDigits.join(''),
            // assigns the original contact number
            originalNumber: phoneNumber
        };
    });
}


module.exports = {
  normalizeArraySync: normalizeArraySync
};
