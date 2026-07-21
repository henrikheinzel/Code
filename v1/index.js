const http = require("http");
const persistence = require("./models/persistence.js");
const server = http.createServer((req, res) => {
  const queryParams = new URL(req.url, `http://${req.headers.host}`)
    .searchParams;
  const searchTerm = queryParams.get("search") || "";
  let suchTreffer = persistence.alleTutorials.filter((tutorial) =>
    tutorial.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  let resultList = "";

  if (suchTreffer.length > 0) {
    resultList = "<ul>";
    for (let tut of suchTreffer) {
      let datumString = tut.datum.toLocaleDateString("de-DE");
      resultList += `<li><a href="${tut.url}">${tut.name}</a> (${datumString})</li>`;
    }
    resultList += "</ul>";
  } else {
    resultList = "<p>Keine Tutorials gefunden!</p>";
  }

  const htmlResponse = `
  <!doctype html>
  <html lang="de">
    <head>
      <meta charset="UTF-8" />
      <title>Suchergebnisse</title>
      <link rel="stylesheet" href="../assets/css/styles.css" />
      <link rel="stylesheet" href="../assets/css/flexbox.css" />
    </head>
    <body>
      <header>
        <h1>Die Beste Tutorial-App</h1>
      </header>
      <nav class="hervorgehoben clearfix">
        <a href="list.html">Liste der Kategorien</a> |
        <a href="tutorials.html">Tutorials der Kategorie</a>
      </nav>
      <div id="maincontainer">
        <main>
          <h2>Tutorials mit: ${searchTerm}</h2>
          ${resultList}
        </main>
        <aside class="hervorgehoben">
          <h2>Neue Tutorials</h2>
          <p>Hier stehen dynamische Side-Infos...</p>
        </aside>
      </div>
      <footer>
        <hr />
        <small>&copy;2026 WebTech</small>
      </footer>
    </body>
  </html>
  `;

  // -- HTTP-Antwort an den Browser schicken --
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(htmlResponse);
});

// 3. Den Server auf Port 8844 starten (Schritt 1.3)
server.listen(8844, () => {
  console.log("Der Node.js Server läuft auf http://localhost:8844");
});
