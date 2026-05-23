const translations = {
  de: {
    pageTitle: "Projekte | Mohamad Khalil",

    navAbout: "Über mich",
    navProjects: "Projekte",
    navContact: "Kontakt",

    pageHeading: "Meine Projekte",
    pageSubtitle: "Hier findest du eine Auswahl meiner technischen und akademischen Projekte.",

    project1Title: "Bachelorarbeit",
    project1Desc: "Konstruktion und Aufbau eines Baggerarms inklusive mathematischer Beschreibung des Aufbaus zum Einsatz in der Lehre.",

    project2Title: "Projekt Mehrkörperdynamik",
    project2Desc: "Mehrkörperdynamische Fahrwerk-Simulation eines Motocross-Motorrads.",

    project3Title: "Projekt Medizintechnik",
    project3Desc: "Sensorentwicklung zur differenzierten Vitalparametererfassung.",

    project4Title: "Projekt Aktorik und Sensorik",
    project4Desc: "Entwurf und Implementierung eines bistabilen DE-Aktors mit integrierter Seilkinematik.",

    project5Title: "Projekt Funktionseinheit der Mikrotechnik",
    project5Desc: "Entwicklung eines Micro-Opto-Elektro-Mechanical Systems zur Identifikation und Sortierung von Kunststoffen.",

    project6Title: "Projekt Smart Materials Mechatronics",
    project6Desc: "Untersuchung dielektrisches Material bezüglich komplexem Schubmoduls und Wämemebehandlung.",

    footerText: "© 2026 Mohamad Khalil"
  },

  en: {
    pageTitle: "Projects | Mohamad Khalil",

    navAbout: "About Me",
    navProjects: "Projects",
    navContact: "Contact",

    pageHeading: "My Projects",
    pageSubtitle: "Here you will find a selection of my technical and academic projects.",

    project1Title: "Bachelor's Thesis",
    project1Desc: "Design and construction of an excavator arm, including a mathematical description of the setup for teaching purposes.",

    project2Title: "Multibody Dynamics Project",
    project2Desc: "Multibody dynamic suspension simulation of a motocross motorcycle.",

    project3Title: "Medical Engineering Project",
    project3Desc: "Sensor development for differentiated vital parameter acquisition.",

    project4Title: "Actuation and Sensing Project",
    project4Desc: "Design and implementation of a bistable dielectric elastomer actuator with integrated cable kinematics.",

    project5Title: "Microsystems Technology Functional Unit Project",
    project5Desc: "Development of a Micro-Opto-Electro-Mechanical System for the identification and sorting of plastics.",

    project6Title: "Smart Materials Mechatronics Project",
    project6Desc: "Investigation of dielectric material with regard to complex shear modulus and heat treatment.",

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