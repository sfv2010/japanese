document.addEventListener("DOMContentLoaded", function () {
  const worksContainer = document.getElementById("works-container");

  if (!worksContainer) {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const language =
    urlParams.get("lang") || document.documentElement.lang || "fr";

  const childLessons = [
    {
      title: "幼児向けレッスン",
      description:
        "ぬいぐるみ、ゲーム、歌、やりとりを使いながら、とにかく楽しく日本語にふれるクラスです。",
      price: "25分 - 20ユーロ",
      imageUrl: "img/lesson-toddler.svg",
      imageAlt:
        "ぬいぐるみやカードで楽しく日本語にふれる幼児向けレッスンのイラスト",
    },
    {
      title: "子供向けレッスン",
      description:
        "年齢や興味に合わせて、聞く・話す・読む力を少しずつ育て、日本語を好きになる時間を作ります。",
      price: "25分 - 20ユーロ",
      imageUrl: "img/lesson-children.svg",
      imageAlt: "いろいろな国の子供たちが楽しく日本語を学ぶイラスト",
    },
    {
      title: "幼児・子供向け特別クラス",
      description:
        "学校、家庭での日本語、季節のテーマなど、一人ひとりの目的に合わせた特別カリキュラムです。",
      price: "25分 - 20ユーロ",
      imageUrl: "img/lesson-special.svg",
      imageAlt: "子供一人ひとりに合わせた特別カリキュラムのイラスト",
    },
    {
      title: "会話・発音クラス",
      description:
        "日本語の音、リズム、短い会話を中心に、楽しく声に出しながら話す自信を育てます。",
      price: "25分 - 20ユーロ",
      imageUrl: "img/lesson-conversation.svg",
      imageAlt: "日本語の会話と発音を練習するイラスト",
    },
  ];

  const items = {
    fr: [
      {
        title: "Cours de japonais pour tous",
        description:
          "Un cours personnalisé pour apprendre le japonais avec plaisir, progresser à votre rythme et gagner en confiance à l’oral.",
        price: "50 min - 25 €",
        imageUrl: "img/japonais.png",
        imageAlt: "Illustration d'un cours de japonais en ligne pour adulte",
      },
      {
        title: "Tout-petits et enfants",
        description:
          "Des leçons ludiques avec peluches, jeux, chansons et échanges simples pour découvrir le japonais en s'amusant.",
        price: "25 min - 20 €",
        imageUrl: "img/nihongo_child.png",
        imageAlt:
          "Illustration d'enfants de differents pays apprenant le japonais avec joie",
      },
      {
        title: "Conversation et prononciation",
        description:
          "Un cours ciblé pour travailler les sons, le rythme, les petites conversations et l'aisance à l'oral.",
        price: "Adultes : 50 min - 20 € ",
        imageUrl: "img/conversation.jpg",
        imageAlt:
          "Illustration d'un cours de conversation et de prononciation japonaises",
      },
      {
        title: "Cours de soroban",
        description:
          "Un cours pour apprendre le soroban, développer la concentration, le calcul mental et la logique, dans une ambiance ludique et adaptée à chaque niveau.",
        price: "Enfants et Adultes: 20 min - 20 €",
        imageUrl: "img/cours_soroban.jpg",
        imageAlt: "Illustration d'un soroban japonais",
      },
    ],
    ja: childLessons,
    jp: childLessons,
  };

  const selectedItems = items[language] || items.fr;

  selectedItems.forEach((item) => {
    const worksItem = document.createElement("li");
    worksItem.classList.add("works__item", "lesson-card");

    const imageWrap = document.createElement("div");
    imageWrap.classList.add("lesson-card__image");

    const img = document.createElement("img");
    img.src = item.imageUrl;
    img.alt = item.imageAlt;
    img.classList.add("lesson-card__zoom");

    imageWrap.appendChild(img);
    worksItem.appendChild(imageWrap);

    const worksTitle = document.createElement("h3");
    worksTitle.classList.add("works__title");
    worksTitle.textContent = item.title;
    worksItem.appendChild(worksTitle);

    const worksDescription = document.createElement("p");
    worksDescription.classList.add("lesson-card__text");
    worksDescription.textContent = item.description;
    worksItem.appendChild(worksDescription);

    if (item.price) {
      const worksPrice = document.createElement("p");
      worksPrice.classList.add("lesson-card__price");
      worksPrice.textContent = item.price;
      worksItem.appendChild(worksPrice);
    }

    worksContainer.appendChild(worksItem);
  });
});
