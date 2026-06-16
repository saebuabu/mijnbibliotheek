# Mijn Bibliotheek

Een Progressive Web App (PWA) waarmee je je persoonlijke boekenlijst kunt beheren. Boeken worden lokaal opgeslagen in de browser via `localStorage`.

Live: [https://beamish-meerkat-a962d9.netlify.app](https://beamish-meerkat-a962d9.netlify.app)

## Functionaliteit

- Boeken toevoegen met titel, schrijver en genre
- Boekenlijst bekijken op de homepagina
- Boeken verwijderen via de prullenbak-knop
- Aantal gelezen boeken zien op het dashboard
- Naam instellen in de header (wordt opgeslagen)

## Projectstructuur

```
├── index.html          # Homepagina met boekenlijst
├── dashboard.html      # Dashboard met statistieken
├── toevoegen.html      # Formulier om boek toe te voegen
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker
├── css/
│   └── style.css
├── js/
│   └── app.js          # Alle JavaScript
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

## PWA

Deze app is een Progressive Web App. Dat betekent dat hij installeerbaar is op je telefoon of computer en offline werkt.

Een PWA vereist twee dingen: een **manifest** en een **service worker**.

### manifest.json

Het manifest vertelt de browser hoe de app zich moet gedragen als hij geïnstalleerd wordt.

```json
{
  "name": "Mijn Bibliotheek",
  "short_name": "Bibliotheek",
  "description": "Beheer je persoonlijke boekenlijst",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2d6a4f",
  "lang": "nl",
  "icons": [...]
}
```

| Eigenschap | Uitleg |
|---|---|
| `name` | Volledige naam van de app |
| `short_name` | Naam onder het icoontje op het startscherm |
| `start_url` | Welke pagina opent als je de app start |
| `display: standalone` | App opent zonder adresbalk, ziet eruit als een native app |
| `theme_color` | Kleur van de statusbalk op mobiel |
| `icons` | Icoontjes voor op het startscherm (192px en 512px) |

### sw.js (Service Worker)

Een service worker is een script dat los van de pagina draait, als een tussenpersoon tussen de browser en het netwerk. Hij regelt caching zodat de app offline werkt.

#### Installatie

```js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});
```

Bij installatie worden alle bestanden in de cache opgeslagen. `skipWaiting()` zorgt dat de nieuwe service worker niet wacht tot alle tabbladen gesloten zijn, maar direct actief wordt.

#### Activatie

```js
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => clients.claim())
  );
});
```

Bij activatie worden oude caches verwijderd zodat verouderde bestanden niet blijven hangen. `clients.claim()` zorgt dat de nieuwe service worker direct controle overneemt over alle al-open pagina's, zonder dat je hoeft te herladen.

#### Fetch strategie

```js
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'document') {
    // HTML altijd van het netwerk ophalen, cache als fallback
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  } else {
    // CSS/JS uit cache, netwerk als fallback
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  }
});
```

Er worden twee strategieën gebruikt:

| Bestandstype | Strategie | Reden |
|---|---|---|
| HTML (pagina's) | Network-first | Altijd de nieuwste versie tonen |
| CSS / JS | Cache-first | Snel laden, netwerk als fallback |

#### Cache versie bijwerken

Elke keer als je bestanden aanpast moet je de `CACHE_NAME` ophogen (bijvoorbeeld van `bibliotheek-v5` naar `bibliotheek-v6`). Anders serveert de service worker nog de oude gecachte bestanden.

```js
const CACHE_NAME = 'bibliotheek-v5'; // ← verhoog dit bij elke wijziging
```

## localStorage

Alle boekgegevens worden opgeslagen in `localStorage` onder de sleutel `mijn-boeken` als een JSON-array:

```json
[
  { "id": 1718000000000, "titel": "De Ontdekking van de Hemel", "auteur": "Harry Mulisch", "genre": "roman" }
]
```

`localStorage` blijft bewaard tussen sessies maar is alleen beschikbaar in de browser waar de data is ingevoerd.
