const { size } = require("historyjs");

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
    if (q1=="3") {c++}
    if (q2=="2") {c++}
    if (q3=="3") {c++}
    if (q4=="2") {c++}   
    if (q5=="4") {c++}
    if (q6=="1") {c++}
    if (q7=="3") {c++}
    if (q8=="3") {c++}
    if (q9=="3") {c++}
    if (q10=="3") {c++}
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
    result.style.display = "center";
    result.style.justifyContent = "center";
    result.style.fontSize = "50px";
    result.style.fontFamily = "Inherite";
    
}