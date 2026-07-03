document.addEventListener("DOMContentLoaded", function () {
    const textAnimation = function (el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    };
    const so = new ScrollObserver(".tween-animate", textAnimation);

    const _inviewAnimation = function (el, inview) {
        el.classList.toggle("inview", inview);
    };
    const so2 = new ScrollObserver(".coverSlide", _inviewAnimation);

    const fadeInAnimation = function (el, inview) {
        el.classList.toggle("show", inview);
    };
    const so3 = new ScrollObserver(".scroll-fadein", fadeInAnimation);
});
