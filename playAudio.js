// Criando os elementos de áudio e atribuindo nomes
let heiban1 = new Audio('audio/わたしは.mp3');
let heiban2 = new Audio('audio/あそこは.mp3');
let heiban3 = new Audio('audio/こどもは.mp3');
let heiban4 = new Audio('audio/じぶんは.mp3');
let heiban5 = new Audio('audio/いっしょは.mp3');

let atamadaka1 = new Audio('audio/すべて.mp3');
let atamadaka2 = new Audio('audio/なんで.mp3');
let atamadaka3 = new Audio('audio/さっき.mp3');
let atamadaka4 = new Audio('audio/いつも.mp3');
let atamadaka5 = new Audio('audio/もっと.mp3');

let nakadaka1 = new Audio('audio/あなた.mp3');
let nakadaka2 = new Audio('audio/しかし.mp3');
let nakadaka3 = new Audio('audio/すこし.mp3');
let nakadaka4 = new Audio('audio/おもい.mp3');
let nakadaka5 = new Audio('audio/はやい.mp3');

let odaka1 = new Audio('audio/みんなは.mp3');
let odaka2 = new Audio('audio/ふたつは.mp3');
let odaka3 = new Audio('audio/ふたりは.mp3');
let odaka4 = new Audio('audio/ことばは.mp3');
let odaka5 = new Audio('audio/こころは.mp3');



let pitchBtn1 = document.querySelector('#pitchBtn1');
let pitchBtn2 = document.querySelector('#pitchBtn2');
let pitchBtn3 = document.querySelector('#pitchBtn3');
let pitchBtn4 = document.querySelector('#pitchBtn4');
let pitchBtn5 = document.querySelector('#pitchBtn5');
let pitchBtn6 = document.querySelector('#pitchBtn6');
let pitchBtn7 = document.querySelector('#pitchBtn7');
let pitchBtn8 = document.querySelector('#pitchBtn8');
let pitchBtn9 = document.querySelector('#pitchBtn9');
let pitchBtn10 = document.querySelector('#pitchBtn10');
let pitchBtn11 = document.querySelector('#pitchBtn11');
let pitchBtn12 = document.querySelector('#pitchBtn12');
let pitchBtn13 = document.querySelector('#pitchBtn13');
let pitchBtn14 = document.querySelector('#pitchBtn14');
let pitchBtn15 = document.querySelector('#pitchBtn15');
let pitchBtn16 = document.querySelector('#pitchBtn16');
let pitchBtn17 = document.querySelector('#pitchBtn17');
let pitchBtn18 = document.querySelector('#pitchBtn18');
let pitchBtn19 = document.querySelector('#pitchBtn19');
let pitchBtn20 = document.querySelector('#pitchBtn20');



// Função para tocar o áudio do botão
function tocarAudio(audio) {
  audio.currentTime = 0; // Reinicia o áudio, se já estiver tocando
  audio.play(); // Toca o áudio
}

pitchBtn1.addEventListener('click', function() {
  tocarAudio(heiban1);
});

pitchBtn2.addEventListener('click', function() {
  tocarAudio(heiban2);
});

pitchBtn3.addEventListener('click', function() {
  tocarAudio(heiban3);
});

pitchBtn4.addEventListener('click', function() {
  tocarAudio(heiban4);
});

pitchBtn5.addEventListener('click', function() {
  tocarAudio(heiban5);
});

pitchBtn6.addEventListener('click', function() {
  tocarAudio(atamadaka1);
});

pitchBtn7.addEventListener('click', function() {
  tocarAudio(atamadaka2);
});

pitchBtn8.addEventListener('click', function() {
  tocarAudio(atamadaka3);
});

pitchBtn9.addEventListener('click', function() {
  tocarAudio(atamadaka4);
});

pitchBtn10.addEventListener('click', function() {
  tocarAudio(atamadaka5);
});

pitchBtn11.addEventListener('click', function() {
  tocarAudio(nakadaka1);
});

pitchBtn12.addEventListener('click', function() {
  tocarAudio(nakadaka2);
});

pitchBtn13.addEventListener('click', function() {
  tocarAudio(nakadaka3);
});

pitchBtn14.addEventListener('click', function() {
  tocarAudio(nakadaka4);
});

pitchBtn15.addEventListener('click', function() {
  tocarAudio(nakadaka5);
});

pitchBtn16.addEventListener('click', function() {
  tocarAudio(odaka1);
});

pitchBtn17.addEventListener('click', function() {
  tocarAudio(odaka2);
});

pitchBtn18.addEventListener('click', function() {
  tocarAudio(odaka3);
});

pitchBtn19.addEventListener('click', function() {
  tocarAudio(odaka4);
});

pitchBtn20.addEventListener('click', function() {
  tocarAudio(odaka5);
});
