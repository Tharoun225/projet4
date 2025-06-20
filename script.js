// Attendre que la page soit complètement chargée
window.addEventListener("DOMContentLoaded", () => {
  const btnCV = document.querySelector(".btn-telecharger");

  if (btnCV) {
    btnCV.addEventListener("click", () => {
      alert("Merci de télécharger mon CV ! 📄😊");
    });
  }
});

const form = document.querySelector(".form-contact");
const message = document.querySelector(".confirmation-message");

if (form && message) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Afficher le message dans la page
    message.textContent = "✅ Merci ! Votre message a bien été envoyé.";
    message.style.display = "block";

    // Réinitialiser les champs
    form.reset();

    // Effacer le message après 5 secondes
    setTimeout(() => {
      message.style.display = "none";
    }, 5000);
  });
}

// BOUTON "RETOUR EN HAUT"
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
