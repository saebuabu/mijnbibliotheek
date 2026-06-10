console.log('app.js is geladen!');
// eerste stap: elementen selecteren
const titel = document.querySelector('#titel');
const btn = document.querySelector('#btn');
const genre = document.querySelector('#genre');
const schrijver = document.querySelector('#schrijver');

// tweede stap: event listener toevoegen
btn.addEventListener('click', (event) => {
    // derde stap: default gedrag voorkomen
    event.preventDefault();
    // vierde stap: actie uitvoeren
    console.log(`submit button clicked!`);
    
    const boek = {
        id: Date.now(),
        titel: titel.value,
        genre: genre.value,
        schrijver: schrijver.value
    };

    console.log(boek);
    
    //omzetten naar string en opslaan in localStorage
    localStorage.setItem('boek', JSON.stringify(boek));
});

//voorbeeld input event listener, toont het aantal ingevoerde tekens in het titel veld
titel.addEventListener('input', () => {
    console.log(`Aantal tekens in titel: ${titel.value.length}`);
});

//voorbeeld  change event listener van de select, toont de geselecteerde waarde
genre.addEventListener('change', () => {
    console.log(`Geselecteerd genre: ${genre.value}`);
});


