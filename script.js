//VARIÁVEIS
let bar = document.querySelector("#bar");
let box = document.querySelector("#box");
let hamburger = document.querySelector(".hamburger");

view = 0;
//LISTENERS
bar.addEventListener("click",justOpen)
function justOpen() {
    if(view == 0) {
        view = 1;
        hamburger.style.transform = "translateX(0)";
        bar.style.background = "#fff";
        bar.style.color = "#009879";
    }else {
        view = 0;
        hamburger.style.transform = "translateX(100%)";
        bar.style.background = "#009879";
        bar.style.color = "#fff";
        }
}
const scrollToTop = ()=>{
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
};

document.querySelector("#up").onclick = scrollToTop;

/// input search
let lupa = document.querySelector(".fa-search");

lupa.addEventListener("click", ()=>{
   
   let inputValue = document.querySelector(".search").value;
   
   localStorage.setItem("keyWord", inputValue);
   resetaMemoria();
   
   window.location.href = "search.html";
});



function resetaMemoria() {
    localStorage.removeItem("relInicio");
    localStorage.removeItem("relFim");
    localStorage.removeItem("relPgIndex");
}
