   const hamburger = document.querySelector(".ham");
    const navlinks = document.querySelector("ul");
    hamburger.addEventListener("click",()=>{
        navlinks.classList.toggle("slide");
    });
