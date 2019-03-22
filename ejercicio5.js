'use strict'

window.addEventListener('load', () =>{
    var caja = document.getElementById('resultado');   
    var buttons = document.getElementsByClassName('btn-number');
    var igual = document.getElementById('igual');
    var limpiar = document.getElementById('limpiar')
    for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click',() =>{
                    caja.textContent = caja.textContent + String(buttons[i].value);
                    caja.value = caja.value + String(buttons[i].value);
                    

            });
            
    }
    igual.addEventListener('click',() =>{
                var string  = caja.value;
                if (string.includes('+')) {
                        string  = string.split('+');
                        var num1 = parseInt(string[0]);
                        var num2 = parseInt(string[1]);
                        var suma = num1 + num2;
                        caja.value = suma;
                        
                }
                if (string.includes('-')) {
                        string  = string.split('-');
                        var num1 = parseInt(string[0]);
                        var num2 = parseInt(string[1]);
                        var resta = num1 - num2;
                        caja.value = resta;
                }

                if (string.includes('*')) {
                        string  = string.split('*');
                        var num1 = parseInt(string[0]);
                        var num2 = parseInt(string[1]);
                        var multiplicacion = num1 * num2;
                        caja.value = multiplicacion;
                        
                }

                if (string.includes('/')) {
                        string  = string.split('/');
                        var num1 = parseInt(string[0]);
                        var num2 = parseInt(string[1]);
                        var division = num1 / num2;
                        caja.value = division;
                        
                }

    });

    limpiar.addEventListener('click',() =>{
            caja.value = '';

    });


});