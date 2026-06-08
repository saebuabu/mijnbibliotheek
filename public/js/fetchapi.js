async function haalBoekenOp() {
  const response = await fetch('/api/boeken'); // wacht op server
  const boeken = await response.json(); // wacht op JSON-omzetting
  console.log(boeken); // nu bruikbaar
}

// Aanroepen
//haalBoekenOp();

async function toonBoeken() {
  const response = await fetch('/api/boeken');
  const boeken = await response.json();

  const lijst = document.querySelector('#boeken-lijst');

  // Maak een <li> voor elk boek
  //lijst.innerHTML = boeken
  //  .map(boek => `<li><strong>${boek.titel}</strong> — ${boek.auteur}</li>`)
  //  .join('');

  let htmlLijst = '';
    // Alternatief: forEach loop
  boeken.forEach(function(boek) {
    htmlLijst = htmlLijst + '<li><strong>' + boek.titel + '</strong> — ' + boek.auteur + '</li>';
  });
  lijst.innerHTML = htmlLijst;

}

// Aanroepen
toonBoeken();