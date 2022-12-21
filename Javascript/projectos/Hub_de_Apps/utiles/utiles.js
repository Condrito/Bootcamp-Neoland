
const randomNumber= ()=>`${Math.floor(Math.random()*(180 - 60) + 60)}`;


const RandomColor=()=>`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;


const colorBackground=()=>{
  
    document.body.style.background= RandomColor()}



export const addEventColor=()=>{
    document.querySelector('#colormodeBtn').addEventListener("click",()=>{
        colorBackground()
        
    })
}    




    