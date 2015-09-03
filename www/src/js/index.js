/**
* @author Tiago Alves Marek
**/
'use strict';

var UICalculator = function() {

    var PRIVATE = {},
        PUBLIC  = this,
        op      = new Operations();

    PRIVATE.calculate = function (str) {
        var total = 0,
            nextValue = 0,
            prevValue = 0;

        str = str.split(" ");
        var lastIndex = str.length - 1;
        str.pop(lastIndex);

        for (var i = 0; i < str.length; i++) {
            nextValue = i+1;
            prevValue = i-1;

            if(/[\+\*\/\-]/.test(str[i]) && str.length > nextValue) {
                switch(str[i]){
                    case '+':
                        total = op.sum(str[prevValue], str[nextValue]);
                        break;
                    case '-':
                        total = op.subtract(str[prevValue], str[nextValue]);
                        break;
                    case '*':
                        total = op.multiply(str[prevValue], str[nextValue]);
                        break;
                    case '/':
                        total = op.divide(str[prevValue], str[nextValue]);
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
