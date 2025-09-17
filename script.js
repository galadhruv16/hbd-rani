document.getElementById("blow-btn").addEventListener("click", function () {
  // Animate flames to disappear
  const flames = document.querySelectorAll(".flame");
  flames.forEach((flame, i) => {
    flame.style.transition = "opacity 0.7s cubic-bezier(.68,-0.55,.27,1.55)";
    flame.style.opacity = "0";
  });
  // Add confetti effect
  setTimeout(() => {
    showConfetti();
    setTimeout(() => {
      alert("Make a wish, Rani! 🎂✨");
    }, 1200);
  }, 900);
});

function showConfetti() {
  const confettiColors = [
    "#ffb6c1",
    "#b6e1ff",
    "#ffe4b5",
    "#e75480",
    "#b06ab3",
    "#ffd1dc",
  ];
  for (let i = 0; i < 40; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.background =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-20px";
    conf.style.width = 8 + Math.random() * 8 + "px";
    conf.style.height = conf.style.width;
    conf.style.position = "fixed";
    conf.style.borderRadius = "50%";
    conf.style.zIndex = "999";
    conf.style.opacity = 0.8;
    conf.style.pointerEvents = "none";
    conf.style.transition =
      "top 1.2s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.8s";
    document.body.appendChild(conf);
    setTimeout(() => {
      conf.style.top = 60 + Math.random() * 30 + "vh";
      conf.style.opacity = 0;
    }, 50);
    setTimeout(() => {
      conf.remove();
    }, 1400);
  }
}
