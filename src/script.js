const menuBtn = document.getElementById("menubar");
const closeBtn = document.getElementById("toggle");
const anchor = document.querySelectorAll("a");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  console.log("cliick")
  sidebar.classList.remove("-translate-x-full"); 
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full"); 
});
anchor.forEach((a)=>{
a.addEventListener("click",()=>{
sidebar.classList.add("-translate-x-full");
})
})

let scrollup = document.querySelector("#scrollup");
scrollup.addEventListener("click",()=>{
  console.log("working");
      window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

})