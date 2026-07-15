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

    const flowItems = document.querySelectorAll(".flow__item");
    flowItems.forEach((item) => item.classList.add("flow-reveal"));

    if (flowItems.length) {
        const revealFlowItem = function (el, inview) {
            if (inview) {
                el.classList.add("flow-visible");
            }
        };

        const flowObserver = new ScrollObserver(
            ".flow-reveal",
            revealFlowItem,
            {
                rootMargin: "0px 0px -8% 0px",
                threshold: 0.12,
            },
        );
    }
});
