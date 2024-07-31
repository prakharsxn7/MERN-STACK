//----Callbacks()---- using foreach and for of methods
const arr =[1,2,3,4,5,6,7,8,9,10] //M2
function mulby2(a,b,c)
{
    console.log(c) //org array
    console.log(b) //index
    console.log(a*2) //desired element
}
arr.forEach(mulby2) //for loop and function call done by it....it is a higher order fn

// for(var element of arr)
// {
//    // console.log(element*2)
// mulby2(element)
// }

// function inside function and have ability to call itself=> callback fn(hai bt higher order nhi)


// function greet(name,functioncall)
// {
//     console.log("hello"+name)
// }
// function greet2(){
//     console.log("Good Morning")
// }
// greet("Prakhar",()=>{
//     console.log("hello")
// })

const arr1 =[1,2,3,4,5,6,7,8,9,10] //M3
var arrrloop=arr1.forEach((item) => {
    console.log(item*7)//ye data show kr rha tha
    console.log(arrrloop) //didnt return anything
})

//map method()----return transformed array without changing original array

var dataloop=arr1.map((item=>item*7))//it return data in form of array
console.log(dataloop)


//filter  method()----filter out specific elements from array
var dataloop=arr1.filter((item)=>item>3)//it return data in form of array after filtering out
console.log(dataloop)

//reduce method()-----(callback(accumulator[iterator/initialisation],current value),number)
//

var dataloop=arr1.reduce((accumulator,item)=>{ return accumulator+item},0)//it return data after reducing it by summation
console.log(dataloop)


//sort---callback(a,b) is possible we write callback in number but not in string sorting due to ascii values

const person = { name: "Alice", age: 30 };


console.log(person)
 // const sort = data.sort((a, b) => b.price - a.price);
  // console.log(sort);




//find
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);

console.log(found);







//splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];

  //At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits);



