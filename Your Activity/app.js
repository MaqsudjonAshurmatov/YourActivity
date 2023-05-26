let counter = 0;

myFunction = () =>{
    counter++
    if(counter == 88){
        counter = 87;
        counter = counter
    }
    document.querySelector('.kcal-inner').style.background = `conic-gradient(#27E1AE ${counter}%, #1B2A33 0%)`; 
}
setInterval(myFunction, 5)

let counterTwo = 0;

myFunctionTwo = () =>{
    counterTwo++
    if(counterTwo == 71){
        counterTwo = 70;
        counterTwo = counterTwo;
    }
    document.querySelector('.steps-inner').style.background = `conic-gradient(aqua ${counterTwo}%, #1B2A33 0%)`; 
}
setInterval(myFunctionTwo, 5)

let counterThree = 0;

myFunctionThree = () =>{
    counterThree++
    if(counterThree == 41){
        counterThree = 40;
        counterThree = counterThree;
    }
    document.querySelector('.km-inner').style.background = `conic-gradient(aqua ${counterThree}%, #1B2A33 0%)`; 
}
setInterval(myFunctionThree, 5)