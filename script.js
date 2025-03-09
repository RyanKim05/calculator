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
let array = [];
let num1="";
let num2="";
let op = "";
let nextPress = false;
let first = true;

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const span = document.createElement("span");
        let update = "";
        if(nextPress){
            while(screen.firstChild){
                screen.firstChild.remove();
            }
            num1="";
            num2="";
            op="";
            nextPress=false;
            number=0;
            array = [];
            result = [];
        }
        if (event.target.dataset.type !== "secondary") {
            update += event.target.textContent;
            span.innerText = update;
            array.push(update);
            if(isNaN(Number(event.target.textContent))){
                if(op!==event.target.textContent){
                    if(!first){
                        screen.lastChild.remove();
                    }
                    first = false;
                    screen.appendChild(span);
                    op=event.target.textContent;
                }
            }
            else{
                screen.appendChild(span);
                first = true;
                op="";
            }
        }

        if(event.target.classList.contains("equal")){
            let num1="";
            let num2="";
            let op="";
            let result = [];
            let concat="";
            for(let i = 0;i<array.length;i++){
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
                        if(i!=result.length){
                            num1=0;
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
            nextPress=true;
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