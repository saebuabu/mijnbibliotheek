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

const boeken = [
    { id: 1, titel: 'De Hobbit', auteur: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 2, titel: '1984', auteur: 'George Orwell', genre: 'Dystopie' },
    { id: 3, titel: 'Pride and Prejudice', auteur: 'Jane Austen', genre: 'Romantiek' }
];

app.get('/api/boeken', (req, res) => {
  res.json(boeken); // stuurt de array terug als JSON
});

// Stap 3: Server starten
app.listen(PORT, () => {
    console.log(`✅ Server draait op http://localhost:${PORT}`);
});