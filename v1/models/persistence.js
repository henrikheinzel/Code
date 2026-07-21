class Kategorie {
  constructor(name, bild) {
    this.name = name;
    this.bild = bild;
  }
}

class Kapitel {
  constructor(name, beschreibung, dauer) {
    this.name = name;
    this.beschreibung = beschreibung;
    this.dauer = dauer;
  }
}

class Bild {
  constructor(url, name) {
    this.url = url;
    this.name = name;
  }
}

class Tutorial {
  constructor(
    name,
    sprache,
    beschreibung,
    dauer,
    datum,
    url,
    embededCode,
    bild,
  ) {
    this.name = name;
    this.sprache = sprache;
    this.beschreibung = beschreibung;
    this.dauer = dauer;
    this.datum = datum;
    this.url = url;
    this.embededCode = embededCode;
    this.bild = bild;

    this.kategorien = []; //geht das so?
    this.kapitelliste = []; //same here
  }
  // datum = function () {
  //   return new Date().getDate();
  // };
  fuegeKategorieHinzu(kat) {
    this.kategorien.push(kat);
  }
  fuegeKapitelHinzu(kap) {
    this.kapitelliste.push(kap);
  }
}

function getDauerInStundenUndMinuten(dauer) {
  let teile = dauer.split(":");
  let stunden = parseInt(teile[0], 10);
  let minuten = parseInt(teile[1], 10);
  return `${stunden} Std. ${minuten} Min. `;
}

// --- 1. Testdaten erzeugen ---

// Bilder erstellen (Pfade für Express angepasst!)
const imgCSS = new Bild("/img/CSS.png", "CSS Logo");
const imgJava = new Bild("/img/Java.png", "Java Logo");
const imgWeb = new Bild("/img/JavaSyntax.png", "Web Logo");
const imgDB = new Bild("/img/TypeScript.png", "Datenbank Logo");

// Vier Kategorien erstellen
const katWeb = new Kategorie("Web-Entwicklung", imgWeb);
const katJava = new Kategorie("Java-Programmierung", imgJava);
const katCSS = new Kategorie("CSS & Styling", imgCSS);
const katDB = new Kategorie("Datenbanken", imgDB);

// Kategorien in einem Array verwalten
let alleKategorien = [katWeb, katJava, katCSS, katDB];

// Zwei Tutorials erstellen
const tut1 = new Tutorial(
  "Modernes CSS",
  "de",
  "CSS Flexbox und Grid",
  "01:30",
  new Date(),
  "url1",
  "code1",
  imgCSS,
);
const tut2 = new Tutorial(
  "Java für Anfänger",
  "de",
  "Klassen und Objekte",
  "02:15",
  new Date(),
  "url2",
  "code2",
  imgJava,
);

// Kapitel zum ersten Tutorial hinzufügen (mindestens 3)
tut1.fuegeKapitelHinzu(new Kapitel("Einleitung", "Was ist CSS?", "00:10"));
tut1.fuegeKapitelHinzu(new Kapitel("Flexbox", "Layouts bauen", "00:50"));
tut1.fuegeKapitelHinzu(new Kapitel("Grid", "Komplexe Layouts", "00:30"));

// Kapitel zum zweiten Tutorial hinzufügen (mindestens 3)
tut2.fuegeKapitelHinzu(new Kapitel("Start", "Installation", "00:15"));
tut2.fuegeKapitelHinzu(new Kapitel("Grundlagen", "Variablen", "01:00"));
tut2.fuegeKapitelHinzu(new Kapitel("Klassen", "Objektorientierung", "01:00"));

// Den Tutorials die passenden Kategorien zuordnen
tut1.fuegeKategorieHinzu(katWeb);
tut1.fuegeKategorieHinzu(katCSS);
tut2.fuegeKategorieHinzu(katJava);

// Tutorials in einem Array verwalten
let alleTutorials = [tut1, tut2];

function getTutorialsZuKategorie(kategorieName) {
  return alleTutorials.filter((tutorial) => {
    return tutorial.kategorien.some((kat) => kat.name === kategorieName);
  });
}

module.exports = {
  alleKategorien: alleKategorien,
  alleTutorials: alleTutorials,
  getDauerInStundenUndMinuten: getDauerInStundenUndMinuten,
  getTutorialsZuKategorie: getTutorialsZuKategorie,
  Tutorial: Tutorial
};