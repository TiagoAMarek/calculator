/**
* @author Tiago Alves Marek
**/
'use strict';

var Operations = function() {

    var PUBLIC  = this,
        PRIVATE = {};

    PUBLIC.regex = /[\+\*\/\-]/;

    PRIVATE.divide = function (a, b) {
        return parseFloat(a) / parseFloat(b);
    };

    PRIVATE.multiply = function (a, b) {
        return parseFloat(a) * parseFloat(b);
    };

    PRIVATE.subtract = function (a, b) {
        return parseFloat(a) - parseFloat(b);
    };

    PRIVATE.sum = function (a, b) {
        return parseFloat(a) + parseFloat(b);
    };

    PUBLIC.calculate = function (a, b, op) {
        var total = 0;
        switch(op){
            case '+':
                total = PRIVATE.sum(a, b);
                break;
            case '-':
                total = PRIVATE.subtract(a, b);
                break;
            case '*':
                total = PRIVATE.multiply(a, b);
                break;
            case '/':
                total = PRIVATE.divide(a, b);
                break;
        }

        return total;
    };

    return PUBLIC;
};
