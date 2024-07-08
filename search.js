// Obtém a palavra-chave do localStorage
let keyWord = localStorage.getItem("keyWord");

// Função para remover pontuação e sinais diacríticos de uma string
function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para filtrar os arrays e retornar um novo array com itens relacionados à palavra-chave
function filterArrays(keyword) {
    // Remove os sinais diacríticos da palavra-chave
    keyword = removeDiacritics(keyword);

    // Filtra o array pageList
    let filteredPageList = pageList.filter(item => removeDiacritics(item.name.toLowerCase()).includes(keyword.toLowerCase()));

    // Filtra o array pronList
    let filteredPronList = pronList.filter(item => removeDiacritics(item.name.toLowerCase()).includes(keyword.toLowerCase()));
    
    let filteredRecList = recList.filter(item => removeDiacritics(item.name.toLowerCase()).includes(keyword.toLowerCase()));

    // Retorna um novo array com os itens filtrados
    return [...filteredPageList, ...filteredPronList,...filteredRecList];
}

// Chama a função e armazena o resultado em uma variável
let relatedItems = filterArrays(keyWord);

// Exibe os itens relacionados


for (i = 0; i < relatedItems.length ; i++) {
    console.log(relatedItems[i].name);
}



//GRAMÁTICA PAGE 
let square1 = document.querySelector(".square1");
let square = document.querySelector("#squareLast");
let pgBack = document.querySelector("#pgBack");
let pgNext = document.querySelector("#pgNext");
let pgFirst = document.querySelector("#pgFirst");
let pgLast = document.querySelector("#pgLast");
let paginationP = document.querySelector("#paginationP");
let lastImgDiv = document.querySelector("#imgLast");
let relPgIndex;
let relInicio;
let relFim;
let listLength = Math.ceil(relatedItems.length/10);
let pageRest = relatedItems.length%10;
if (localStorage.getItem("relInicio ") !== null) {
    relInicio  = parseInt(localStorage.getItem("relInicio "));
} else {
    relInicio  = 0;
    localStorage.setItem("relInicio ", relInicio );
}

if (localStorage.getItem("relFim") !== null) {
    relFim = parseInt(localStorage.getItem("relFim"));
} else {
   relFim = 9;
   if(listLength == 1) {
       relFim = relatedItems.length-1;
   }
   localStorage.setItem("relFim", relFim);
}

if(localStorage.getItem("relPgIndex") !== null) {
    relPgIndex = parseInt(localStorage.getItem("relPgIndex"));
}else {
   relPgIndex = 1;
   localStorage.setItem("relPgIndex", relPgIndex)
}


function mudarPagina() {
    paginationP.innerText = `Página ${relPgIndex} de ${listLength}`;
}
mudarPagina();


pgBack.addEventListener("click",()=>{
    if(listLength==1) {
       return
    }
    
    if(relPgIndex == listLength) {
        relInicio  = relatedItems.length - (pageRest + 10);
        relFim = relatedItems.length - pageRest-1;
        relPgIndex --;
        setarMemoria(relInicio ,relFim, relPgIndex);
    }else {
        if(relPgIndex == 1) {
            location.reload();
        }else {
            relInicio  -= 10;
            relFim -= 10;
            relPgIndex--;
            setarMemoria(relInicio ,relFim, relPgIndex);
            location.reload();
        }
    }
});
pgNext.addEventListener("click",()=>{
    if(listLength==1) {
       return
    }
    if(relPgIndex == listLength-1) {
        relFim = relatedItems.length-2;
        relInicio  = relatedItems.length - (pageRest);
        console.log(relInicio )
        relPgIndex++;
        setarMemoria(relInicio ,relFim, relPgIndex);
        location.reload();
    }else {
        if(relPgIndex == listLength) {
            location.reload()
        }else {
            relInicio  += 10;
            relFim += 10
            relPgIndex ++;
            setarMemoria(relInicio ,relFim, relPgIndex);
            location.reload();
        }
    }
});
pgFirst.addEventListener("click",()=>{
    if(listLength==1) {
       return
    }
    relInicio  = 0;
    relFim = 9;
   if(listLength == 1) {
       relFim = relatedItems.length-1;
   }
    relPgIndex = 1;
    setarMemoria(relInicio ,relFim, relPgIndex);
    location.reload();
});
pgLast.addEventListener("click",()=>{
    if(listLength==1) {
       return
    }
    relInicio  = relatedItems.length - pageRest;
    relFim = relatedItems.length - 2;
    relPgIndex = listLength;
    setarMemoria(relInicio ,relFim, relPgIndex);
    location.reload();
    console.log("tá setado");
});

function lastPost() {
    if(relatedItems.length == 0) {
        return
    }
    a = relatedItems.length - 1 ;
    lastImgDiv.innerHTML =`
    <img src="${relatedItems[a].imgLink}" alt="${relatedItems[a].name}" loading="lazy" onclick="irProSite('${relatedItems[a].path}')">
                    <span id="tag">ÚLTIMO POST</span>`;
     squareLast.innerHTML +=`<span class="last"><a href="${relatedItems[a].path}">${relatedItems[a].name}</a></span>`;
}
lastPost();
function irProSite(link) {
    window.location.href = link;
}
function allPost(relInicio,relFim) {
    const  estiloQuandoVazio = `
    .square1{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #box{
        margin-bottom: 2rem;
    }
    .pagDiv{
        margin-top: 1rem;
    }
    `;
    let style = document.createElement('style');
        
    document.head.appendChild(style);

    
    if (relatedItems.length == 0) {
        let errorImg = document.createElement('img');
        errorImg.id = "errorImg";
        errorImg.src = "error.png";
        square1.appendChild(errorImg);
        square.style.display = "none";
        style.textContent = estiloQuandoVazio;
        return
    }
    for(let i = relInicio ; i <= relFim; i++){
    
        square1.innerHTML += `
        <div class="square">
        <div class="img-last">
        <img src="${relatedItems[i].imgLink}" alt="" loading="lazy" onclick="irProSite('${relatedItems[i].path}')">
        </div>
        <span class="last"><a href="${relatedItems[i].path}">${relatedItems[i].name}</a></span>
        </div>
        
        
        
        `;
    }
}
allPost(relInicio,relFim);

function setarMemoria(relInicio ,relFim,relPgIndex) {
    localStorage.setItem("relInicio ",relInicio );
    localStorage.setItem("relFim", relFim);
    localStorage.setItem("relPgIndex", relPgIndex);
    console.log("setei")
}
function resetaMemoria() {
    localStorage.removeItem("relInicio ");
    localStorage.removeItem("relFim");
    localStorage.removeItem("relPgIndex");
}

function rodapeIndex() {
    pgLast.innerHTML = `${listLength}`;
}

rodapeIndex();
