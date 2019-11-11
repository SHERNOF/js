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

document.getElementById('funcDemo3').innerHTML = "The temp is +funcDemo2() + Celsius"


// Object 

function obj1(onmouseover) {
var person = {
    firstName: "Sherwin",
    lastName : "Nofuente",
    id     :  5566
  };
document.getElementById('getName').innerHTML = person.firstName + " " + person.lastName
}




