const naam = document.getElementById('naam');

// Check of er een naam is opgeslagen in localStorage
const opgeslagenNaam = localStorage.getItem('naam');
if (opgeslagenNaam) {
    naam.textContent = opgeslagenNaam;
}

// Event listener voor het klikken  */
naam.addEventListener('click', () => {
    const nieuweNaam = prompt('Voer je naam in:');
    if (nieuweNaam) {
        //naam.textContent = nieuweNaam;
        localStorage.setItem('naam', nieuweNaam);
        // verandert de naam in de header 
        naam.textContent = nieuweNaam;
    }   
});