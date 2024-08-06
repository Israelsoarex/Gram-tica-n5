//GRAMÁTICA PAGE 
let square1 = document.querySelector(".square1");
let square = document.querySelector("#squareLast");
let lastImgDiv = document.querySelector("#imgLast");
let pgBack = document.querySelector("#pgBack");
let pgNext = document.querySelector("#pgNext");
let pgFirst = document.querySelector("#pgFirst");
let pgLast = document.querySelector("#pgLast");
let paginationP = document.querySelector("#paginationP");
let recPgIndex;
let recInicio;
let recFim;
let listLength = Math.ceil(recList.length/10);
let pageRest = recList.length%10;
if (localStorage.getItem("recInicio") !== null) {
    recInicio  = parseInt(localStorage.getItem("recInicio"));
} else {
    recInicio  = 0;
    localStorage.setItem("recInicio", recInicio );
}

if (localStorage.getItem("recFim") !== null) {
    recFim = parseInt(localStorage.getItem("recFim"));
} else {
   recFim = 9;
   localStorage.setItem("recFim", recFim);
}

if(localStorage.getItem("recPgIndex") !== null) {
    recPgIndex = parseInt(localStorage.getItem("recPgIndex"));
}else {
   recPgIndex = 1;
   localStorage.setItem("recPgIndex", recPgIndex)
}

pgBack.addEventListener("click",()=>{
    if(recPgIndex == listLength) {
        recInicio  = recList.length - (pageRest + 10);
        recFim = recList.length - pageRest-1;
        recPgIndex --;
        setarMemoria(recInicio ,recFim, recPgIndex);
    }else {
        if(recPgIndex == 1) {
            location.reload()
        }else {
            recInicio  -= 10;
            recFim -= 10;
            recPgIndex--;
            setarMemoria(recInicio ,recFim, recPgIndex);
            location.reload();
        }
    }
});
pgNext.addEventListener("click",()=>{
    if(recPgIndex == listLength-1) {
        recFim = recList.length-2;
        recInicio  = recList.length - (pageRest);
        console.log(recInicio )
        recPgIndex++;
        setarMemoria(recInicio ,recFim, recPgIndex);
        location.reload();
    }else {
        if(recPgIndex == listLength) {
            location.reload()
        }else {
            recInicio  += 10;
            recFim += 10
            recPgIndex ++;
            setarMemoria(recInicio ,recFim, recPgIndex);
            location.reload();
        }
    }
});
pgFirst.addEventListener("click",()=>{
    recInicio  = 0;
    recFim = 9;
    recPgIndex = 1;
    setarMemoria(recInicio ,recFim, recPgIndex);
    location.reload();
});
pgLast.addEventListener("click",()=>{
    recInicio  = recList.length - pageRest;
    recFim = recList.length - 2;
    recPgIndex = listLength;
    setarMemoria(recInicio ,recFim, recPgIndex);
    location.reload();
    console.log("tá setado");
});
let lastPostName = '';
function lastPost() {
    a = recList.length - 1 ;
    while (a >= 0 && !recList[a].path) {
        a--;
    }
    lastPostName = recList[a].name;
    lastImgDiv.innerHTML = `<img src="${recList[a].imgLink}" alt="nada" loading="lazy" onclick="irProSite('${recList[a].path}')">
                    <span id="tag">ÚLTIMO POST</span>`;
    squareLast.innerHTML +=`<span class="last"><a href="${recList[a].path}">${recList[a].name}</a></span>`;
}
lastPost();

function allPost() {
    
    for(let i = recInicio ; i <= recFim; i++){
        const pagePath = recList[i].path;
        const isLocked = pagePath === "";
        const isLastPost = recList[i].name === lastPostName;
        if(!isLastPost) {
            square1.innerHTML += `
        <div class="square ${isLocked ? 'locked' : ''}">
        <div class="img-last">
        <img src="${recList[i].imgLink}" alt="" loading="lazy" ${isLocked ? '' : `onclick="irProSite('${pagePath}')"`}>
        </div>
        <span class="last"><a href="${recList[i].path}">${recList[i].name}</a></span>
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


function setarMemoria(recInicio ,recFim,recPgIndex) {
    localStorage.setItem("recInicio",recInicio);
    localStorage.setItem("recFim", recFim);
    localStorage.setItem("recPgIndex", recPgIndex);
    console.log("setei")
}
function resetaMemoRec() {
    localStorage.removeItem("recInicio");
    localStorage.removeItem("recFim");
    localStorage.removeItem("recPgIndex");
}

////
function mudarPagina() {
    paginationP.innerText = `Página ${recPgIndex} de ${listLength}`;
}
mudarPagina();

