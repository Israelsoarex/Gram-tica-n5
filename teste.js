let mainDiv = document.querySelector("#main");
let vocabDiv = document.querySelector("#vocabDiv");
let iframeDiv = document.querySelector("#iframeDiv");
function destacar(frase) {
    let novaFrase = frase;
    let match;
    // Enquanto houver partículas entre colchetes na frase, substitua todas
    while ((match = novaFrase.match(/\[([^\]]+?)\]/))) {
        let particulaDestacada = match[1];
        novaFrase = novaFrase.replace(new RegExp(`\\[${particulaDestacada}\\]`, 'g'), `<span style="color: #f00;">${particulaDestacada}</span>`);
    }
    return novaFrase;
}
function criaFigura() {
for (i = 0; i <= estrutura.sentence.length-1; i++) {
let figure = document.createElement("figure");
let table = document.createElement("table");
let tBody = document.createElement("tbody");
let tRow1 = document.createElement("tr");
let tRow2 = document.createElement("tr");
let tRow3 = document.createElement("tr");
let tRow4 = document.createElement("tr");
let tData1 = document.createElement("td");
let tData2 = document.createElement("td");
let tData3 = document.createElement("td");
let tData4 = document.createElement("td");
let span = document.createElement("span");
let title = document.createElement("h3");

tData1.appendChild(span);
tRow1.appendChild(tData1);
tRow2.appendChild(tData2);
tRow3.appendChild(tData3);
tRow4.appendChild(tData4);
tBody.appendChild(tRow1);
tBody.appendChild(tRow2);
tBody.appendChild(tRow3);
tBody.appendChild(tRow4);
table.appendChild(tBody);
figure.appendChild(table);

tData1.innerHTML = `<span class="tdTitle" id="tdSen">${(i+1).toString().padStart(2,'0')}</span> ${destacar(estrutura.sentence[i])}`;
tData2.innerHTML = `<span class="tdTitle" id="tdRoma">Romaji</span> ${estrutura.romaji[i]}`;
tData3.innerHTML = `<span class="tdTitle" id="tdHira">Kana</span> ${estrutura.hiragana[i]}`;
tData4.innerHTML = `<span class="tdTitle" id="tdTrad">Tradução</span> ${estrutura.traducao[i]}`;

title.innerText = `Exemplo #${i+1}`;
mainDiv.appendChild(title);
mainDiv.appendChild(figure);

}
}

function criaVocab() {
   vocabDiv.innerHTML += `<h3 class="vocab">Vocabulário <span class="vocabSpan">単語</span></h3>`
   let tableVoc = document.createElement('table');
   let tHead = document.createElement('thead');
   tableVoc.appendChild(tHead);
   let tdVoc = document.createElement('td');
   tdVoc.innerText = "Vocabulário";
   let tdRead = document.createElement('td');
   tdRead.innerText = "Leitura";
   let tdMean = document.createElement('td');
   tdMean.innerText = "Significado";
   tHead.appendChild(tdVoc);
   tHead.appendChild(tdRead);
   tHead.appendChild(tdMean);
   tBody = document.createElement('tbody');
   tableVoc.appendChild(tBody);
   vocabDiv.appendChild(tableVoc);
    for (i = 0; i <= estrutura.vocabulario.length - 1 ; i++) {
        let trVoc = document.createElement('tr');
        let tdVoc = document.createElement('td');
        let tdRead = document.createElement('td');
        let tdMean = document.createElement('td');
        tdVoc.innerHTML = estrutura.vocabulario[i][0];
        tdRead.innerHTML = `${estrutura.vocabulario[i][1]}<br>${estrutura.vocabulario[i][2]}`;
        tdMean.innerHTML = estrutura.vocabulario[i][3];
        trVoc.appendChild(tdVoc);
        trVoc.appendChild(tdRead);
        trVoc.appendChild(tdMean);
        tBody.appendChild(trVoc);
    }
}

function criaIframe() {
    vdLink = estrutura.video.link;
    if(vdLink == "") {
        let frameSpan = document.createElement("div");
        frameSpan.id = "frameSpan";
        frameSpan.textContent = "VÍDEO EM BREVE !";
        iframeDiv.appendChild(frameSpan);
        iframeDiv.style.background = "#cccccc44";

function togglePause() {
    frameSpan.classList.toggle('pause');
}

frameSpan.addEventListener('animationiteration',togglePause);
    }
    
    var iframe = document.createElement('iframe');

iframe.setAttribute('src', estrutura.video.link);
iframe.setAttribute('title', estrutura.video.title);
iframe.setAttribute('frameborder', '0');
iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;');
iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
iframe.setAttribute('allowfullscreen','deny');
iframeDiv.appendChild(iframe);
}




