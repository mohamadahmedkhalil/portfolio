const translations = {
  de: {
    pageTitle: "Projekt Funktionseinheit der Mikrotechnik | Mohamad Khalil",

    navAbout: "Über mich",
    navProjects: "Projekte",
    navContact: "Kontakt",

    pageHeading: "Projekt Funktionseinheit der Mikrotechnik",
    pageSubtitle: "Entwicklung eines Micro-Opto-Elektro-Mechanical Systems zur Identifikation und Sortierung von Kunststoffen.",

    cardTitle: "Projekt 1",
    cardDescription: "Kurze Beschreibung des Projekts. Zum Beispiel: FEM-Simulation, Ziel des Projekts, verwendete Software und wichtigste Ergebnisse.",

    footerText: "© 2026 Mohamad Khalil"
  },

  en: {
    pageTitle: "Microsystems Technology Functional Unit Project | Mohamad Khalil",

    navAbout: "About Me",
    navProjects: "Projects",
    navContact: "Contact",

    pageHeading: "Microsystems Technology Functional Unit Project",
    pageSubtitle: "Development of a Micro-Opto-Electro-Mechanical System for the identification and sorting of plastics.",

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