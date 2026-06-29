class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector(".menuMobile__btn");
        this.DOM.cover = document.querySelector(".menuMobile__cover");
        this.DOM.container = document.querySelector("#globalContainer");
        this.eventType = this._getEventType();
        this._addEvent();
        this._adjustCoverHeight(); // カバーの高さを調整する
    }

    _getEventType() {
        const isTouchCapable =
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof DocumentTouch);

        return isTouchCapable ? "touchstart" : "click";
    }
    _toggle() {
        this.DOM.container.classList.toggle("header__menuOpen");
        this._adjustCoverHeight(); // メニューの状態が変わるたびにカバーの高さを再調整する
    }

    //スマホで見られたときはタッチ、PCはクリックと切り替える
    _addEvent() {
        this.DOM.btn.addEventListener("click", this._toggle.bind(this));
        this.DOM.cover.addEventListener("click", this._toggle.bind(this));
    }
    _adjustCoverHeight() {
        this.DOM.cover.style.height = `${document.documentElement.scrollHeight}px`;
    }
}

new MobileMenu();
