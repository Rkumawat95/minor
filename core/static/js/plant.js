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
    if (q1=="Imbibition") {c++}
    if (q2=="competitive inhibition is observed when substrate and inhibitor compete for the active siteon enzyme") {c++}
    if (q3=="RuBP carboxylase and PEP carboxylase") {c++}
    if (q4=="Glyoxylate cycle") {c++}   
    if (q5=="Presence of agranal chloroplasts in bundle sheath cells and granal chloroplasts in mesophyll cells") {c++}
    if (q6=="Addition of a lot of succinates does not reverse the inhibition of succinic dehydrogenaseby malonate") {c++}
    if (q7=="an unsaturated or saturated fatty acid esterified to a glycerol molecule to which a phosphate group is also attached") {c++}
    if (q8=="nitrogen containing polysaccharide") {c++}
    if (q9=="Alcohol – Nitrogenase") {c++}
    if (q10=="Collagen") {c++}
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