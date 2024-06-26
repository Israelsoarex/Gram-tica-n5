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
function buscar() {
    let inputValue = document.querySelector(".search").value;
    
    if (inputValue.trim() !== '') {
        localStorage.setItem("keyWord", inputValue);
        resetaMemoria();
        window.location.href = "search.html";
    }
}


let lupa = document.querySelector(".fa-search");
lupa.addEventListener("click", () => {
    buscar();
});

let campoBusca = document.querySelector(".search");
campoBusca.addEventListener("keypress", (e) => {
    
    if (e.key === 'Enter') {
        buscar();
    }
});

function resetaMemoria() {
    localStorage.removeItem("relInicio");
    localStorage.removeItem("relFim");
    localStorage.removeItem("relPgIndex");
}
