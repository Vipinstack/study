
//1.global scope.
//2.block scope.
//3.function scope.
//4.this scope.
//5.lexical scope(static scope).


var globalVar = 'Vipin chauhan'; // global scope any where access in your file.

if(true){ //block scope write in {} always yeah bar access nahi ho sakhte.
    let firstName = 'Vipin';
    const lastName = 'Chauhan';
    console.log('firstName :', firstName + "lastName : ",lastName);
}
// console.log(firstName,lastName);

function fnScope(){  //yeah function scope hai eska variable outside access nahi hai..   
    var fnScopVarb = 'not access outside function';
    console.log(fnScopVarb);
}
// console.log(fnScopVarb);
fnScope();

const person ={ // 'this' refers to the person object
    first_name:'Vipin',
    second_name:'Chauhan',
    scope: function innFn(){
        let var2 = 'yeah this funtion var hai!!'; 
        console.log(this.first_name);
        console.log(this.second_name);
    }
}
// console.log(var2);

function outSideFun(){ // yeah lexical scope hai jo inner fn apne parent k properties or variable access kar sakhta hai
    let a=20;
    let b=20;
    function innerFn() {
        console.log(a,b); 
    }
    innerFn();
}
outSideFun();

console.log(globalVar);
