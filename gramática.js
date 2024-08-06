//GRAMÁTICA PAGE 
let square1 = document.querySelector(".square1");
let square = document.querySelector("#squareLast");
let lastImgDiv = document.querySelector("#imgLast");
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
let lastPostName = '';
function lastPost() {
    let a = pageList.length - 1;
    
    while (a >= 0 && !pageList[a].path) {
        a--;
    }
        lastPostName = pageList[a].name;
        lastImgDiv.innerHTML = `<img src="${pageList[a].imgLink}" alt="${pageList[a].name}" loading="lazy" onclick="irProSite('${pageList[a].path}')">
                    <span id="tag">ÚLTIMO POST</span>`;
        squareLast.innerHTML +=`<span class="last"><a href="${pageList[a].path}">${pageList[a].name}</a></span>`;
    
}
lastPost();
function allPost() {
    for (let i = inicio; i <= fim; i++) {
        const pagePath = pageList[i].path;
        const isLocked = pagePath === "";
        const isLastPost = pageList[i].name === lastPostName;
        if(!isLastPost) {
            square1.innerHTML += `
        <div class="square ${isLocked ? 'locked' : ''}">
            <div class="img-last">
                <img src="${pageList[i].imgLink}" alt="${pageList[i].name}" loading="lazy" ${isLocked ? '' : `onclick="irProSite('${pagePath}')"`}>
            </div>
            <span class="last"><a href="${pagePath}">${pageList[i].name}</a></span>
            ${isLocked ? `
            <div class="overlay">
                <i class="fa fa-lock"></i>
                <span>A SER PUBLICADO</span>
            </div>` : ''}
        </div>`;
        }
    }    
}
allPost();

function irProSite(link) {
    window.location.href = link;
}

function setarMemoria(inicio,fim,pageIndex) {
    localStorage.setItem("inicio",inicio);
    localStorage.setItem("fim", fim);
    localStorage.setItem("pageIndex", pageIndex);
    console.log("setei")
}
function resetaMemoGram() {
    localStorage.removeItem("inicio");
    localStorage.removeItem("fim");
    localStorage.removeItem("pageIndex");
}

////
function mudarPagina() {
    paginationP.innerText = `Página ${pageIndex} de ${listLength}`;
}
mudarPagina();
