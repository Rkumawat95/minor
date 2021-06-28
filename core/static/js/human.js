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
    if (q1=="IIeum") {c++}
    if (q2=="Hydrochloric acid") {c++}
    if (q3=="Vitamin A") {c++}
    if (q4=="Villi") {c++}   
    if (q5=="Below and in front of the ear canal") {c++}
    if (q6=="Bicarbonate") {c++}
    if (q7=="Spider") {c++}
    if (q8=="The partial pressure of oxygen") {c++}
    if (q9=="The airway becomes partially obstructed") {c++}
    if (q10=="Shortness of breath") {c++}
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