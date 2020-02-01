document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const currentNum = document.querySelector('.current-num');
    const span = document.querySelector('span'); // the showing text when there's any click on buttons
    const refresh = document.getElementById('refresh'); // button C to refress the current number
    const numbers = document.querySelectorAll('.number'); // all button numbers
    const maths = document.querySelectorAll('.math'); // arithmetic operation buttons;
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

        math.addEventListener('click', () => {
            if (math.innerHTML == '+') {
                spanEff('plus');
                numToMath = currentNum.innerHTML;

                currentNum.innerHTML = '0';
                act = 'plus'

            } else if (math.innerHTML == '-') {
                spanEff('minus');
                numToMath = currentNum.innerHTML;

                currentNum.innerHTML = '0';
                act = 'minus'
                
            } else if (math.innerHTML == '*') {
                spanEff('times');
                numToMath = currentNum.innerHTML;

                currentNum.innerHTML = '0';
                act = 'times'
            } else if (math.innerHTML == '/') {
                spanEff('divide by');
                numToMath = currentNum.innerHTML;

                currentNum.innerHTML = '0';
                act = 'divide by'
            } else if (math.innerHTML == '.') {
                spanEff('.')
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
})