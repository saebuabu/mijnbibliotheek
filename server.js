const express = require('express');
const app     = express();
const PORT    = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
          <!DOCTYPE html>
    <html lang="nl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mijn Bibliotheek</title>
      <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
      <header class="app-header">
        <h1>📚 Mijn Bibliotheek</h1>
        <nav class="hoofd-nav">
          <a href="/" class="actief">🏠 Home</a>
          <a href="/dashboard">📊 Dashboard</a>
        </nav>
      </header>
      <main>
        <h2>Welkom!</h2>
        <p>Dit is de homepagina.</p>
      </main>
      <script src="/js/app.js" defer></script>
    </body>
    </html>
        `);
});


app.get('/dashboard', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="nl">
    <head>
      <meta charset="UTF-8">
      <title>Dashboard – Mijn Bibliotheek</title>
      <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
      <header class="app-header">
        <h1>📚 Mijn Bibliotheek</h1>
        <nav class="hoofd-nav">
          <a href="/">🏠 Home</a>
          <a href="/dashboard" class="actief">📊 Dashboard</a>
        </nav>
      </header>
      <main>
        <h2>Dashboard</h2>
        <p>Hier komt later jouw data.</p>
      </main>
      <script src="/js/app.js" defer></script>
    </body>
    </html>
        `);
    });

        


// Stap 3: Server starten
app.listen(PORT, () => {
    console.log(`✅ Server draait op http://localhost:${PORT}`);
});