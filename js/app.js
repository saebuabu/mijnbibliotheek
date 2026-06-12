console.log('app.js is geladen!');
// eerste stap: elementen selecteren
const titel = document.querySelector('#titel');
const genre = document.querySelector('#genre');
const schrijver = document.querySelector('#schrijver');
//voorbeeld input event listener, toont het aantal ingevoerde tekens in het titel veld
titel.addEventListener('input', () => {
    console.log(`Aantal tekens in titel: ${titel.value.length}`);
});

//voorbeeld  change event listener van de select, toont de geselecteerde waarde
genre.addEventListener('change', () => {
    console.log(`Geselecteerd genre: ${genre.value}`);
});


