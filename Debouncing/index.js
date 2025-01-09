// implemnetation of debounce function
// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, 
// keeping the performance of the web page.
// debouncing ek aise technique hai jisme ek function ko tabhi call karte hai jab kuch time 
// interval delay set kar deta hai.

let counter = 0;
function demo(){
    console.log('debounce function called', counter++);
}

function debounce(func, delay){
    let timer;
    if(timer) return clearInterval(timer);
    return function(...arg){
        console.log(arg)
        setTimeout(()=>{
            func();
        },delay);
    }
}

const enhancedFunction = debounce(demo, 10000);
enhancedFunction(5);