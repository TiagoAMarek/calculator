/**
* @author Tiago Alves Marek
**/
'use strict';

var Operations = function() {

    var PUBLIC  = this,
        PRIVATE = {};

    PUBLIC.divide = function(a, b) {
        return parseFloat(a)/parseFloat(b);
    };

    PUBLIC.multiply = function(a, b) {
        return parseFloat(a)*parseFloat(b);
    };

    PUBLIC.subtract = function(a, b) {
        return parseFloat(a)-parseFloat(b);
    };

    PUBLIC.sum = function(a, b) {
        return parseFloat(a)+parseFloat(b);
    };
};
