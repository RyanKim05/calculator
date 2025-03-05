function add(num1, num2){
    return num1+num2;
};

function subtract(num1, num2){
    return num1-num2;
};

function multiply(num1,num2){
    return num1*num2;
};

function divide(num1,num2){
    return num1/num2;
};

function operate(num1, op, num2){
    if(op==="+"){
        return add(num1,num2);
    }
    else if(op==="-"){
        return subtract(num1,num2);
    }
    else if(op==="*"){
        return multiply(num1,num2);
    }
    else if(op==="/"){
        return divide(num1,num2);
    }
};

//will store final calculation
let number = 0;
const array = [];
let num1="";
let num2="";
let op = "";

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const span = document.createElement("span");
        let update = "";
        let concat = "";

        if (event.target.dataset.type !== "secondary") {
            update += event.target.textContent;
            span.innerText = update;
            array.push(update);
            screen.appendChild(span);
        }

        if(event.target.classList.contains("=")){
            let num1="";
            let num2="";
            let op="";
            let result = [];
            for(let i = 0;i<array.length;i++){
                console.log(concat);
                console.log(result);
                if(!isNaN(Number(array[i]))){
                    concat+=array[i];
                }
                else{
                    if(concat){
                        result.push(Number(concat));
                        concat="";
                    }
                    result.push(array[i]);
                }
            }
            if(concat){
                result.push(Number(concat));
            }
            
            for(let i=0;i<result.length;i++){
                if(!isNaN(Number(result[i]))){
                    if(num1===""){
                        num1=Number(result[i]);
                    }
                    else{
                        num2=Number(result[i]);
                        if(op){
                            number += operate(num1, op, num2);
                        }
                    }   
                }
                op = result[i];
            }
            while(screen.firstChild){
                screen.firstChild.remove();
            }

            span.innerText = String(number);
            screen.appendChild(span);
            num1="";
            num2="";
            op="";
            number=0;
        }
        else if (event.target.classList.contains("clear")){
            while(screen.firstChild){
                screen.firstChild.remove();
            }

            num1="";
            num2="";
            op="";
            number=0;
            array.splice(0,array.length);
        }

    });
});

//maybe i have it so that the data type for everything except
//clear, equals, delete push their string into the span

//and then if it is the equals button, we will use the
//filter method to filter the span for the first two numbers
//and operator, we will update the value in the string,
//and if there are more operations, we will carry them out after
//this will be done with a queue
//once equals is pressed it will take the entire string in span
//take the first number and operator, calculate it
//and update var number
//afterwards the result is put in the display