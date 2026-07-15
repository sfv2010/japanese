class MobileMenu {
    constructor() {
        this.btn = document.querySelector(".menuMobile__btn");
        this.cover = document.querySelector(".menuMobile__cover");
        this.nav = document.querySelector(".menuMobile");
        this.links = document.querySelectorAll(".menuMobile__link");

        if (!this.btn || !this.cover || !this.nav) return;

        if (!this.nav.id) this.nav.id = "mobile-navigation";
        this.btn.setAttribute("aria-controls", this.nav.id);
        this.btn.setAttribute("aria-expanded", "false");
        this.nav.setAttribute("aria-hidden", "true");

        this._addEvents();
    }

    get isOpen() {
        return document.body.classList.contains("header__menuOpen");
    }

    _setOpen(open) {
        document.body.classList.toggle("header__menuOpen", open);
        this.btn.setAttribute("aria-expanded", String(open));
        this.nav.setAttribute("aria-hidden", String(!open));
    }

    _toggle() {
        this._setOpen(!this.isOpen);
    }

    _close() {
        this._setOpen(false);
    }

    _addEvents() {
        this.btn.addEventListener("click", () => this._toggle());
        this.cover.addEventListener("click", () => this._close());

        this.links.forEach((link) => {
            link.addEventListener("click", () => this._close());
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && this.isOpen) {
                this._close();
                this.btn.focus();
            }
        });

        const desktopView = window.matchMedia("(min-width: 960px)");
        const closeOnDesktop = (event) => {
            if (event.matches) this._close();
        };

        if (desktopView.addEventListener) {
            desktopView.addEventListener("change", closeOnDesktop);
        } else {
            desktopView.addListener(closeOnDesktop);
        }
    }
}

new MobileMenu();
