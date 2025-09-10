const result = document.getElementsByClassName("answer")[0];
let arr = [];
function add(i){
    arr.push(i);
    render();
}
function divide(){
    arr.push('/');
    render();
}
function multiply(){
    arr.push('*');
    render();
}
function subtract(){
    arr.push('-');
    render();
}
function addition(){
    arr.push('+');
    render();
}
function clearAC(){
    arr = [];
    render();
}
// OUTPUT
function equal(){
    result.innerHTML = solve();
    arr = [(solve())];
    render();
}
function render() {
    let s = arr.join('');
    result.innerHTML = s.length ? s : '0';
}

function solve(){
    let exp = arr.join('');
    try{
        let ans = eval(exp);
        return ans;
    }
    catch{
        return "Error";
    }
}

function addDOT() {
    // Prevent multiple decimals in a number
    let lastNum = arr.join('').split(/[\+\-\*\/]/).pop();
    if (!lastNum.includes('.')) {
        arr.push('.');
        render();
    }
}

document.addEventListener('keydown', function(e) {
    const key = e.key;
    if (!isNaN(key)) { // If key is a number
        add(Number(key));
    } else if (key === '+') {
        addition();
    } else if (key === '-') {
        subtract();
    } else if (key === '*' || key === 'x' || key === 'X') {
        multiply();
    } else if (key === '/') {
        divide();
    } else if (key === '.' ) {
        addDOT();
    } else if (key === 'Enter' || key === '=') {
        equal();
    } else if (key === 'Backspace') {
        arr.pop();
        render();
    } else if (key.toLowerCase() === 'c') { // 'c' for clear
        clearAC();
    }
});
