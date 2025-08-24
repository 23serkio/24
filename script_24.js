// Respuestas correctas
const answers = {
  1: "Tu inteligencia",
  2: "Shawarma el egipcio",
  3: "El parque de las leyendas"
};

function checkAnswer(questionNumber, answer) {
  if(answer === answers[questionNumber]) {
    document.getElementById("unlock" + questionNumber).innerHTML =
      "✔ Respuesta correcta. <br> " +
      (questionNumber === 1 ? "He visto florecer en ti paisajes que no conocía, pero fue tu mente —brillante, indomable— la que me tiene preso en el más dulce de los encantos." :
       questionNumber === 2 ? "Aquel lugar, testigo de nuestras pequeñas tentaciones culinarias, fue también donde por primera vez me guiaste hacia sabores que nunca habría probado sin ti. 🌟" :
       "No hay instante contigo que no quisiera revivir. Desde ese paseo hasta los silencios compartidos… los repetiría todos, uno a uno, como quien vuelve a leer su historia favorita. 🎶");

    // Mostrar siguiente pregunta
    if(questionNumber < 3) {
      document.getElementById("q" + questionNumber).classList.remove("active");
      document.getElementById("q" + (questionNumber + 1)).classList.add("active");
    } else {
      endGame();
    }
  } else {
    alert("❌ Intenta de nuevo mi amor 😉");
  }
}

function endGame() {
  document.getElementById("q3").classList.remove("active");
  document.getElementById("final-message").style.display = "block";
  playMusic();
  releaseBalloons();
}

// Música
function playMusic() {
  const music = document.getElementById("bg-music");
  music.play();
}

// 🎈 Globos animados
function releaseBalloons() {
  for(let i=0; i<20; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.background = ["#ff4d6d","#ff758c","#ff9aa2","#fad0c4"][Math.floor(Math.random()*4)];
    balloon.style.animationDuration = (5 + Math.random()*5) + "s";
    document.body.appendChild(balloon);
    setTimeout(()=>{ balloon.remove(); },10000);
  }
}
