const { size } = require("mathjs");
function check() {
    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;
    var q7 = document.quiz.question7.value;
    var q8 = document.quiz.question8.value;
    var q9 = document.quiz.question9.value;
    var q10 = document.quiz.question10.value;
    var result = document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if (q1=="Molarity") {c++}
    if (q2=="0.07") {c++}
    if (q3=="0.875 M") {c++}
    if (q4=="7:32") {c++}   
    if (q5=="Propane") {c++}
    if (q6=="400 mL") {c++}
    if (q7=="P/RT") {c++}
    if (q8=="All of these") {c++}
    if (q9=="in a straight line path") {c++}
    if (q10=="1 + pb/RT") {c++}
    if (c==10){
        result.textContent =`Your Score = ${c}/10 😍`;
    }else if(c>=8){
        result.textContent =`Your Score = ${c}/10 🥰`;
    }else if(c>=5){
        result.textContent =`Your Score = ${c}/10 😊`;
    }else if(c>=1){
        result.textContent =`Your Score = ${c}/10 😞`;
    }else{
        result.textContent =`Your Score = ${c}/10 😡`;
    }
    quiz.style.display="none";
    result.style.display = "flex";
    result.style.justifyContent = "center";
    result.style.margin = "400px";
    result.style.fontSize = "50px";
    result.style.fontFamily = "Inherite";
}