const totalPage = document.body || document.querySelector('body');
function red(){
    totalPage.style.background = 'red';
}
function blue(){
    totalPage.style.background = 'blue';
}
function yellow(){
    totalPage.style.background = 'yellow';
}
function green(){
    totalPage.style.background = 'green';
}
function changecolor(){
    const read = document.querySelector('.input1').value;
    if(!read){
        alert('Enter a valid color');
        return;
    }
    const createEle = document.createElement('div');
    createEle.style.backgroundColor = read;
    if(createEle.style.backgroundColor === ''){
        alert('Enter a valid color or check spelling');
        clearInputText();
        return;
    }
    totalPage.style.background = `${read}`;
}
function clearInputText(){
    const red = document.querySelector('.input1');
    red.value = '';
}
function createGradient() {
    const read = document.querySelector('.input2').value;
    const colors = read.split(",");  // split input by comma
    if (colors.length >= 2) {
        document.body.style.background = `linear-gradient(to right, ${colors[0].trim()}, ${colors[1].trim()})`;
    } else {
        alert("Please enter two colors separated by a comma, e.g. red, blue");
    }
}
function changeBgColor(){
    document.body.style.backgroundColor = '#6667AB';
}
function resetBgColor(){
    document.body.style.backgroundColor = '';
}

const footerread = document.querySelector('footer');
footerread.addEventListener('mouseover', changeBgColor)
footerread.addEventListener('mouseout', resetBgColor)

