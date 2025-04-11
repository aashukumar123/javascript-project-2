const aashu =document.querySelector(".Green")
aashu.addEventListener("click",()=>{
    document.body.style.backgroundColor = "Green"
})

const vicky =document.querySelector(".Red")
vicky.addEventListener("click",()=>{
    document.body.style.backgroundColor = "Red"
})

const sunny =document.querySelector(".Blue")
sunny.addEventListener("click",()=>{
    document.body.style.backgroundColor = "Blue"
})
const An =document.querySelector(".Random")
An.addEventListener("click",()=>{
    document.body.style.backgroundColor = `
    rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
    )`
})