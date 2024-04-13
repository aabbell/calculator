
const one = document.querySelector(".one");
let value = 0
one.addEventListener('click',function(){
   value = 1
   console.log(value)
})

function add( x , y) {
    x = 5
    y = 3
    let result = x + y
    return result
}


function subtract (){
    let x = 0
    let y = 0
    let result = x + y
    return result
}

function multiply (){
    let x = 0
    let y = 0
    let result = x * y
    return result
}

function divide(){
    let x = 0
    let y = 0
    let result = x / y
    return result 
}

function operate () {
    add ()
    subtract()
    multiply()
    divide()
}