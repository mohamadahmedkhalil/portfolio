const translations = {
  de: {
    pageTitle: "Projekt Smart Materials Mechatronics | Mohamad Khalil",

    navAbout: "Über mich",
    navProjects: "Projekte",
    navContact: "Kontakt",

    pageHeading: "Projekt Smart Materials Mechatronics",
    pageSubtitle: "Untersuchung dielektrischen Materials bezüglich komplexem Schubmodul und Wärmebehandlung.",

    cardTitle: "Projekt 1",
    cardDescription: "Kurze Beschreibung des Projekts. Zum Beispiel: FEM-Simulation, Ziel des Projekts, verwendete Software und wichtigste Ergebnisse.",

    footerText: "© 2026 Mohamad Khalil"
  },

  en: {
    pageTitle: "Smart Materials Mechatronics Project | Mohamad Khalil",

    navAbout: "About Me",
    navProjects: "Projects",
    navContact: "Contact",

    pageHeading: "Smart Materials Mechatronics Project",
    pageSubtitle: "Investigation of dielectric material with regard to complex shear modulus and heat treatment.",

    cardTitle: "Project 1",
    cardDescription: "Short description of the project. For example: FEM simulation, project objective, software used, and key results.",

    footerText: "© 2026 Mohamad Khalil"
  }
};

let currentLang = localStorage.getItem("language") || "de";

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.title = translations[lang].pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "de" ? "EN" : "DE";
  }

  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "de" ? "en" : "de";
      applyLanguage(currentLang);
    });
  }
});