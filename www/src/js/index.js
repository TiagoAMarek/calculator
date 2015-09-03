/**
* @author Tiago Alves Marek
**/
'use strict';

var UICalculator = function() {

    var PRIVATE = {},
        PUBLIC  = this,
        op      = new Operations();

    PRIVATE.calculate = function (str) {
        var total = 0;
        str = str.split(" ");
        for (var i = 0; i < str.length; i++) {
            if(/[\+\*\/\-]/.test(str[i]) && str.length > i) {
                switch(str[i]){
                    case '+':
                        total = op.sum(str[i-1], str[i+1]);
                        break;
                    case '-':
                        total = op.subtract(str[i-1], str[i+1]);
                        break;
                    case '*':
                        total = op.multiply(str[i-1], str[i+1]);
                        break;
                    case '/':
                        total = op.divide(str[i-1], str[i+1]);
                        break;
                }
                str[i+1] = total;
            }
        }
        return total;
    };

    PRIVATE.keyboardListener = function () {
        var keyContainer    = document.querySelector(".keyboard"),
            displayContent  = document.querySelector(".display-content");

        if(!keyContainer || !displayContent) {
            throw new Error("An error has ocurred when looking for the keyboard or display");
        }

        keyContainer.addEventListener('touchend', function(evt) {
            var target = evt.target;
            if(target.tagName.toLowerCase() === "button") {
                if(target.innerHTML !== '=') {
                    if(/[\+\*\/\-]/.test(target.innerHTML)){
                        displayContent.innerHTML += " "+target.innerHTML+" ";
                    } else {
                        displayContent.innerHTML += target.innerHTML;
                    }
                } else {
                    if(/[\+\*\/\-]/.test(displayContent.innerHTML)){
                        var total = PRIVATE.calculate(displayContent.innerHTML);
                        displayContent.innerHTML = total;
                    }
                }
            }
        });
    };


    PUBLIC.init = function () {
        document.addEventListener('deviceready', PRIVATE.keyboardListener());
    };

    return PUBLIC;
};

var calc = new UICalculator();
calc.init();
