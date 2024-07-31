const headingwrapper=document.getElementById("headingwrapper")
console.log(headingwrapper)
const heading5=document.createElement("h1")
heading5.textContent="Saxena"
console.log(heading5)
headingwrapper.appendChild(heading5)

console.log(headingwrapper)

//promises-producing and consuming
//producing
PREREQUISITE=["ATTENDANCE","JS","SELF STUDY"]
var MERNDEVELOPER= new Promise((resolve,reject)=>{
    if(
        PREREQUISITE.includes("ATTENDANCE") &&
        PREREQUISITE.includes("JS") &&
        PREREQUISITE.includes("SELF STUDY")
    )
    {
        resolve("Congrats!, You've got this")
    }
    else{
        reject("Try better next time")
    }
    
})
console.log(MERNDEVELOPER)
    
    //USING then and catch Only raw promise without format(consume kr rhe)
MERNDEVELOPER.then((response) => {
    console.log(response); //FULFILLED
    return "Prakhar"
})
.then((response)=>
{
    console.log(response);
    return  "8 Crore"
})
.then((response)=>
    {
        console.log(response);
        
    })
.catch((err) => {
    console.log(err);
});


//Fetch API
const url="https://jsonplaceholder.typicode.com/posts"

fetch('url')
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data); // Output the retrieved data
})
.catch(error => {
console.error('Error:', error);
});

//settimeout & setinterval (callback use stack to repeatedly check gec execute or not)


//lexical scoping



