//calculator

function calculator(operator) {
   var firstNumber = Number(document.getElementById('firstNumber').value);
   var lastNumber = Number(document.getElementById('lastNumber').value);
    var result = 0;

    switch (operator) {
        case '+' : result = firstNumber + lastNumber;
            break;
        case '-' : result = firstNumber - lastNumber;
             break
        case '*' : result = firstNumber * lastNumber;
            break;
        case '/' : result = firstNumber / lastNumber;
            break;

    }
    document.getElementById('result').value = result;
}

// var divi = document.getElementById('divi');
// divi.onclick = function () {
//     calculator('/');
// }
// var multi = document.getElementById('multi');
// multi.onclick = function () {
//     calculator('*');
// }
// var sub = document.getElementById('sub');
// sub.onclick = function () {
//     calculator('-');
// }
// var addi = document.getElementById('addi');
// addi.onclick = function () {
//     calculator('+');
// }

var reset = document.getElementById('reset');
reset.onclick = function () {
    document.getElementById('firstNumber').value = '';
    document.getElementById('lastNumber').value = '';
    document.getElementById('result').value = '';
}

var getResult = document.getElementById('getResult');
getResult.onclick = function () {
    var operator = document.querySelector('input[name = "operator"]:checked').value;

    calculator(operator);
}

var h1 = document.getElementById('clock');

function clock() {
    var today = new Date();
    var hours = today.getHours();
    var minit = today.getMinutes();
    var sec = today.getSeconds();

    var time = hours+' : '+minit+' : '+sec;
    h1.innerHTML = time;
}

setInterval(clock,1000);

$('#textRed').click(function () {
    $(this).css('color','red');
});

