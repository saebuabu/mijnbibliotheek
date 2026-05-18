const express = require('express');
const app     = express();
const PORT    = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
 <h1>Welkom bij Mijn Bibliotheek</h1>
 <p>Dit is de startpagina van jouw bibliotheekapplicatie.</p>
 <a href="/dashboard">Ga naar Dashboard</a>
    `);
});


app.get('/dashboard', (req, res) => {
    res.send(`
 <h1>Dashboard</h1>
 <p>Hier kun je al je boeken beheren en bekijken.</p>
 <a href="/">Terug naar Startpagina</a>
    `);
    });

        


// Stap 3: Server starten
app.listen(PORT, () => {
    console.log(`✅ Server draait op http://localhost:${PORT}`);
});