// this is for the DOM selelctors 
let numbers= document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")
let currentOperand = document.querySelector('.current-operand')
let equal = document.querySelector('.equal')
let clear = document.querySelector('.clear')

//this are some variables needed
let first = ''
let store = ''
let clickedOperator = ''
let result = ''


//this is for the first number that is being stored
currentOperand.textContent = 0
numbers.forEach((number)=> {
    number.addEventListener('click', function(){
        store += number.textContent
        currentOperand.textContent = store
    })
})

//this is for the operators the are being clicked
operators.forEach((operator) =>{
    operator.addEventListener('click' ,function(){
        first = store
        store = ''
        currentOperand.textContent = 0
        clickedOperator = operator.textContent
    })
})
//this is for the equal sign that gives us the answer
equal.addEventListener('click', function(){
    if (clickedOperator === '/' && store === 0){
        result = "Error"
    }
    else{
    result = operate(parseFloat(first),parseFloat(store),clickedOperator)
    result = Math.round(result)
    currentOperand.textContent = result
    store = result
    }
})
console.log(result)
//this is to clear all the input that has been entered
clear.addEventListener('click',function(){
    currentOperand.textContent = ''
    first = ''
    store = ''
})

//this is for  the operation 
function add(x,y) {
    let result = x + y
    return result
}
function subtract (x,y){
    let result = x - y
    return result
}
function multiply (x,y){
    let result = x * y
    return result
}
function divide(x,y){
    let result = x / y
    return result 
}


//this is for the calclulation finishs
function operate (first,second,opp) {
   /* let first = Number(promt("what is the first number"))
    *let opp = promt("what is the operator")
    *let second = Number(promt("what is the second number"))
    */
    switch(opp){
        case '+':
            return(add(first,second))
            break;
        case '-':
            return(subtract(first,second))
            break;
        case '*':
            return(multiply(first,second))
            break;
        case '/':
            return(divide(first,second))
            break;
        
    }

    }
// commit
