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
      imageUrl: "img/love.webp",
      imageAlt: "花柄の背景にハートのリボン",
    },
    {
      title: "子供向けレッスン",
      description:
        "年齢や興味に合わせて、聞く・話す・読む力を少しずつ育て、日本語を好きになる時間を作ります。",
      price: "25分 - 20ユーロ",
      imageUrl: "img/jp.svg",
      imageAlt: "日本を表すアイコン",
    },
    {
      title: "幼児・子供向け特別クラス",
      description:
        "学校、家庭での日本語、季節のテーマなど、一人ひとりの目的に合わせた特別カリキュラムです。",
      price: "25分 - 20ユーロ",
      imageUrl: "img/mado1.jpg",
      imageAlt: "日本のお寺の窓",
    },
    {
      title: "会話・発音クラス",
      description:
        "日本語の音、リズム、短い会話を中心に、楽しく声に出しながら話す自信を育てます。",
      price: "25分 - 20ユーロ",
      imageUrl: "img/bubble.webp",
      imageAlt: "フランスと日本の会話イメージ",
    },
  ];

  const items = {
    fr: [
      {
        title: "Japonais adulte",
        description:
          "Un cours personnalisé pour apprendre avec plaisir, aimer davantage le japonais et parler avec confiance.",
        price: "50 min - 25 €",
        imageUrl: "img/jp.svg",
        imageAlt: "Symbole japonais",
      },
      {
        title: "Tout-petits et enfants",
        description:
          "Des leçons ludiques avec peluches, jeux, chansons et échanges simples pour découvrir le japonais en s'amusant.",
        price: "25 min - 20 €",
        imageUrl: "img/love.webp",
        imageAlt: "Ruban en forme de coeur sur un fond fleuri",
      },
      {
        title: "Classe spéciale enfants",
        description:
          "Un curriculum adapté à l'âge, aux intérêts et au rythme de chaque enfant, avec français ou immersion en japonais.",
        price: "25 min - 20 €",
        imageUrl: "img/mado1.jpg",
        imageAlt: "Fenetre d'un temple japonais",
      },
      {
        title: "Conversation et prononciation",
        description:
          "Un cours ciblé pour travailler les sons, le rythme, les petites conversations et l'aisance à l'oral.",
        price: "Adultes : 50 min - 25 € / Enfants : 25 min - 20 €",
        imageUrl: "img/bubble.webp",
        imageAlt: "Illustration de conversation entre la France et le Japon",
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
    img.classList.add("imgZoom");

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
