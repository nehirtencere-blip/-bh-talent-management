function setLanguage(language) {
  const lang = language === "en" ? "en" : "tr";
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-tr][data-en]").forEach((element) => {
    const value = element.getAttribute(`data-${lang}`);
    if (value !== null) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll(".language button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });

  localStorage.setItem("selectedLanguage", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "tr";
  setLanguage(savedLanguage);
});
