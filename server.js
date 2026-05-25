const express = require('express');
const app     = express();
const PORT    = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
   res.render('index', { title: 'Home - Mijn Bibliotheek', appNaam: 'Mijn Bibliotheek' });
});


app.get('/dashboard', (req, res) => {
   res.render('dashboard', { title: 'Dashboard - Mijn Bibliotheek', appNaam: 'Mijn Bibliotheek' });
});

app.get('/toevoegen', (req, res) => {
   res.render('toevoegen', { title: 'Toevoegen', appNaam: 'Mijn Bibliotheek' });
});

// Stap 3: Server starten
app.listen(PORT, () => {
    console.log(`✅ Server draait op http://localhost:${PORT}`);
});