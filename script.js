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
        add(num1,num2);
    }
    else if(op==="-"){
        return subtract(num1,num2);
    }
    else if(op==="*"){
        return multiply(num1,num2);
    }
    else{
        return divide(num1,num2);
    }
};

var number = 0;

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const span = document.createElement("span");
        let update = "";
        let array = [];
        if (event.target.dataset.type !== "secondary") {
            update += event.target.textContent;
            array.push(event.target.textContent); 
            span.innerText = update;
        }

        if(event.target.classList==="="){
            let first ="";
            while(span.innerText)
        }

        screen.appendChild(span);
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