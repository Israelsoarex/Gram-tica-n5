//VARIÁVEIS
let bar = document.querySelector("#bar");
let box = document.querySelector("#box");
let hamburger = document.querySelector(".hamburger");
let gramLi = document.querySelector(".hamburger ul#ul li:nth-child(1)");
let pronLi = document.querySelector(".hamburger ul#ul li:nth-child(2)");
let recLi = document.querySelector(".hamburger ul#ul li:nth-child(3)");
gramLi.addEventListener("click",()=>{
     resetaMemoGram();
});
pronLi.addEventListener("click",()=>{
     resetaMemoPron();
});
recLi.addEventListener("click",()=>{
     resetaMemoRec();
});

view = 0;
//LISTENERS
bar.addEventListener("click",justOpen)
function justOpen() {
    if(view == 0) {
        view = 1;
        hamburger.style.transform = "translateX(0)";
        bar.style.background = "#fff";
        bar.style.color = "var(--main-color)";
    }else {
        view = 0;
        hamburger.style.transform = "translateX(100%)";
        bar.style.background = "var(--main-color)";
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
let nivel = 0;

/// input search
function buscar() {
    let inputValue = document.querySelector(".search").value;
    
    if (inputValue.trim() !== '') {
        localStorage.setItem("keyWord", inputValue);
        resetaMemoria();
        if(nivel == 0) {
            window.location.href = "search.html";
        }else {
            window.location.href = "../search.html";
        }
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
function resetaMemoGram() {
    localStorage.removeItem("inicio");
    localStorage.removeItem("fim");
    localStorage.removeItem("pageIndex");
}
function resetaMemoPron() {
    localStorage.removeItem("pronInicio ");
    localStorage.removeItem("pronFim");
    localStorage.removeItem("pronPgIndex");
}
function resetaMemoRec() {
    localStorage.removeItem("recInicio");
    localStorage.removeItem("recFim");
    localStorage.removeItem("recPgIndex");
}

let needAlert = true;

