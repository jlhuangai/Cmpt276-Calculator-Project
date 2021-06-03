function A1funcDisplay() {
   var Weight1 = document.getElementById('A1_Weight').value;
   var gradeTopA1 = document.getElementById('TopA1Grade').value;
   var gradeBotA1 = document.getElementById('BotA1Grade').value;
   var A1 = gradeTopA1 / gradeBotA1;
   if (!isNaN(A1) ) {
       if(!isNaN(Weight1)){
           if(isFinite(A1)){
           PercentA1.textContent = roundTo2(A1 * 100) + "%"; }
           else
           PercentA1.textContent = "Error"}}
   
}



function A2funcDisplay() {
    var Weight2 = document.getElementById('A2_Weight').value;
    var gradeTopA2 = document.getElementById('TopA2Grade').value;
    var gradeBotA2 = document.getElementById('BotA2Grade').value;
    var A2 = gradeTopA2 / gradeBotA2;
    if (!isNaN(A2) ) {
       if(!isNaN(Weight2)){
           if(isFinite(A2)){
           PercentA2.textContent = roundTo2(A2 * 100) + "%"; }
           else
           PercentA2.textContent = "Error"}} }
   
     

function A3funcDisplay() {
    var Weight3 = document.getElementById('A3_Weight').value;
    var gradeTopA3 = document.getElementById('TopA3Grade').value;
    var gradeBotA3 = document.getElementById('BotA3Grade').value;
    var A3 = gradeTopA3 / gradeBotA3;
    if (!isNaN(A3) ) {
        if(!isNaN(Weight3)){
            if(isFinite(A3)){
            PercentA3.textContent = roundTo2(A3 * 100) + "%"; }
            else
            PercentA3.textContent = "Error"}} }
     
     
     


function A4funcDisplay() {
    var Weight4 = document.getElementById('A3_Weight').value;
    var gradeTopA4 = document.getElementById('TopA4Grade').value;
    var gradeBotA4 = document.getElementById('BotA4Grade').value;
    var A4 = gradeTopA4 / gradeBotA4;
    if (!isNaN(A4) ) {
        if(!isNaN(Weight4)){
            if(isFinite(A4)){
            PercentA4.textContent = roundTo2(A4 * 100) + "%"; }
            else
            PercentA4.textContent = "Error"}}
     
     }
     
function roundTo2(num) {
   return +(Math.round(num + "e+2")  + "e-2");
}

function roundTo3(num) {
    return +(Math.round(num + "e+3")  + "e-3");
}

var a = document.getElementById("Mean")
a.addEventListener('click', Mean)

function Mean() {
var counter = 4   
var Grade_1 = document.getElementById('TopA1Grade').value / document.getElementById('BotA1Grade').value;
if (isNaN(Grade_1) ) {Grade_1 = 0 , counter--;}
var Grade_2 = document.getElementById('TopA2Grade').value / document.getElementById('BotA2Grade').value;
if (isNaN(Grade_2) ) {Grade_2 = 0, counter--;}
var Grade_3 = document.getElementById('TopA3Grade').value / document.getElementById('BotA3Grade').value;
if (isNaN(Grade_3) ) {Grade_3 = 0, counter--;}
var Grade_4 = document.getElementById('TopA4Grade').value / document.getElementById('BotA4Grade').value;
if (isNaN(Grade_4) ) {Grade_4 = 0; counter--;}
var mean = (Grade_1 + Grade_2 + Grade_3 + Grade_4) / counter

Result.textContent = roundTo3(mean);
Result1.textContent = roundTo2((mean * 100)) + "%";

}

var b = document.getElementById("Weighted")
b.addEventListener('click', Weighted)

function Weighted() {
var Weight_1 = document.getElementById("A1_Weight").value;
var Weight_2 = document.getElementById("A2_Weight").value;
var Weight_3 = document.getElementById("A3_Weight").value;
var Weight_4 = document.getElementById("A4_Weight").value;

if (isNaN(Weight_1)){
    Weight_1 = 0;
}
else{
    Weight_1 = Weight_1 * 1;
}

if (isNaN(Weight_2)){
    Weight_2 = 0;
}
else{
    Weight_2 = Weight_2 * 1;
}

if (isNaN(Weight_3)){
    Weight_3 = 0;
}
else{
    Weight_3 = Weight_3 * 1;
}

if (isNaN(Weight_4)){
    Weight_4 = 0;
}
else{
    Weight_4 = Weight_4 * 1;
}  

  
var Grade_1 = document.getElementById('TopA1Grade').value / document.getElementById('BotA1Grade').value;
if (isNaN(Grade_1) ) {Grade_1 = 0;}
var Grade_2 = document.getElementById('TopA2Grade').value / document.getElementById('BotA2Grade').value;
if (isNaN(Grade_2) ) {Grade_2 = 0;}
var Grade_3 = document.getElementById('TopA3Grade').value / document.getElementById('BotA3Grade').value;
if (isNaN(Grade_3) ) {Grade_3 = 0}
var Grade_4 = document.getElementById('TopA4Grade').value / document.getElementById('BotA4Grade').value;
if (isNaN(Grade_4) ) {Grade_4 = 0}



var Weight = Weight_1 + Weight_2 + Weight_3 + Weight_4;
var Total_Weight = ((Grade_1 * Weight_1) + (Grade_2 * Weight_2) + (Grade_3 * Weight_3) + (Grade_4 * Weight_4));
var Final_Weight = Total_Weight / Weight;
Result.textContent = roundTo3(Final_Weight);
Result1.textContent = roundTo2((Final_Weight * 100)) + "%";
}