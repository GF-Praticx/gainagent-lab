const doorCards = document.querySelectorAll(".door-card");
const toast = document.querySelector(".toast");

document.querySelectorAll("[data-scroll-target]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scrollTarget).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

doorCards.forEach((card) => {
  const button = card.querySelector(".door");
  button.addEventListener("click", () => {
    const isOpen = card.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelector("#celebrate").addEventListener("click", () => {
  showToast();
  launchConfetti();
});

function showToast() {
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1900);
}

function launchConfetti() {
  const colors = ["#d94f70", "#117c8a", "#d79b24", "#463f8f"];
  for (let index = 0; index < 34; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 280}ms`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 1600);
  }
}
