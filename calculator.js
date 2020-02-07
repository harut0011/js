document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    const currentNum = document.querySelector('.current-num');
    const span = document.querySelector('span'); // the showing text when there's any click on buttons
    const refresh = document.getElementById('refresh'); // button C to refress the current number
    const numbers = document.querySelectorAll('.number'); // all button numbers
    const maths = document.querySelectorAll('.math'); // arithmetic operation buttons;
    const replace = document.getElementById('replace');
    const replaceIc = document.querySelector('.fas'); // the replace icon



    let numToMath, act;
    let spanEff = (spanValue) => {
        span.innerHTML = spanValue;
        span.classList.add('span-eff');
        span.style.opacity = '1';
        setTimeout(() => {

            span.style.opacity = '0';

            setTimeout(() => {
                span.classList.remove('span-eff');
            }, 200)
        }, 200)
    }

    for (let a = 0; a < numbers.length; a++) {
        let number = numbers[a];
        number.addEventListener('click', () => { //number buttons sorting out
            if (currentNum.innerHTML == '0') {

                currentNum.innerHTML = number.innerHTML;


                span.innerHTML = number.innerHTML;

                spanEff(number.innerHTML);

            } else {
                currentNum.innerHTML += number.innerHTML;

                spanEff(number.innerHTML);
            }
        });


    }

    for (let b = 0; b < maths.length; b++) { //math buttons sorting out
        let math = maths[b];

        let arithmatic = (theAct, arith) => {
        	if (math.innerHTML == arith) {
            	spanEff(theAct);
            	numToMath = currentNum.innerHTML;

            	currentNum.innerHTML = '0';
            	act = theAct
        }

        math.addEventListener('click', () => {
        	arithmatic('plus', '+')
        	arithmatic('minus', '-')
        	arithmatic('times', '*')
        	arithmatic('divide by', '/')
            if (math.innerHTML == '.') {
                spanEff('.')
            } else if (math.innerHTML == 'sin') {
                currentNum.innerHTML = Math.sin(Number(currentNum.innerHTML)).toFixed(2);
                spanEff(currentNum.innerHTML)
            } else if (math.innerHTML == 'cos') {
                currentNum.innerHTML = Math.cos(Number(currentNum.innerHTML)).toFixed(2);
                spanEff(currentNum.innerHTML)
            } else if (math.innerHTML == 'tan') {
                currentNum.innerHTML = Math.tan(Number(currentNum.innerHTML)).toFixed(2);
                spanEff(currentNum.innerHTML)
            } else if (math.innerHTML == '√x') {
                currentNum.innerHTML = Math.sqrt(Number(currentNum.innerHTML)).toFixed(2);
                spanEff(currentNum.innerHTML)
            } else if (math.innerHTML == '=') {
                if (act == 'plus') {
                    currentNum.innerHTML = Number(numToMath) + Number(currentNum.innerHTML);
                    spanEff(currentNum.innerHTML)
                } else if (act == 'minus') {
                    currentNum.innerHTML = Number(numToMath) - Number(currentNum.innerHTML);
                    spanEff(currentNum.innerHTML)
                } else if (act == 'times') {
                    currentNum.innerHTML = Number(numToMath) * Number(currentNum.innerHTML);
                    spanEff(currentNum.innerHTML)
                } else if (act == 'divide by') {
                    currentNum.innerHTML = Number(numToMath) / Number(currentNum.innerHTML);
                    spanEff(currentNum.innerHTML)
                }
            }

        })

    }

    refresh.addEventListener('click', () => {
        currentNum.innerHTML = '0'
    })



    replace.addEventListener('click', () => {
        replaceIc.classList.toggle('replace1');

        for (let c = 0; c < maths.length; c++) {
            let trigonometry = (before, after) => {
                let math = maths[c];
                math.classList.toggle('mathColor')
                if (math.innerHTML == before) {
                    math.innerHTML = after;
                }
            }
            let math = maths[c];
            math.classList.toggle('mathColor')
            
            if (math.innerHTML.length <= 1) {
                trigonometry('+', 'sin')
                trigonometry('-', 'cos')
                trigonometry('*', 'tan')
                trigonometry('/', '√x')
            } else {
                trigonometry('sin', '+')
                trigonometry('cos', '-')
                trigonometry('tan', '*')
                trigonometry('√x', '/')
            }
        }
    })

})