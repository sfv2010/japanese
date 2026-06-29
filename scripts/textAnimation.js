class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el =
            el instanceof HTMLElement ? el : document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split(""); //余分な空白を除く
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, "&nbsp;"); //もし文字の間にスペースを入れたい場合
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle("inview");
    }
}

class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll(".char");
    }

    // animate() {
    //     this.DOM.el.classList.add("inview");
    //     this.DOM.chars.forEach((c, i) => {
    //         gsap.to(c, 0.6, {
    //             ease: Back.easeOut,
    //             delay: i * 0.05,
    //             startAt: { y: "-50%", opacity: 0 },
    //             y: "0%",
    //             opacity: 1,
    //         });
    //     });
    // }
    animate() {
        this.DOM.el.classList.add("inview");
        this.DOM.chars.forEach((char, i) => {
            const delay = i * 0.05;
            char.style.animationDelay = `${delay}s`;
        });
    }
}
