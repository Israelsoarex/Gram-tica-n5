let divNumber;

if (window.innerWidth < 768) {
    divNumber = 2;
}else{
    divNumber = 6;
}

let squareGram = document.querySelector("#squareGram");
let squarePron = document.querySelector("#squarePron");
let squareRec = document.querySelector("#squareRec");
let gramBtn = document.querySelector("#gramBtn");
let pronBtn = document.querySelector("#pronBtn");
let recBtn = document.querySelector("#recBtn");


function criaDivGram() {
    
    for(let i = 0; i < divNumber; i++){
        const pagePath = pageList[i].path;
        const isLocked = pagePath === "";
        squareGram.innerHTML += `
       <div class="square ${isLocked ? 'locked' : ''}">
        <div class="img-last">
        <img src="${pageList[i].imgLink}" alt="${pageList[i].name}" loading="lazy" ${isLocked ? '' : `onclick="irProSite('${pagePath}')"`}>
        </div>
        <span class="last"><a href="${pageList[i].path}">${pageList[i].name}</a></span>
        ${isLocked ? `
            <div class="overlay">
                <i class="fa fa-lock"></i>
                <span>A SER PUBLICADO</span>
            </div>` : ''}
        </div>`;
    }
}

criaDivGram();

function criaDivPron() {
    
    for(let i = 0; i < divNumber; i++){
        const pagePath = pronList[i].path;
        const isLocked = pagePath === "";
        squarePron.innerHTML += `
        <div class="square ${isLocked ? 'locked' : ''}">
        <div class="img-last">
        <img src="${pronList[i].imgLink}" alt="" loading="lazy" ${isLocked ? '' : `onclick="irProSite('${pagePath}')"`}>
        </div>
        <span class="last"><a href="${pronList[i].path}">${pronList[i].name}</a></span>
        ${isLocked ? `
            <div class="overlay">
                <i class="fa fa-lock"></i>
                <span>A SER PUBLICADO</span>
            </div>` : ''}
        </div>`;
    }
}

criaDivPron();

function criaDivRec() {
    
    for(let i = 0; i < divNumber; i++){
        const pagePath = recList[i].path;
        const isLocked = pagePath === "";
        squareRec.innerHTML += `
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

criaDivRec();

function irProSite(link) {
    window.location.href = link;
}

gramBtn.addEventListener("click", ()=>{
    window.location.href = "Gramática.html";
});
pronBtn.addEventListener("click", ()=>{
    window.location.href = "pronuncia.html";
});
recBtn.addEventListener("click", ()=>{
    window.location.href = "recursos.html";
});

