// if(9<8)
//     {
//         console.log("True")
    
//     }
//     else
//     {
//         console.log("False")
    
//     }

// if(9>8){
//     console.log("hello frm if")
// }    
// else if(9>8){
//     console.log("HELLO FRM ELSE")

// }
// else{
//     console.log("HELLO FRM ELSE")
// }
//Truthy=> and Falsy=>
//In condition stmt if truthy is present then condition will be true and implement operation inside it  





//and(&&) or(||) short circuiting

// var a="5"
// console.log(typeof (a))
// console.log(typeof (+a)) //convert string to number

// //for loop

// for(var i=1;i<=100;i++)
// {
//     console.log(i)
// }
// //while and do while loop

var j=0
while(j<=10)
{    

    console.log(j)
    j++
}

var k=0
do{
    console.log(k)
}
while(false);

// //Function => (i)Function declaration
//               (ii)Function expression
//               (ii)Arrow Function (echma script version7)

//Function declaration

function GreetSlave(name){
    console.log(`Good morning ${name}`)
}

GreetSlave("Prakhar")//it will implemented reason will be shared soon(hoisting)

//Function Expression (difference b/w exp and dec is hoisting)

const greet2=function (name){
    console.log(`Good afternoon ${name}`)
}

greet2("Prakhar") //if it is written above fn then show error line by line implementation

//Arrow Function(same behaviour as fn expression)

const greet3= (name)=>{
    console.log(`Good evening ${name}`)
}

greet3("Prakhar")

//

function GreetSlav(name,func){
    fn2()
    console.log(`Good morning ${name}`)
return true    
}

console.log(GreetSlav("Prakhar",fn2))

function fn2()
{
    console.log("Hello")
}


//default parameter/arguements



