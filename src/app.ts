document.addEventListener("DOMContentLoaded", function() {
    const spinButton = document.querySelector(".btn-primary") as HTMLButtonElement;
  
    if (spinButton) {
      spinButton.addEventListener("click", (event) => {
        event.preventDefault(); // Sayfa değişimini engellemek için
  
        console.log("TypeScript çalıştı");
  
        setTimeout(() => {
          alert("TypeScript çalıştı");
          window.location.href = spinButton.href; // Sayfa değişimini gerçekleştir
        }, 1000); // 1 saniye gecikme
      });
    }
  });
  