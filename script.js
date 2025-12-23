const music = document.getElementById("music");
const screens = document.querySelectorAll(".screen");
let current = 0;

// OPEN + MUSIC
document.getElementById("openBtn").onclick = () => {
  music.volume = 0.4;
  music.play();

  let c = 5;
  const count = document.getElementById("count");

  const timer = setInterval(() => {
    count.innerText = c;
    c--;
    if (c < 0) {
      clearInterval(timer);
      showScreen(1);
    }
  }, 1000);
};

// SCREEN SWITCH
function showScreen(i) {
  screens[current].classList.remove("active");
  screens[i].classList.add("active");
  current = i;
}

// SCROLL TO MEMORIES
window.addEventListener("wheel", () => {
  if (current < screens.length - 1) showScreen(current + 1);
});

// MEMORIES
const memories = [
  {img:"img/img1.jpeg", text:"Childhood smiles 💕"},
  {img:"img/img2.jpeg", text:"School days 🎒"},
  {img:"img/img3.jpeg", text:"Dreams ✨"},
  {img:"img/img4.jpeg", text:"Strength ❤️"},
  {img:"img/img5.jpeg", text:"Forever special 🌸"}
];

let i = 0;
const memImg = document.getElementById("memImg");
const memText = document.getElementById("memText");

function showMemory(){
  if(i < memories.length){
    memImg.src = memories[i].img;
    memText.innerText = memories[i].text;
    i++;
    setTimeout(showMemory, 5000);
  }
}
showMemory();
