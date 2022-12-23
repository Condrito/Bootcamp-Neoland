
const randomNumber= ()=>`${Math.floor(Math.random()*(180 - 60) + 60)}`;
const RandomColor=()=>`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
const colorBackground=()=>{
    document.body.style.background= RandomColor()}

export const addEventColor=()=>{
    document.querySelector('#colormodeBtn').addEventListener("click",()=>{
        colorBackground()
        
    })
}    


export const activeLogoutBtn =()=>{
    
    let logoutBtn = document.querySelector('#logoutBtn')
localStorage.getItem("user")
 ? (logoutBtn.style.display = 'block') 
 : (logoutBtn.style.display = 'none');
                
       
}



export const mantenerSaludo=()=>{
    let username2 = localStorage.getItem("user")
document.querySelector("#saludo").innerHTML=`
${username2}
`

}