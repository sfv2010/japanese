// script.js
document.addEventListener("DOMContentLoaded", (event) => {
    const reloadBtn = document.getElementById("confirmation");

    reloadBtn.onclick = function () {
        window.location.href = "index.html";
    };
});
