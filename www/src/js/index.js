/**
* @author Tiago Alves Marek
**/
'use strict';

var UICalculator = function() {

    var PRIVATE = {},
        PUBLIC  = this,
        op      = new Operations();

    PUBLIC.init = function () {
        console.log(op);
    };

    return PUBLIC;
};
