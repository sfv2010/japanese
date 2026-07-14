(function () {
  "use strict";

  const STORAGE_KEY = "sayaka_cookie_consent";
  const CONSENT_LIFETIME = 1000 * 60 * 60 * 24 * 183;
  const GA_ID = "G-MBYGG5MR3R";
  let analyticsLoaded = false;

  function readPreference() {
    try {
      const preference = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!preference || Date.now() - preference.updatedAt > CONSENT_LIFETIME) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return preference;
    } catch (_error) {
      return null;
    }
  }

  function savePreference(analytics) {
    const preference = { analytics, updatedAt: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preference));
    return preference;
  }

  function loadAnalytics() {
    if (
      analyticsLoaded ||
      document.querySelector("script[data-sayaka-analytics]")
    ) {
      return;
    }

    analyticsLoaded = true;
    window["ga-disable-" + GA_ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { anonymize_ip: true });

    const script = document.createElement("script");
    script.async = true;
    script.dataset.sayakaAnalytics = "true";
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(script);
  }

  function removeAnalyticsCookies() {
    const names = document.cookie
      .split(";")
      .map((cookie) => cookie.split("=")[0].trim())
      .filter((name) => name === "_ga" || name.startsWith("_ga_"));

    names.forEach((name) => {
      document.cookie = name + "=; Max-Age=0; path=/; SameSite=Lax";
      document.cookie =
        name +
        "=; Max-Age=0; path=/; domain=." +
        window.location.hostname +
        "; SameSite=Lax";
    });
  }

  function createBanner() {
    const banner = document.createElement("aside");
    banner.className = "cookie-banner";
    banner.id = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "true");
    banner.setAttribute("aria-labelledby", "cookie-banner-title");
    banner.hidden = true;
    banner.innerHTML = [
      '<h2 class="cookie-banner__title" id="cookie-banner-title">Vos choix en matière de cookies</h2>',
      '<p class="cookie-banner__text">Ce site utilise des cookies de mesure d’audience uniquement avec votre accord. Vous pouvez accepter ou refuser sans que cela n’affecte votre navigation.</p>',
      '<a class="cookie-banner__link" href="politique-cookies.html">Consulter la politique relative aux cookies</a>',
      '<div class="cookie-banner__actions">',
      '<button type="button" class="cookie-banner__button cookie-banner__button--settings" data-cookie-choice="refuse">Tout refuser</button>',
      '<button type="button" class="cookie-banner__button cookie-banner__button--accept" data-cookie-choice="accept">Tout accepter</button>',
      "</div>",
    ].join("");
    document.body.appendChild(banner);
    return banner;
  }

  function init() {
    const banner = document.getElementById("cookie-banner") || createBanner();
    const preference = readPreference();

    if (preference?.analytics) {
      loadAnalytics();
    } else if (!preference) {
      banner.hidden = false;
    }

    document.addEventListener("click", function (event) {
      const settingsButton = event.target.closest(
        "#open-cookie-settings, [data-open-cookie-settings]",
      );
      const choiceButton = event.target.closest("[data-cookie-choice]");

      if (settingsButton) {
        event.preventDefault();
        banner.hidden = false;
        banner.querySelector("button")?.focus();
      }

      if (!choiceButton) {
        return;
      }

      const accepted = choiceButton.dataset.cookieChoice === "accept";
      savePreference(accepted);
      banner.hidden = true;

      if (accepted) {
        loadAnalytics();
      } else {
        window["ga-disable-" + GA_ID] = true;
        if (typeof window.gtag === "function") {
          window.gtag("consent", "update", {
            analytics_storage: "denied",
          });
        }
        removeAnalyticsCookies();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
