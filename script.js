const symbol = document.querySelector(".symbol");
const navlinks = document.querySelector("ul"); 
symbol.addEventListener("click",()=>{
navlinks.classList.toggle("nav");
});
function join(){
    alert("Congradulations you have joined as a member of the Church . Stay Blessed");
}
function contact(){
    alert("Your message have been sent to the officials . Stay tuned for their reply");
}
