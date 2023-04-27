const display = document.querySelector('#display');
const btns = document.querySelectorAll('.button');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');

btns.forEach((btns , idx ) => {
    btns.addEventListener("click" , () => {
        display.value += btns.value;
        console.log(idx);
    });
});
clear.addEventListener("click" , () => {
    display.value="";
})

equal.addEventListener("click" , () => {
    display.value=eval(display.value);
});