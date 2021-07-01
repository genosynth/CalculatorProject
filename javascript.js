const digits = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operator");
const ordered = [7,8,9,4,5,6,1,2,3,".",0]
var number1;
var res;
var number2;

for (let i=0; i<digits.length; i++){
    //console.log(digits[i])

    digits[i].addEventListener('click', function (e) { //Adds all event listeners for the Number digits and the DOT (.)
        let x = document.getElementById("resultBox");
        if (x.innerHTML=="0"){
            return x.innerHTML=ordered[i];
            
        }


        let y= x.innerHTML;
        if (x.innerHTML.length>=15){
           
        /* y = y.substr(1,(y.length));
            x.innerHTML = y;*/

            return;
        } 

        if (x.innerHTML.includes(".")) {
            ordered[9]="";
        }

        return x.innerHTML+=ordered[i];
      })
}



function clearNumber(){
 document.getElementById("resultBox").innerHTML=0;
  ordered[9] = ".";
    
}

function deleteDigit(){
    let x = document.getElementById("resultBox").innerHTML;
    if (x.length>1){

    x = x.slice(0, -1)
    document.getElementById("resultBox").innerHTML = x;
    if (x.includes(".")==false) {
        ordered[9]=".";
    }
    }
}

function addition(){



    let number1 = document.getElementById("resultBox").innerText;
    if (number1.includes("+") || number1.includes("-")) {
        
        answer(number1,"+")
            
        return document.getElementById("resultBox").innerText = number2;
    }
    console.log(number1);
    document.getElementById("resultBox").innerText +="+";
    

}

function subtraction(){



    let number1 = document.getElementById("resultBox").innerText;
    if (number1.includes("+") || number1.includes("-")) {

        //let position = number1.indexOf('+');
        
        answer(number1,"-")
        //splitNumbers(number1,"+")
         //let answer = res[0]+res[1]
        
        return document.getElementById("resultBox").innerText = number2;
    }
    console.log(number1);
    document.getElementById("resultBox").innerText +="-";
    

}

function multiplication(){
    let number1 = document.getElementById("resultBox").innerText;
    if (number1.includes("x") || number1.includes("-")) {
        
        answer(number1,"x")
            
        return document.getElementById("resultBox").innerText = number2;
    }
    console.log(number1);
    document.getElementById("resultBox").innerText +="x";

}

function division(){
    let number1 = document.getElementById("resultBox").innerText;
    if (number1.includes("÷") || number1.includes("-")) {
        
        answer(number1,"÷")
            
        return document.getElementById("resultBox").innerText = number2;
    }
    console.log(number1);
    document.getElementById("resultBox").innerText +="÷";
}

function splitNumbers(number,operator){
    let number1 = document.getElementById("resultBox").innerText;
     res = number1.split(operator);
          res[0] = parseFloat(res[0]); 
         res[1] = parseFloat(res[1]);
         return res;

}

function answer(number,operator){
   if (!number || !operator){
       let textBox=document.getElementById("resultBox").innerText;
       for (let i=0; i<textBox.length; i++){
           if (textBox.charAt(i)==="+"){
               operator="+";               
           }
           if (textBox.charAt(i)==="-"){
            operator="-";               
            }
            if (textBox.charAt(i)==="x"){
                operator="x";               
            }
            if (textBox.charAt(i)==="÷"){
                operator="÷";               
            }
       }
       
       console.log(operator)
   }
    splitNumbers(number,operator)
    if (operator==="+"){
        let num1 = res[0];
        let num2 = res[1];
        number2 = num1+num2
        document.getElementById("resultBox").innerText = number2;
        return number2;
    }
    if (operator==="-"){
        let num1 = res[0];
        let num2 = res[1];
        number2 = num1-num2
        document.getElementById("resultBox").innerText = number2;
        return number2;
    }

    if (operator==="x"){
        let num1 = res[0];
        let num2 = res[1];
        number2 = num1*num2
        document.getElementById("resultBox").innerText = number2;
        return number2;
    }

    if (operator==="÷"){
        let num1 = res[0];
        let num2 = res[1];
        number2 = num1/num2
        document.getElementById("resultBox").innerText = number2;
        return number2;
    }
    
}