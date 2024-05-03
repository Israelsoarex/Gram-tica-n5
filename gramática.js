//GRAMÁTICA PAGE 
let square1 = document.querySelector(".square1");
let square = document.querySelector("#squareLast");
let pgBack = document.querySelector("#pgBack");
let pgNext = document.querySelector("#pgNext");
let pgFirst = document.querySelector("#pgFirst");
let pgLast = document.querySelector("#pgLast");
let paginationP = document.querySelector("#paginationP");
let pageIndex;
let inicio;
let fim;
let listLength = Math.ceil(pageList.length/10);
let pageRest = pageList.length%10;
if (localStorage.getItem("inicio") !== null) {
    inicio = parseInt(localStorage.getItem("inicio"));
} else {
    inicio = 0;
    localStorage.setItem("inicio", inicio);
}

if (localStorage.getItem("fim") !== null) {
    fim = parseInt(localStorage.getItem("fim"));
} else {
   fim = 9;
   localStorage.setItem("fim", fim);
}

if(localStorage.getItem("pageIndex") !== null) {
    pageIndex = parseInt(localStorage.getItem("pageIndex"));
}else {
   pageIndex = 1;
   localStorage.setItem("pageIndex", pageIndex)
}

pgBack.addEventListener("click",()=>{
    if(pageIndex == listLength) {
        inicio = pageList.length - (pageRest + 10);
        fim = pageList.length - pageRest-1;
        pageIndex --;
        setarMemoria(inicio,fim, pageIndex);
    }else {
        if(pageIndex == 1) {
            location.reload()
        }else {
            inicio -= 10;
            fim -= 10;
            pageIndex--;
            setarMemoria(inicio,fim, pageIndex);
            location.reload();
        }
    }
});
pgNext.addEventListener("click",()=>{
    if(pageIndex == listLength-1) {
        fim = pageList.length-2;
        inicio = pageList.length - (pageRest);
        console.log(inicio)
        pageIndex++;
        setarMemoria(inicio,fim, pageIndex);
        location.reload();
    }else {
        if(pageIndex == listLength) {
            location.reload()
        }else {
            inicio += 10;
            fim += 10
            pageIndex ++;
            setarMemoria(inicio,fim, pageIndex);
            location.reload();
        }
    }
});
pgFirst.addEventListener("click",()=>{
    inicio = 0;
    fim = 9;
    pageIndex = 1;
    setarMemoria(inicio,fim, pageIndex);
    location.reload();
});
pgLast.addEventListener("click",()=>{
    inicio = pageList.length - pageRest;
    fim = pageList.length - 2;
    pageIndex = listLength;
    setarMemoria(inicio,fim, pageIndex);
    location.reload();
    console.log("tá setado");
});

function allPost() {
    
    for(let i = inicio; i <= fim; i++){
    
        square1.innerHTML += `
        <div class="square">
        <div class="img-last">
        <img src="${pageList[i].imgLink}" alt="${pageList[i].name}" loading="lazy">
        </div>
        <span id="last"><a href="${pageList[i].path}">${pageList[i].name}</a></span>
        </div>`;
    }
}
allPost();

function lastPost() {
    a = pageList.length - 1 ;
    squareLast.innerHTML +=`<span id="last"><a href="${pageList[a].path}">${pageList[a].name}</a></span>`;
}
lastPost();

function setarMemoria(inicio,fim,pageIndex) {
    localStorage.setItem("inicio",inicio);
    localStorage.setItem("fim", fim);
    localStorage.setItem("pageIndex", pageIndex);
    console.log("setei")
}
function resetaMemoria() {
    localStorage.removeItem("inicio");
    localStorage.removeItem("fim");
    localStorage.removeItem("pageIndex");
}

////
function mudarPagina() {
    paginationP.innerText = `Página ${pageIndex} de ${listLength}`;
}
mudarPagina();
