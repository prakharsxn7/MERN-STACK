//Refrence Datatype=>array,object
//Array
var items = [1,'a',null,undefined,NaN,true,false, function greet(){
    console.log("Hello")
}
]
console.log(items[7]())

//push pop shift unshift

var a= ['a','b','c']
console.log(a)

a.push(1)
console.log(a)

a.pop(1)
console.log(a)
//function return value 1

var shift=a.shift()
console.log(a)
console.log(shift)

a.unshift("Prakhar")

console.log(a)

//accessing elements of an array 

var arr=['a','b','c','d','e']
var arr2=[]
for(var i =0;i<arr.length;i++)
{
    console.log(arr[i])
    arr2.push(arr[i].toUpperCase())
    

}
console.log(arr2)


//primitive and non-primitive

var arrr=[1,2,3,4,5]
//var copy=arrr
var copy=[...arrr]
arrr.pop()
console.log(arrr,copy)//both got changed stored in heap

//soln SPREAD OPERATOR(given by echma script)


//destructuring

//problem stmt
// const ar3=['pao bhaji','kulche','paneer','chole kulche']
// const favfood=ar3[0]
// const favfood2=ar3[1]

//soln
const ar3=['pao bhaji','kulche','paneer','chole kulche']
var[favfood , ,favfood2]=ar3
console.log(favfood,favfood2)


const numbers=[1,2,3,4,5,6,7]
for(var number of numbers)// for in for index
{
    console.log(number*2)
}
//------Objects-------

//. notation and bracket notation []
var aboutMe= {
    name:"Prakhar",
    age:22,
    location:"Kanpur",
    ['marital status']:"single"
    ['educational details']={
        ['recently pursuing']:'Btech',
        passed_out:false,

    }

}
console.log(aboutMe.passed_out)

//copy in object
var copyy ={...aboutMe,lname:'Saxena'}

console.log(aboutMe)
console.log(copyy)

//destructuring

var {name,salary=50000}= copyy
console.log(copyy)
console.log(name,salary)






