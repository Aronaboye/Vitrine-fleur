const burger = document.querySelector(".burger")
const nav = document.querySelector("header div.nav")
burger.addEventListener("click",()=>{
    nav.classList.toggle("navToogle");
})
burger.addEventListener("click",() => {
    burger.classList.toggle("active")
})