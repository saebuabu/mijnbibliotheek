// Haal de boeken op uit localStorage, of gebruik een lege array als er nog geen boeken zijn opgeslagen
const mijnBoeken = JSON.parse(localStorage.getItem('mijn-boeken')) || [];
console.log('Boeken geladen uit localStorage:', mijnBoeken);

const btn = document.getElementById('add-book-btn');
//event listener voor de opslaan knop
btn.addEventListener('click', function(event) {
    event.preventDefault(); // Voorkom dat het formulier wordt verzonden
    // Haal de waarden van de invoervelden op
    const titel = document.getElementById('titel').value;
    const auteur = document.getElementById('schrijver').value;
    const genre = document.getElementById('genre').value;
    // Maak een nieuw boek object
    const nieuwBoek = {
        id: Date.now(), // Unieke ID gebaseerd op de huidige tijd
        titel: titel, 
        auteur: auteur,
        genre: genre
    };
    // Voeg het nieuwe boek toe aan de boeken array
    mijnBoeken.push(nieuwBoek);
    // Sla de bijgewerkte boeken array op in localStorage
    localStorage.setItem('mijn-boeken', JSON.stringify(mijnBoeken));
    // Optioneel: Maak de invoervelden leeg na het opslaan
    document.getElementById('titel').value = '';
    document.getElementById('schrijver').value = '';
    document.getElementById('genre').value = '';
    console.log('Boek opgeslagen:', nieuwBoek);
    console.log('Huidige boeken in localStorage:', mijnBoeken);
});