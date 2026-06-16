// Naam in header (alle pagina's)
const naam = document.getElementById('naam');
const opgeslagenNaam = localStorage.getItem('naam');
if (opgeslagenNaam) {
    naam.textContent = opgeslagenNaam;
}
naam.addEventListener('click', () => {
    const nieuweNaam = prompt('Voer je naam in:');
    if (nieuweNaam) {
        localStorage.setItem('naam', nieuweNaam);
        naam.textContent = nieuweNaam;
    }
});

// Index pagina: boekenlijst tonen
const boekenLijst = document.getElementById('boeken-lijst');
if (boekenLijst) {
    const boeken = JSON.parse(localStorage.getItem('mijn-boeken')) || [];
    boekenLijst.innerHTML = boeken.map(boek =>
        `<li><strong>${boek.titel}</strong> — ${boek.auteur}</li>`
    ).join('');
}

// Dashboard: aantal boeken
const aantalBoeken = document.getElementById('aantal-boeken');
if (aantalBoeken) {
    const boeken = JSON.parse(localStorage.getItem('mijn-boeken')) || [];
    aantalBoeken.textContent = boeken.length;
}

// Toevoegen pagina
const titel = document.getElementById('titel');
const genre = document.getElementById('genre');
const btn = document.getElementById('add-book-btn');

if (titel) {
    titel.addEventListener('input', () => {
        console.log(`Aantal tekens in titel: ${titel.value.length}`);
    });
}

if (genre) {
    genre.addEventListener('change', () => {
        console.log(`Geselecteerd genre: ${genre.value}`);
    });
}

if (btn) {
    const mijnBoeken = JSON.parse(localStorage.getItem('mijn-boeken')) || [];
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        const nieuwBoek = {
            id: Date.now(),
            titel: document.getElementById('titel').value,
            auteur: document.getElementById('schrijver').value,
            genre: document.getElementById('genre').value
        };
        mijnBoeken.push(nieuwBoek);
        localStorage.setItem('mijn-boeken', JSON.stringify(mijnBoeken));
        document.getElementById('titel').value = '';
        document.getElementById('schrijver').value = '';
        document.getElementById('genre').value = '';
        console.log('Boek opgeslagen:', nieuwBoek);
        console.log('Huidige boeken in localStorage:', mijnBoeken);
    });
}
