console.log('app.js is geladen!');
// eerste stap: elementen selecteren
const titel = document.querySelector('#titel');
const btn = document.querySelector('#btn');

// tweede stap: event listener toevoegen
btn.addEventListener('click', (event) => {
    // derde stap: default gedrag voorkomen
    event.preventDefault();
    // vierde stap: actie uitvoeren
    console.log(`submit button clicked!`);
});

//voorbeeld input event listener, toont het aantal ingevoerde tekens in het titel veld
titel.addEventListener('input', () => {
    console.log(`Aantal tekens in titel: ${titel.value.length}`);
});

//voorbeeld  change event listener van de select, toont de geselecteerde waarde
const genre = document.querySelector('#genre');
genre.addEventListener('change', () => {
    console.log(`Geselecteerd genre: ${genre.value}`);
});


