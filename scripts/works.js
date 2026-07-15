document.addEventListener("DOMContentLoaded", function () {
  const worksContainer = document.getElementById("works-container");

  if (!worksContainer) {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const language =
    urlParams.get("lang") || document.documentElement.lang || "fr";

  // Calendlyで各イベントを作成後、公開URLをここに貼り付けます。
  // 有料イベント側でStripeを有効にすれば、予約時に決済されます。
  const bookingUrls = {
    trialFr: "https://calendly.com/sayakavincent1980/30min",
    generalFr: "",
    childrenFr: "",
    conversationFr: "",
    sorobanFr: "",
    trialJp: "https://calendly.com/sayakavincent1980/30min",
    toddlersJp: "",
    childrenJp: "",
    sorobanJp: "",
  };

  const labels = {
    fr: {
      audience: "Pour qui ?",
      format: "Format",
      content: "Pendant le cours",
      show: "Voir les détails",
      hide: "Masquer les détails",
      book: "Réserver",
      trial: "Commencer par le cours d'essai gratuit",
      request: "Réserver un cours d'essai gratuit",
      detailsPage: "Découvrir ce cours",
    },
    jp: {
      audience: "対象",
      format: "受講方法",
      content: "レッスン内容",
      show: "詳細を見る",
      hide: "詳細を閉じる",
      book: "予約する",
      trial: "まずは無料体験を予約する",
      request: "無料体験レッスンを予約する",
      detailsPage: "このレッスンについて詳しく見る",
    },
  };

  const pageLabels = language === "fr" ? labels.fr : labels.jp;

  const childLessons = [
    {
      title: "体験レッスン",
      description:
        "体験レッスンではお子さまに日本語を好きになってもらえるよう、笑顔で参加できることを何よりも大切にしています。",
      price: "15分 - 無料",
      imageUrl: "img/yoji-japanese-800.webp",
      imageSrcSet:
        "img/yoji-japanese-800.webp 800w, img/yoji-japanese-1200.webp 1200w",
      imageWidth: 800,
      imageHeight: 534,
      imageAlt:
        "ぬいぐるみやカードで楽しく日本語にふれる幼児向けレッスンのイラスト",
      audience: "日本語を学びたいお子様",
      lessonFormat: "オンライン・15分・無料",
      lessonContent: "簡単なやりとりを通して、興味や現在のレベルを確認します。",
      bookingUrl: bookingUrls.trialJp,
    },
    {
      title: "幼児、子供向けレッスン",
      description:
        "年齢や興味に合わせて、聞く・話す・読む力を少しずつ育て、日本語を好きになる時間を作ります。",
      price: "25分 - 20ユーロ",
      packagePrice: "5回パック : 80 €",
      packageBenefit: "1回分お得",
      imageUrl: "img/child-375.webp",
      imageWidth: 375,
      imageHeight: 375,
      imageAlt: "いろいろな国の子供たちが楽しく日本語を学ぶイラスト",
      audience: "子供、聞く・話す・読む力を伸ばしたい方",
      lessonFormat: "オンライン・25分",
      lessonContent:
        "年齢、興味、日本語レベルに合わせたオーダーメイドの内容です。",
      bookingUrl: bookingUrls.trialJp,
      isTrialCta: true,
      detailsUrl: "cours-japonais-enfants-jp.html",
    },

    {
      title: "そろばんレッスン",
      description:
        "そろばんを使って日本語で数字に親しむレッスンです。集中力、計算力、論理的思考力を育てます。",
      price: "15分 - 20ユーロ",
      imageUrl: "img/cours-soroban-600.webp",
      imageSrcSet:
        "img/cours-soroban-600.webp 600w, img/cours-soroban-1200.webp 1200w",
      imageWidth: 600,
      imageHeight: 240,
      imageAlt: "そろばんを使って数字に親しむレッスンのイラスト",
      audience: "子供・大人、日本語で数字やそろばんを学びたい方",
      lessonFormat: "オンライン・15分",
      lessonContent:
        "そろばんを使いながら、日本語の数字、計算、集中力を楽しく身につけます。",
      bookingUrl: bookingUrls.trialJp,
      isTrialCta: true,
    },
  ];

  const items = {
    fr: [
      {
        title: "Cours d'essai gratuit",
        description:
          "Un premier cours pour découvrir votre niveau et vos objectifs, essayer quelques activités adaptées et trouver la méthode d’apprentissage qui vous convient.",
        price: "15 min - gratuit",
        imageUrl: "img/essai-800.webp",
        imageSrcSet: "img/essai-800.webp 800w, img/essai-1200.webp 1200w",
        imageWidth: 800,
        imageHeight: 534,
        imageAlt: "Illustration d'un cours de japonais en ligne pour adulte",
        audience: "Tous niveaux, adultes et enfants",
        lessonFormat: "En ligne · 15 minutes · gratuit",
        lessonContent:
          "Un échange, quelques activités simples et une proposition de méthode adaptée à vos objectifs.",
        bookingUrl: bookingUrls.trialFr,
      },
      {
        title: "Cours de japonais pour tous",
        description:
          "Un cours personnalisé pour apprendre le japonais avec plaisir, progresser à votre rythme et gagner en confiance à l’oral.",
        price: "50 min - 25 €",
        packagePrice: "Pack de 5 cours : 100 €",
        packageBenefit: "1 cours offert",
        imageUrl: "img/japonais-800.webp",
        imageSrcSet: "img/japonais-800.webp 800w, img/japonais-1200.webp 1200w",
        imageWidth: 800,
        imageHeight: 427,
        imageAlt: "Illustration d'un cours de japonais en ligne pour adulte",
        audience: "Adolescents et adultes, du niveau débutant à avancé",
        lessonFormat: "En ligne · 50 minutes",
        lessonContent:
          "Conversation, grammaire, lecture et culture japonaise selon votre niveau et vos objectifs.",
        bookingUrl: bookingUrls.trialFr,
        isTrialCta: true,
        detailsUrl: "cours-japonais-pour-tous.html",
      },
      {
        title: "Tout-petits et enfants",
        description:
          "Des leçons ludiques avec peluches, jeux, chansons et échanges simples pour découvrir le japonais en s'amusant.",
        price: "25 min - 20 €",
        packagePrice: "Pack de 5 cours : 80 €",
        packageBenefit: "1 cours offert",
        imageUrl: "img/nihongo-child-800.webp",
        imageSrcSet:
          "img/nihongo-child-800.webp 800w, img/nihongo-child-1200.webp 1200w",
        imageWidth: 800,
        imageHeight: 640,
        imageAlt:
          "Illustration d'enfants de differents pays apprenant le japonais avec joie",
        audience:
          "Tout-petits et enfants, débutants ou déjà familiarisés avec le japonais",
        lessonFormat: "En ligne · 25 minutes",
        lessonContent:
          "Jeux, chansons, peluches et échanges adaptés à l'âge, aux goûts et au rythme de l'enfant.",
        bookingUrl: bookingUrls.trialFr,
        isTrialCta: true,
        detailsUrl: "cours-japonais-enfants.html",
      },
      {
        title: "Conversation et prononciation",
        description:
          "Un cours ciblé pour travailler les sons, le rythme, les petites conversations et l'aisance à l'oral.",
        price: "Adultes : 25 min - 15 € ",
        imageUrl: "img/conversation-600.webp",
        imageSrcSet:
          "img/conversation-600.webp 600w, img/conversation-1200.webp 1200w",
        imageWidth: 600,
        imageHeight: 240,
        imageAlt:
          "Illustration d'un cours de conversation et de prononciation japonaises",
        audience: "Adultes souhaitant parler avec plus d'aisance",
        lessonFormat: "En ligne · 25 minutes",
        lessonContent:
          "Prononciation, rythme, écoute et mises en situation pour gagner en confiance à l'oral.",
        bookingUrl: bookingUrls.trialFr,
        isTrialCta: true,
        detailsUrl: "cours-conversation-prononciation.html",
      },
      {
        title: "Cours de soroban",
        description:
          "Un cours pour apprendre le soroban, développer la concentration, le calcul mental et la logique, dans une ambiance ludique et adaptée à chaque niveau.",
        price: "Enfants et Adultes: 20 min - 20 €",
        imageUrl: "img/cours-soroban-600.webp",
        imageSrcSet:
          "img/cours-soroban-600.webp 600w, img/cours-soroban-1200.webp 1200w",
        imageWidth: 600,
        imageHeight: 240,
        imageAlt: "Illustration d'un soroban japonais",
        audience:
          "Enfants et adultes intéressés par les nombres et le calcul japonais",
        lessonFormat: "En ligne · 20 minutes",
        lessonContent:
          "Manipulation du soroban, nombres en japonais, calcul mental et exercices progressifs.",
        bookingUrl: bookingUrls.trialFr,
        isTrialCta: true,
      },
    ],
    ja: childLessons,
    jp: childLessons,
  };

  const selectedItems = items[language] || items.fr;

  selectedItems.forEach((item, index) => {
    const worksItem = document.createElement("li");
    worksItem.classList.add("works__item", "lesson-card");

    const imageWrap = document.createElement("div");
    imageWrap.classList.add("lesson-card__image");

    const img = document.createElement("img");
    img.src = item.imageUrl;
    if (item.imageSrcSet) {
      img.srcset = item.imageSrcSet;
      img.sizes = "(min-width: 960px) 340px, (min-width: 600px) 45vw, 90vw";
    }
    img.alt = item.imageAlt;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = item.imageWidth;
    img.height = item.imageHeight;
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

    if (item.packagePrice) {
      const packagePrice = document.createElement("p");
      packagePrice.classList.add("lesson-card__package");
      packagePrice.textContent = item.packagePrice;
      if (item.packageBenefit) {
        const packageBenefit = document.createElement("span");
        packageBenefit.classList.add("lesson-card__package-benefit");
        packageBenefit.textContent = item.packageBenefit;
        packagePrice.appendChild(packageBenefit);
      }
      worksItem.appendChild(packagePrice);
    }

    if (item.detailsUrl) {
      const detailsPageLink = document.createElement("a");
      detailsPageLink.classList.add("lesson-card__more");
      detailsPageLink.href = item.detailsUrl;
      detailsPageLink.textContent = pageLabels.detailsPage;
      detailsPageLink.setAttribute(
        "aria-label",
        `${pageLabels.detailsPage} : ${item.title}`,
      );
      worksItem.appendChild(detailsPageLink);
      worksContainer.appendChild(worksItem);
      return;
    }

    const detailsId = `lesson-details-${language}-${index}`;
    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.classList.add("lesson-card__toggle");
    toggleButton.setAttribute("aria-expanded", "false");
    toggleButton.setAttribute("aria-controls", detailsId);
    toggleButton.innerHTML = `<span>${pageLabels.show}</span><span class="lesson-card__toggle-icon" aria-hidden="true">＋</span>`;
    worksItem.appendChild(toggleButton);

    const details = document.createElement("div");
    details.id = detailsId;
    details.classList.add("lesson-card__details");
    details.hidden = true;

    const detailsList = document.createElement("dl");
    detailsList.classList.add("lesson-card__details-list");
    [
      [pageLabels.audience, item.audience],
      [pageLabels.format, item.lessonFormat],
      [pageLabels.content, item.lessonContent],
    ].forEach(([label, value]) => {
      const term = document.createElement("dt");
      term.textContent = label;
      const description = document.createElement("dd");
      description.textContent = value;
      detailsList.append(term, description);
    });
    details.appendChild(detailsList);

    const hasOnlineBooking = Boolean(item.bookingUrl);
    const bookingLink = document.createElement("a");
    bookingLink.classList.add("lesson-card__book");
    bookingLink.href = hasOnlineBooking ? item.bookingUrl : "#contact";
    bookingLink.textContent = item.isTrialCta
      ? pageLabels.trial
      : hasOnlineBooking
        ? pageLabels.book
        : pageLabels.request;

    if (hasOnlineBooking) {
      bookingLink.target = "_blank";
      bookingLink.rel = "noopener noreferrer";
    } else {
      bookingLink.addEventListener("click", () => {
        const message = document.getElementById("message");
        if (message && !message.value.trim()) {
          message.value =
            language === "fr"
              ? `Je souhaite réserver : ${item.title}.\n`
              : `「${item.title}」の予約を希望します。\n`;
        }
      });
    }

    details.appendChild(bookingLink);
    worksItem.appendChild(details);

    const toggleDetails = () => {
      const willOpen = details.hidden;
      details.hidden = !willOpen;
      toggleButton.setAttribute("aria-expanded", String(willOpen));
      toggleButton.querySelector("span:first-child").textContent = willOpen
        ? pageLabels.hide
        : pageLabels.show;
      toggleButton.querySelector(".lesson-card__toggle-icon").textContent =
        willOpen ? "−" : "＋";
      worksItem.classList.toggle("lesson-card--open", willOpen);
    };

    toggleButton.addEventListener("click", toggleDetails);
    worksItem.addEventListener("click", (event) => {
      if (!event.target.closest("a, button")) {
        toggleDetails();
      }
    });

    worksContainer.appendChild(worksItem);
  });
});
