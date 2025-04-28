let chatIcon = document.querySelector(".chat-click");
let chatForm = document.querySelector(".chat-container-form");
let chatLinks = document.querySelector(".chat-links");

    chatIcon.addEventListener("click",(e) => {
e.preventDefault();
        chatLinks.style.display = "none";
        chatForm.classList.add("show");
    })

 let crossIcon = document.querySelector(".cross-icon i");
 
 crossIcon.addEventListener("click",(e) => {
    e.preventDefault();
    chatLinks.style.display = "block";
    chatForm.classList.remove("show");
 })
