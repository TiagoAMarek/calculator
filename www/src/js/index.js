/**
* @author Tiago Alves Marek
**/
'use strict';

var UICalculator = function() {

    var PRIVATE = {},
        PUBLIC  = this,
        op      = new Operations();

    PRIVATE.calculate = function (str) {
        var total     = 0,
            nextValue = 0,
            prevValue = 0;

        str = str.split(" ");
        var lastIndex = str.length - 1;
        if(str[lastIndex] === "") {
            str.pop(lastIndex);
        }

        for (var i = 0; i < str.length; i++) {
            nextValue = i+1;
            prevValue = i-1;

            if(op.regex.test(str[i]) && str.length > nextValue && prevValue >= 0) {
                total = op.calculate(str[prevValue], str[nextValue], str[i]);
                str[nextValue] = total;
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
                if(target.innerHTML !== '=' && target.innerHTML !== "C") {
                    if(op.regex.test(target.innerHTML)){
                        displayContent.innerHTML += " "+target.innerHTML+" ";
                    } else {
                        displayContent.innerHTML += target.innerHTML;
                    }
                } else if(target.innerHTML === "C"){
                    displayContent.innerHTML = "";
                } else {
                    if(op.regex.test(displayContent.innerHTML)){
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
