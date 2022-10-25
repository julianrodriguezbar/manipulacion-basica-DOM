const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 =document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');


btn.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    console.log(event);
    console.log(Number(input1.value) + Number(input2.value));
    let suma = Number(input1.value) + Number(input2.value);

    result.innerText = "resultado" + ' ' + suma;


}

