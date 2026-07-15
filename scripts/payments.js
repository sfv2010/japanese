document.addEventListener("DOMContentLoaded", function () {
  // Stripe DashboardでPayment Linkを作成後、公開URLをここへ貼り付けます。
  // secret keyは絶対にこのファイルへ記載しないでください。
  const paymentLinks = {
    toddlersSingle: "",
    generalSingle: "",
    generalPack: "",
    childrenSingle: "",
    childrenPack: "",
    conversationSingle: "",
    sorobanSingle: "",
  };

  const paymentButtons = document.querySelectorAll("[data-payment-link]");
  const setupNotice = document.querySelector("[data-payment-setup-notice]");
  let missingLinks = 0;

  paymentButtons.forEach((button) => {
    const key = button.dataset.paymentLink;
    const paymentUrl = paymentLinks[key];

    if (paymentUrl) {
      button.href = paymentUrl;
      button.target = "_blank";
      button.rel = "noopener noreferrer";
      button.setAttribute("aria-label", `${button.textContent.trim()} – Paiement sécurisé par Stripe`);
      return;
    }

    missingLinks += 1;
    button.classList.add("payment-card__button--disabled");
    button.setAttribute("aria-disabled", "true");
    button.setAttribute("tabindex", "-1");
  });

  if (setupNotice) {
    setupNotice.hidden = missingLinks === 0;
  }
});
