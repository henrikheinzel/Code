const express = require("express");
const router = express.Router();

const persistence = require("../models/persistence.js");

router.get("/", function (req, res) {
  res.render('list', { kategorien: persistence.alleKategorien });
});

router.get("/tutorials", function (req, res) {
  const kategorieName = req.query.category; 
  const passendeTutorials = persistence.getTutorialsZuKategorie(kategorieName);
  
  res.render('tutorials', { tutorials: passendeTutorials, kategorie: kategorieName });
});

router.get("/tutorial", function (req, res) {
  const tutorialName = req.query.name;
  const gesuchtesTutorial = persistence.alleTutorials.find(t => t.name === tutorialName);
  
  res.render('tutorial', { tutorial: gesuchtesTutorial });
});

router.get("/form", function (req, res) {
  res.render('form', { kategorien: persistence.alleKategorien });
});

router.post("/form", function (req, res) {
  // 1. Daten aus dem Formular auslesen (Die Namen müssen mit dem "name"-Attribut im HTML übereinstimmen!)
  const formName = req.body.name;
  const formSprache = req.body.sprache || "de";
  const formBeschreibung = req.body.beschreibung;
  const formDauer = req.body.dauer;
  const formUrl = req.body.url;
  const formKategorie = req.body.kategorie; // Das ist der ausgewählte Wert aus dem Dropdown

  // Wir suchen das echte Kategorie-Objekt, das zu dem ausgewählten Namen passt
  const passendesKatObjekt = persistence.alleKategorien.find(k => k.name === formKategorie);

  // 2. Neues Tutorial-Objekt erstellen
  const neuesTutorial = new persistence.Tutorial(
    formName,
    formSprache,
    formBeschreibung,
    formDauer,
    new Date(), // Aktuelles Datum setzen
    formUrl,
    "", // Leerer Embed-Code für ein Text-Tutorial
    passendesKatObjekt.bild // Wir nutzen einfach das Bild der ausgewählten Kategorie
  );

  // 3. Das Tutorial mit der Kategorie verknüpfen (Aufgabe 6.2)
  if (passendesKatObjekt) {
    neuesTutorial.fuegeKategorieHinzu(passendesKatObjekt);
  }

  // 4. Das fertige Tutorial in unser "Datenbank"-Array pushen
  persistence.alleTutorials.push(neuesTutorial);

  // 5. Nutzer zurück auf die Startseite leiten (Aufgabe 6.3)
  res.redirect("/");
});

module.exports = router;