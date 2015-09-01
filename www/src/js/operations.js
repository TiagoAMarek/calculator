/**
* @author Tiago Alves Marek
**/
'use strict';

var Operations = function() {

    var PUBLIC  = this,
        PRIVATE = {};

    PUBLIC.division = function(a, b) {
        return parseFloat(a)/parseFloat(b);
    };

    PUBLIC.multiplication = function(a, b) {
        return parseFloat(a)*parseFloat(b);
    };

    PUBLIC.minus = function(a, b) {
        return parseFloat(a)-parseFloat(b);
    };

    PUBLIC.sum = function(a, b) {
        return parseFloat(a)+parseFloat(b);
    };
};
