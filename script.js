var input = document.getElementById('input')
var Income = document.getElementById('para')
var Expence = document.getElementById('para2')
var savings = document.getElementById('para3')

var value = input.value;

function income() {
    Income.innerHTML = input.value;
    input.value = "";
    Expence.innerHTML = "";
    savings.innerHTML = "";
};

function expence() {
    Expence.innerHTML = input.value;
    savings.innerHTML =  Income.innerHTML -  input.value;

};
