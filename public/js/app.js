console.log('app.js is geladen!');
const titel = document.querySelector('#titel');

console.log(`waarde van titel: ${titel.value}`);

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`waarde van titel: ${titel.value}`);
});