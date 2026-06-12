function toonBoeken() {
  const boeken = JSON.parse(localStorage.getItem('mijn-boeken')) || [];

  const lijst = document.querySelector('#boeken-lijst');

  let htmlLijst = '';
  boeken.forEach(function(boek) {
    htmlLijst = htmlLijst + '<li><strong>' + boek.titel + '</strong> — ' + boek.auteur + '</li>';
  });
  lijst.innerHTML = htmlLijst;
}

toonBoeken();
