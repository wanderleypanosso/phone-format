/**
 * Created by wanderley_panosso on 29/01/2016.
 */
'use strict';

const path = require('path');
const fs = require('fs');
const util = require('util');

module.exports = function(DDI){
    let formatterPath = path.join(__dirname, DDI);

    if (fs.existsSync(formatterPath) || fs.existsSync(formatterPath + '.js')){
        return require(path.join(__dirname, DDI));
    }
    else {
        throw new Error(util.format('Phone Formatter for +%s not yet implemented!', DDI));
    }

};
