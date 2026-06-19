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
    function toonBoeken() {
        //haal de boeken op uit localStorage, of een lege array als er nog geen boeken zijn
        //parse heb ik nodig omdat localStorage alleen strings kan opslaan, en we willen een array van objecten
        const boeken = JSON.parse(localStorage.getItem('mijn-boeken')) || [];

        //maak de lijst van boeken in HTML en de delete-knop voor elk boek bevat een data-id attribuut met de id van het boek, zodat we weten welk boek we moeten verwijderen
        const tbody = boekenLijst.querySelector('tbody');
        tbody.innerHTML = boeken.map(boek =>
            `<tr data-id="${boek.id}">
                <td><strong>${boek.titel}</strong></td>
                <td>${boek.auteur}</td>
                <td>${boek.genre}</td>
                <td>${boek.gelezen ? '✅' : '❌'}</td>
                <td><button class="delete-btn" data-id="${boek.id}">🗑️</button></td>
            </tr>`
        ).join('');

        // Voeg event listeners toe aan de delete-knoppen
        tbody.querySelectorAll('.delete-btn').forEach(knop => {
            knop.addEventListener('click', () => {
                const id = Number(knop.dataset.id);
                const boeken = JSON.parse(localStorage.getItem('mijn-boeken')) || [];
                // Filter de boekenlijst om het boek met de opgegeven id te verwijderen en sla de nieuwe lijst op in localStorage
                localStorage.setItem('mijn-boeken', JSON.stringify(boeken.filter(b => b.id !== id)));
                toonBoeken();
            });
        });
    }

    toonBoeken();
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
            genre: document.getElementById('genre').value,
            gelezen: document.getElementById('gelezen').checked
        };
        mijnBoeken.push(nieuwBoek);
        localStorage.setItem('mijn-boeken', JSON.stringify(mijnBoeken));
        document.getElementById('titel').value = '';
        document.getElementById('schrijver').value = '';
        document.getElementById('genre').value = '';
        document.getElementById('gelezen').checked = false;
        console.log('Boek opgeslagen:', nieuwBoek);
        console.log('Huidige boeken in localStorage:', mijnBoeken);
    });
}
