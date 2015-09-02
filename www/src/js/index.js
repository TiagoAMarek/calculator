/**
* @author Tiago Alves Marek
**/
'use strict';

var UICalculator = function() {

    var PRIVATE = {},
        PUBLIC  = this,
        op      = new Operations();

    PRIVATE.keyboardListener = function () {
        var keyContainer    = document.querySelector(".keyboard"),
            displayContent  = document.querySelector(".display-content");

        if(!keyContainer || !displayContent) {
            throw new Error("An error has ocurred when looking for the keyboard or display");
        }

        keyContainer.addEventListener('touchend', function(evt) {
            var target = evt.target;
            if(target.tagName.toLowerCase() === "button") {
                displayContent.innerHTML += target.innerHTML;
            }
        });
    };

    PUBLIC.init = function () {
        PRIVATE.keyboardListener();
    };

    return PUBLIC;
};

var calc = new UICalculator();
calc.init();
