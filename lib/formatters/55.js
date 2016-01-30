/**
 * Created by wanderley_panosso on 29/01/2016.
 */
'use strict';

let DDI = __filename.split('/').pop().split('.').shift();

module.exports = function(phoneDigits, DDD){
    DDD = DDD || '11';

    // removes all zeros from the beginning useful for "016..." or "01516..."
    while(phoneDigits[0] === '0'){
        phoneDigits.shift();
    }

    // if number is 8 or 9 digits long, it does not have a DDD
    if((phoneDigits.length === 8) || (phoneDigits.length === 9)) {
        // prepends the host's DDD
        phoneDigits = DDD.split('').concat(phoneDigits);
    }

    // if number is 12 or 13 digits long, it has the operator's prefix
    if((phoneDigits.length === 12) || (phoneDigits.length === 13)){
        // removes the operator's prefix
        phoneDigits = phoneDigits.slice(2);
    }

    // if number 10 or 11 digits long, it does not hava a DDI
    if((phoneDigits.length === 10) || (phoneDigits.length === 11)){
        // prepends the host's DDI
        phoneDigits = DDI.split('').concat(phoneDigits);
    }

    return phoneDigits;
};