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
    
        squareGram.innerHTML += `
       <div class="square">
        <div class="img-last">
        <img src="${pageList[i].imgLink}" alt="${pageList[i].name}" loading="lazy" onclick="irProSite('${pageList[i].path}')">
        </div>
        <span class="last"><a href="${pageList[i].path}">${pageList[i].name}</a></span>
        </div>`;
    }
}

criaDivGram();

function criaDivPron() {
    
    for(let i = 0; i < divNumber; i++){
    
        squarePron.innerHTML += `
        <div class="square">
        <div class="img-last">
        <img src="${pronList[i].imgLink}" alt="" loading="lazy" onclick="irProSite('${pronList[i].path}')">
        </div>
        <span class="last"><a href="${pronList[i].path}">${pronList[i].name}</a></span>
        </div>`;
    }
}

criaDivPron();

function criaDivRec() {
    
    for(let i = 0; i < divNumber; i++){
    
        squareRec.innerHTML += `
        <div class="square">
        <div class="img-last">
        <img src="${recList[i].imgLink}" alt="" loading="lazy" onclick="irProSite('${recList[i].path}')">
        </div>
        <span class="last"><a href="${recList[i].path}">${recList[i].name}</a></span>
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

