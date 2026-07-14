function animateText(element, text, delay = 80, initialDelay = 300, callback) {
  let index = 0;
  element.textContent = "";

  function animate() {
    if (index < text.length) {
      const char = text.charAt(index);
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = 0;
      span.style.transition = "opacity 0.4s ease-in-out";
      element.appendChild(span);
      index++;

      setTimeout(() => {
        span.style.opacity = 1;
      }, 50);

      setTimeout(animate, delay);
    } else if (callback) {
      callback();
    }
  }

  setTimeout(animate, initialDelay);
}

const nameElement = document.querySelector(".textAnimationName");
const textElement = document.querySelector(".textAnimation");
const urlParams = new URLSearchParams(window.location.search);
const pageLanguage =
  urlParams.get("lang") || document.documentElement.lang || "fr";

const heroText = {
  fr: {
    name: "    Apprendre le japonais ",
    text: "avec une professeure native japonaise",
  },
  ja: {
    name: "日本語を、楽しく学びましょう！",
    text: "日本語がもっと好きになり、自信を持って話せる。",
  },
  jp: {
    name: "日本語を、楽しく学びましょう！",
    text: "日本語がもっと好きになり、自信を持って話せる。",
  },
};

const selectedText = heroText[pageLanguage] || heroText.fr;

function prepareFadeText() {
  if (!textElement) {
    return;
  }

  textElement.classList.remove("show");
  textElement.classList.add("fadein");
  textElement.textContent = selectedText.text;
}

function showFadeText() {
  if (!textElement) {
    return;
  }

  void textElement.offsetHeight;

  setTimeout(() => {
    textElement.classList.add("show");
  }, 160);
}

prepareFadeText();

if (nameElement) {
  animateText(nameElement, selectedText.name, 80, 300, showFadeText);
} else {
  showFadeText();
}
