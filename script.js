const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const messages = [
  "Yakin? 🥺",
  "Beneran yakin? 😢",
  "Coba pikir lagi ya 💔",
  "Ndah… 🥹",
  "Aku bakal sedih 😭"
];

let index = 0;

noBtn.addEventListener("click", () => {
  noBtn.textContent = messages[index];
  index = (index + 1) % messages.length;

  const yesSize = window.getComputedStyle(yesBtn).fontSize;
  yesBtn.style.fontSize = (parseFloat(yesSize) + 4) + "px";
});

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
