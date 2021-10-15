//Тоглоомийн бүх газарт ашиглагдах глобаль хувьсагчдыг энд зарлая
var isNewGame;
var activePlayer;
var scores;
var roundScore;
// Shoogiin zurgiig uzuuleh elementiig DOM-oos haij olood end hadgalya
var diceDom = document.querySelector(".dice");

// Тоглоомыг эхлүүлнэ.
initGame();

// Тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame() {
  // Тоглоом эхэллээ гэдэг төлөв оруулна
  isNewGame = false;
  // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийн 1 гэж тэмдэглэе.
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хуввсагч
  roundScore = 0;

  // Програм эхлэхэд бэлтгэе.document.querySelector("#score-0").textContent = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  // Тоглогчийн нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// Shoog shideh eventListener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    // 1 - 6 dotorh sanamsargui neg too gargaj avna.
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Shoonii zurgiig web deer gargaj irne.
    diceDom.style.display = "block";
    //Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
    diceDom.src = "dice-" + diceNumber + ".png";

    // Buusan too ni 1 ees yalgaatai bol idvehtei Toglogchiin eeljiin onoog uurchilnu.

    if (diceNumber !== 1) {
      // 1ees yalgaatai too buulaa.
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 Буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
      // Тоглогчийн ээлжийг солино
      switchNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. New Game товчыг даарж шинээр эхлүүлнэ үү");
  }
});

// HOLD Товчны эвэнт листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // Дэлгэц дээр оноог нь өөрчилнө
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
    if (scores[activePlayer] >= 100) {
      // Тоглоомыг дууссан төлөвт оруулна.
      isGameOver = true;
      // Ялагч гэдэг текстийг нэрнийх нь оронд гаргана
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // Тоглогчийн ээлжийг солино
      switchNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. New Game товчыг даарж шинээр эхлүүлнэ үү");
  }
});

// Энэ функац нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг.
function switchNextPlayer() {
  // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно:
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн ээлжийн нөгөө тоглогч руу шилжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгоно.
  diceDom.Style.display = "none";
}

// New Game Шинэ тоглоом эхлүүлэх товчны эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
