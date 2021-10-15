// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хуввсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагч санамсаргүйгээр үүсгэж өгнө.

var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes</em>";

// Програм эхлэхэд бэлтгэе.document.querySelector("#score-0").textContent = 0;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";
// Shoog shideh eventListener
document.querySelector(".btn-roll").addEventListener("click", function () {
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
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 Буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

    // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно:

    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Тоглогчийн ээлжийн нөгөө тоглогч руу шилжүүлнэ.
    // Хэрэв идэвхтэй тоглогч нэг нь 0 байвал идэвхтэй тоглогчийг 1 болго.
    // Үгүй бол идэвхтэй тоглогчийг 0 болго.

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэгийг шилжүүлэх

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // Шоог түр алга болгоно.

    diceDom.Style.display = "none";

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
