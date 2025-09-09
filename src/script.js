  const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("-translate-x-full"); // hides
      menu.classList.toggle("translate-x-0");     // shows
    });
     
    const logo = document.getElementById("logo");

