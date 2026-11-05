document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".calc-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Спасибо! Это концепт — здесь будет отправка заявки на почту или в CRM.");
      form.reset();
    });
  }
});
