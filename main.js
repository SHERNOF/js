function fColorChange () {
    document.getElementById('scripting').style.color= 'red';
}

function doneWell () {
    document.getElementById('scripting').innerHTML = '6. Done Well';
}

function funcDemo1(p1, p2) {
    let a = p1 * p2;
    document.getElementById('funcDemo1').value = a
}


function funcDemo2 (a){        
    let d = (5/9) * (a-32)
    document.getElementById('output').value = d.toFixed(2);
    document.getElementById('input').value = '';
}

// document.getElementById('funcDemo3').innerHTML = "The temp is +funcDemo2() + Celsius"


// Object 

function obj1(onmouseover) {
var person = {
    firstName: "Sherwin",
    lastName : "Nofuente",
    id     :  5566
  };
document.getElementById('getName').innerHTML = person.firstName + " " + person.lastName
}

var fruits, text, flen, i; 
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
flen = fruits.length;
text = '<ul>';
for (i = 0; i < flen; i++){
    text += '<li>' + fruits[i] + '</li>';
}
text += '</ul>';
// let b = document.getElementById('arrDemo1').innerHTML = text;

var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
document.getElementById('arrDemo2').value = fruits;

function arrDemo2 () {
    fruits.push("Lemon");
    document.getElementById('arrDemo2').value = fruits;
}

var fruitss = ['Banana', 'Orange', 'Apple', 'Mango'];
document.getElementById('arrDemo3').value = fruitss;

function arrDemo3 () {
    fruitss[fruitss.length] = "Lemon";
    document.getElementById('arrDemo3').value = fruitss;
}



