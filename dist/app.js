"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var spinButton = document.querySelector(".btn-primary");
    if (spinButton) {
        spinButton.addEventListener("click", function (event) {
            event.preventDefault(); // Sayfa değişimini engellemek için
            console.log("TypeScript çalıştı");
            setTimeout(function () {
                alert("TypeScript çalıştı");
                window.location.href = spinButton.href; // Sayfa değişimini gerçekleştir
            }, 1000); // 1 saniye gecikme
        });
    }
});
