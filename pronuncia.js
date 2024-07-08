//GRAMÁTICA PAGE 
let square1 = document.querySelector(".square1");
let square = document.querySelector("#squareLast");
let lastImgDiv = document.querySelector("#imgLast");
let pgBack = document.querySelector("#pgBack");
let pgNext = document.querySelector("#pgNext");
let pgFirst = document.querySelector("#pgFirst");
let pgLast = document.querySelector("#pgLast");
let paginationP = document.querySelector("#paginationP");
let pronPgIndex;
let pronInicio;
let pronFim;
let listLength = Math.ceil(pronList.length/10);
let pageRest = pronList.length%10;
if (localStorage.getItem("pronInicio ") !== null) {
    pronInicio  = parseInt(localStorage.getItem("pronInicio "));
} else {
    pronInicio  = 0;
    localStorage.setItem("pronInicio ", pronInicio );
}

if (localStorage.getItem("pronFim") !== null) {
    pronFim = parseInt(localStorage.getItem("pronFim"));
} else {
   pronFim = 9;
   localStorage.setItem("pronFim", pronFim);
}

if(localStorage.getItem("pronPgIndex") !== null) {
    pronPgIndex = parseInt(localStorage.getItem("pronPgIndex"));
}else {
   pronPgIndex = 1;
   localStorage.setItem("pronPgIndex", pronPgIndex)
}

pgBack.addEventListener("click",()=>{
    if(pronPgIndex == listLength) {
        pronInicio  = pronList.length - (pageRest + 10);
        pronFim = pronList.length - pageRest-1;
        pronPgIndex --;
        setarMemoria(pronInicio ,pronFim, pronPgIndex);
    }else {
        if(pronPgIndex == 1) {
            location.reload()
        }else {
            pronInicio  -= 10;
            pronFim -= 10;
            pronPgIndex--;
            setarMemoria(pronInicio ,pronFim, pronPgIndex);
            location.reload();
        }
    }
});
pgNext.addEventListener("click",()=>{
    if(pronPgIndex == listLength-1) {
        pronFim = pronList.length-2;
        pronInicio  = pronList.length - (pageRest);
        console.log(pronInicio )
        pronPgIndex++;
        setarMemoria(pronInicio ,pronFim, pronPgIndex);
        location.reload();
    }else {
        if(pronPgIndex == listLength) {
            location.reload()
        }else {
            pronInicio  += 10;
            pronFim += 10
            pronPgIndex ++;
            setarMemoria(pronInicio ,pronFim, pronPgIndex);
            location.reload();
        }
    }
});
pgFirst.addEventListener("click",()=>{
    pronInicio  = 0;
    pronFim = 9;
    pronPgIndex = 1;
    setarMemoria(pronInicio ,pronFim, pronPgIndex);
    location.reload();
});
pgLast.addEventListener("click",()=>{
    pronInicio  = pronList.length - pageRest;
    pronFim = pronList.length - 2;
    pronPgIndex = listLength;
    setarMemoria(pronInicio ,pronFim, pronPgIndex);
    location.reload();
    console.log("tá setado");
});

function lastPost() {
    a = pronList.length - 1 ;
    lastImgDiv.innerHTML = `<img src="${pronList[a].imgLink}" alt="nada" loading="lazy" onclick="irProSite('${pronList[a].path}')">
                    <span id="tag">ÚLTIMO POST</span>`;
    squareLast.innerHTML +=`<span class="last"><a href="${pronList[a].path}">${pronList[a].name}</a></span>`;
}
lastPost();

function allPost() {
    
    for(let i = pronInicio ; i <= pronFim; i++){
    
        square1.innerHTML += `
        <div class="square">
        <div class="img-last">
        <img src="${pronList[i].imgLink}" alt="" loading="lazy" onclick="irProSite('${pronList[i].path}')">
        </div>
        <span class="last"><a href="${pronList[i].path}">${pronList[i].name}</a></span>
        </div>`;
    }
}
allPost();

function irProSite(link) {
    window.location.href = link;
}


function setarMemoria(pronInicio ,pronFim,pronPgIndex) {
    localStorage.setItem("pronInicio ",pronInicio );
    localStorage.setItem("pronFim", pronFim);
    localStorage.setItem("pronPgIndex", pronPgIndex);
    console.log("setei")
}
function resetaMemoPron() {
    localStorage.removeItem("pronInicio ");
    localStorage.removeItem("pronFim");
    localStorage.removeItem("pronPgIndex");
}

////
function mudarPagina() {
    paginationP.innerText = `Página ${pronPgIndex} de ${listLength}`;
}
mudarPagina();

