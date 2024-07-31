// console.log(document.getElementById("heading1"))
var heading1=document.getElementById("heading1") //only element
heading1.textContent="Prakhar Saxena" //dir,textContent
heading1.style.color="orange"

//query selector (id and class both differ by # and .)
const heading2= document.querySelector("#heading2")
console.log(heading2)
heading2.setAttribute("bc","dc")
console.log(heading2.getAttribute("h1"))

//getElementByClassName

const heading3=document.getElementsByClassName("heading1")
console.log(heading3)

//innerHTML
const H1Elements=document.getElementById("h1Elements")
// console.log(H1Elements.innerHTML)
H1Elements.innerHTML=H1Elements.innerHTML+"<h1>Prakhar2</h1>"

//traversing DOM
const doc= document.getRootNode()
// console.log(doc)
const docChildnodes=doc.childNodes
console.log(docChildnodes)
const html=docChildnodes[1]
const head=html.childNodes[0]
const body=html.childNodes[2]
const headChildnodes=head.childNodes
const bodyChildnodes=body.childNodes
console.log(headChildnodes,bodyChildnodes)

//toggle()


