let divNumber;

if (window.innerWidth < 768) {
    divNumber = 2;
}else{
    divNumber = 6;
}

let squareGram = document.querySelector("#squareGram");
let squarePron = document.querySelector("#squarePron");


function criaDivGram() {
    
    for(let i = 0; i < divNumber; i++){
    
        squareGram.innerHTML += `
        <div class="square">
        <div class="img-last">
        <img src="${pageList[i].imgLink}" alt="">
        </div>
        <span id="last"><a href="${pageList[i].path}">${pageList[i].name}</a></span>
        </div>`;
    }
}

criaDivGram();

function criaDivPron() {
    
    for(let i = 0; i < divNumber; i++){
    
        squarePron.innerHTML += `
        <div class="square">
        <div class="img-last">
        <img src="${pronList[i].imgLink}" alt="">
        </div>
        <span id="last"><a href="${pronList[i].path}">${pronList[i].name}</a></span>
        </div>`;
    }
}

criaDivPron();