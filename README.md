# Druga Szansa – Schronisko

## Autorzy / Zespół
- Ernest Stawicki (nr indeksu 160788)
- Izabela Czwarnóg(nr indeksu 160872)


## Opis
Projekt zaliczeniowy – aplikacja SPA (Single Page Application) wspierająca wyświetlanie i dodawanie ogłoszeń adopcyjnych w schronisku.

### Technologie
- **Frontend**: HTML, CSS, JavaScript (czysty, bez frameworka – do uproszczenia; w realnym projekcie można użyć React/Vue/Angular).
- **Backend**: Node.js + Express
- **Baza**: na razie brak – dane przechowywane w pamięci serwera (tablica). W praktyce można podpiąć MongoDB/MySQL.
- **Router**: Hash routing w `script.js` (SPA).  
- **REST API**: `GET /api/announcements`, `POST /api/announcements`, `DELETE /api/announcements/:id`
- **Hosting**: Można lokalnie (npm start) lub na Heroku/Render.com itp.

## Architektura
- Folder `public/` zawiera pliki statyczne (front).  
- `server.js` – serwer Express, który serwuje te pliki oraz obsługuje `api/announcements`.  
- `package.json` – zależności i skrypty.

## Uruchomienie
1. `npm install`
2. `npm start` (lub `npm run dev`)
3. Przeglądarka: `http://localhost:3000`

## Framework – Express
- Używamy `express` jako framework do tworzenia endpointów HTTP i serwowania plików statycznych.
- Ścieżki:
  - `/api/announcements` – `GET`, `POST`
  - `/api/announcements/:id` – `DELETE`
- `app.use(express.static('public'))` – wystawia pliki z `public/`.

## Problemy i ich rozwiązanie
- Brak bazy danych – na razie tablica w pamięci; proste prototypowanie.
- Wstawianie zdjęć – używamy Base64; w realnym rozwiązaniu można by przesyłać pliki na serwer lub do storage w chmurze.
- Hash routing – rozwiązane prostą funkcją `router()` i `window.location.hash`.
- Logowanie admina – przykładowe (admin / 1234), bez prawdziwego bezpieczeństwa (tylko localStorage).

...
