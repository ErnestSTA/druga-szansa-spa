/****************************************************************************/
/* 1. Baner cookies                                                         */
/****************************************************************************/
const cookieBanner = document.getElementById('cookie-banner');
if (localStorage.getItem('cookieAccepted')) {
  cookieBanner.style.display = 'none';
} else {
  document.getElementById('cookie-button').addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', 'true');
    cookieBanner.style.display = 'none';
  });
}

/****************************************************************************/
/* 2. Slider (baner) – lokalne pliki JPG                                    */
/****************************************************************************/
const bannerImages = [
  'img/pies01.jpg',
  'img/kot01.jpg',
  'img/front01.jpg'
];
let currentBannerIndex = 0;
const bannerImageElement = document.getElementById('banner-image');
const bannerDotsContainer = document.getElementById('banner-dots');

function initBanner() {
  bannerDotsContainer.innerHTML = '';
  bannerImages.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => {
      currentBannerIndex = i;
      updateBanner();
    });
    bannerDotsContainer.appendChild(dot);
  });
  updateBanner();
}

function updateBanner() {
  bannerImageElement.src = bannerImages[currentBannerIndex];
  const dots = bannerDotsContainer.querySelectorAll('span');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentBannerIndex);
  });
}

// (Opcjonalnie automatyczne przełączanie co 5 s)
// setInterval(() => {
//   currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
//   updateBanner();
// }, 5000);

initBanner();

/****************************************************************************/
/* 3. Obsługa języka (PL / EN)                                              */
/****************************************************************************/
function getLanguage() {
  return localStorage.getItem('lang') || 'pl';
}
function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  router(); // odśwież
}
document.getElementById('language-select').addEventListener('change', e => {
  setLanguage(e.target.value);
});
document.getElementById('language-select').value = getLanguage();

/****************************************************************************/
/* 4. Teksty w 2 językach                                                   */
/****************************************************************************/
const texts = {
  pl: {
    routes: {
      '/': `
        <h1>Witamy w Schronisku "Druga Szansa"</h1>
        <p>
          Warszawskie Schronisko "Druga Szansa" to miejsce, gdzie każdego dnia spełniają się małe cuda. Założone w 2008 roku przez grupę pasjonatów zwierząt, szybko stało się jednym z najważniejszych ośrodków pomagających bezdomnym psom i kotom w stolicy. Historia tego wyjątkowego miejsca jest pełna wzruszających momentów, niesamowitych przemian i ogromnej determinacji.
        </p>
        <p>
          Wszystko zaczęło się od marzenia Anny Kowalskiej, młodej weterynarz, która widziała, jak wiele zwierząt na warszawskich ulicach potrzebuje pomocy. Razem z kilkoma przyjaciółmi wynajęła stary budynek na obrzeżach miasta i zaczęła przyjmować pierwszych podopiecznych. Początki były trudne. Brakowało pieniędzy, sprzętu, a czasem nawet jedzenia dla zwierząt. Jednak miłość do czworonogów i wiara w to, że każde z nich zasługuje na szansę, napędzały ich do działania.
        </p>
        <p>
          Przełomowy moment dla schroniska nastąpił w 2012 roku, kiedy organizacja zdobyła środki z unijnego programu wsparcia dla inicjatyw społecznych. Dzięki temu możliwa była rozbudowa obiektu, stworzenie nowoczesnej lecznicy oraz budowa wybiegów dla psów. Wkrótce liczba adoptowanych zwierząt zaczęła rosnąć w imponującym tempie.
        </p>
        <p>
          Jednym z najbardziej pamiętnych przypadków była historia psa o imieniu Reks. Został znaleziony zimą 2015 roku w fatalnym stanie, porzucony w parku. Był wychudzony i miał poważne obrażenia. Dzięki opiece wolontariuszy i weterynarzy z "Drugiej Szansy" wrócił do zdrowia, a kilka miesięcy później znalazł dom u emerytowanego nauczyciela, który szukał towarzysza na stare lata. Dziś Reks jest symbolem przemiany i nadziei, jakie niesie schronisko.
        </p>
        <p>
          "Druga Szansa" to jednak nie tylko miejsce, gdzie zwierzęta znajdują schronienie. To także ośrodek edukacyjny, który organizuje warsztaty dla dzieci i młodzieży na temat odpowiedzialnej opieki nad zwierzętami. Każdego roku setki młodych ludzi odwiedzają schronisko, ucząc się, jak ważne jest traktowanie zwierząt z szacunkiem i miłością.
        </p>
        <p>
          Obecnie schronisko prowadzi również programy adopcyjne dla seniorów, którzy dzięki czworonożnym towarzyszom zyskują nową radość życia. Organizacja współpracuje z wieloma fundacjami i firmami, które wspierają ją finansowo i logistycznie.
        </p>
        <p>
          Historia "Drugiej Szansy" to dowód na to, że pasja, zaangażowanie i wspólna praca mogą odmienić los nie tylko zwierząt, ale także ludzi. Dzięki setkom wolontariuszy i darczyńców każdego dnia udaje się zmieniać świat na lepsze – jeden ogon machający z radości na raz.
        </p>
      `,
      '/o-nas': `
        <h1>O nas</h1>
        <p>
          Schronisko "Druga Szansa" zostało założone przez Ernesta i Izabelę, których pasja do pomagania zwierzętom stała się fundamentem tej organizacji. Ernest, z doświadczeniem w zarządzaniu projektami, i Izabela, będąca z wykształcenia weterynarzem, połączyli swoje umiejętności, by stworzyć miejsce, w którym każde zwierzę otrzymuje miłość i wsparcie. To dzięki ich wizji i determinacji "Druga Szansa" stała się domem tymczasowym dla setek psów i kotów oraz inspiracją dla wielu osób pragnących zmieniać świat na lepsze.
        </p>
      `,
      '/mapa': `
        <h1>Mapa dojazdu</h1>
        <p>Możesz odwiedzić nasze schronisko pod poniższym adresem (mapa niżej).</p>
        <div class="map-container">
                   <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.181383507984!2d21.003928815803948!3d52.22967597975706!2m3!1f0!2f0!3f0!3m2
                 !1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc9817262c17%3A0x744a38fe0a9a2dd6!2sPa%C5%82ac%20Kultury%20i%20Nauki!
                 5e0!3m2!1spl!2spl!4v1677760000000!5m2!1spl!2spl"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>

        </div>
      `,
      '/tworcy': `
        <h1>Twórcy strony</h1>
        <p>Ernest 160788 i Izabela 160872</p>
      `,
      '/ogloszenia': `
        <h1>Ogłoszenia adopcyjne</h1>
        <p>
          Poniżej znajdują się aktualne ogłoszenia.
          Aby dodać nowe – musisz być zalogowany jako administrator (#/login).
        </p>
        <div id="announcements-form-wrapper">
          <div class="form-row">
            <label for="animal-type">Rodzaj zwierzaka</label>
            <select id="animal-type">
              <option value="Pies">Pies</option>
              <option value="Kot">Kot</option>
              <option value="Inne">Inne</option>
            </select>
          </div>
          <div class="form-row">
            <label for="animal-name">Imię</label>
            <input type="text" id="animal-name" placeholder="Wpisz imię zwierzaka" />
          </div>
          <div class="form-row">
            <label for="animal-desc">Opis</label>
            <textarea id="animal-desc" rows="4" placeholder="Kilka słów o zwierzaku"></textarea>
          </div>
          <div class="form-row">
            <label for="animal-phone">Telefon kontaktowy</label>
            <input type="text" id="animal-phone" placeholder="123 456 789" />
          </div>
          <div class="form-row">
            <label for="animal-image">Zdjęcie zwierzaka</label>
            <input type="file" id="animal-image" accept="image/*" />
          </div>
          <button id="add-announcement-btn">Dodaj ogłoszenie</button>
        </div>
        <div id="announcements-list"></div>
      `,
      '/login': `
        <h1>Logowanie administratora</h1>
        <div class="form-row">
          <label for="admin-username">Nazwa użytkownika</label>
          <input type="text" id="admin-username" />
        </div>
        <div class="form-row">
          <label for="admin-password">Hasło</label>
          <input type="password" id="admin-password" />
        </div>
        <button id="admin-login-btn">Zaloguj</button>
        <p id="login-message"></p>
      `,
      '/logout': `<h1>Wylogowywanie...</h1>`,

      
      '/polityka': `
        <h1>Polityka prywatności</h1>
        <p>
          Niniejsza polityka prywatności opisuje zasady przetwarzania i ochrony danych
          osobowych użytkowników korzystających z usług schroniska „Druga Szansa”.
        </p>
        <p>
          1. Administratorem danych osobowych jest Schronisko "Druga Szansa".<br/>
          2. Dane przetwarzane są w celu świadczenia usług adopcyjnych, informacyjnych oraz realizacji
          celów statutowych schroniska.<br/>
          3. Każdy użytkownik ma prawo dostępu do swoich danych, ich poprawiania lub żądania usunięcia.<br/>
        </p>
        <p>
          Chronimy Twoje dane zgodnie z obowiązującymi przepisami i przykładamy szczególną wagę
          do zapewnienia ich poufności i bezpieczeństwa.
        </p>
      `,
      '/kontakt': `
        <h1>Kontakt</h1>
        <p>Skontaktuj się z nami w razie pytań lub chęci wsparcia:</p>
        <ul>
          <li>Telefon: 555 123 999</li>
          <li>E-mail: schronisko@drugaszansa.pl</li>
          <li>Adres: ul. Pomocna 7, 00-000 Warszawa</li>
        </ul>
        <p>Jesteśmy dostępni od poniedziałku do piątku w godzinach 9:00-17:00.</p>
      `,
      '/ochrona': `
        <h1>Ochrona danych osobowych</h1>
        <p>
          W naszym schronisku szczególnie dbamy o bezpieczeństwo danych osobowych.
          Wszystkie informacje są przechowywane i przetwarzane z zachowaniem należytej staranności
          oraz zgodnie z obowiązującymi przepisami, w tym RODO.
        </p>
        <p>
          Osoby mające dostęp do danych przechodzą regularne szkolenia,
          a systemy są cyklicznie aktualizowane i monitorowane.
        </p>
      `,
      '/datek': `
        <h1>Wpłać datek na karmę</h1>
        <p>
          Zachęcamy do wsparcia naszych podopiecznych poprzez darowizny na karmę.
          Nawet niewielka kwota może uratować życie zwierzaka!
        </p>
        <p>Numer konta bankowego: 00 1234 5678 9999 0000 1111</p>
        <p>Tytuł przelewu: "Darowizna na karmę - Druga Szansa".</p>
        <p>Dziękujemy za Twoje wsparcie!</p>
      `
    },
    noRoute: `<h1>404</h1><p>Nie znaleziono podstrony.</p>`,
    loginSuccess: 'Zalogowano pomyślnie! Przekierowanie...',
    loginFailed: 'Nieprawidłowe dane logowania.',
    loginAlready: 'Jesteś już zalogowany jako administrator.',
    fillFields: 'Proszę uzupełnić wszystkie pola formularza.',
    noAnnouncements: 'Brak ogłoszeń.',
    addedOn: 'Dodano'
  },

  en: {
    routes: {
      '/': `
        <h1>Welcome to "Second Chance" Shelter</h1>
        <p>
          Our mission is to give animals in need a second chance at a happy life.
          We have dogs, cats, and other animals looking for a loving home.
        </p>
      `,
      '/o-nas': `
        <h1>About Us</h1>
        <p>
          "Second Chance" Shelter was created to help abandoned or needy animals.
        </p>
      `,
      '/mapa': `
        <h1>Map</h1>
        <p>You can visit our shelter at the address below (map shown here).</p>
        <div class="map-container">
          <!-- iFrame if needed -->
        </div>
      `,
      '/tworcy': `
        <h1>Creators of the page</h1>
        <p>Ernest 160788 & Izabela 160872</p>
      `,
      '/ogloszenia': `
        <h1>Adoption Announcements</h1>
        <p>
          Below are the current announcements.
          To add new ones, you must be logged in as admin (#/login).
        </p>
        <!-- Reszta formularza analogicznie -->
      `,
      '/login': `
        <h1>Admin Login</h1>
        <!-- form fields for admin username/password, etc. -->
      `,
      '/logout': `<h1>Logging out...</h1>`,

      /* NOWE PODSTRONY W EN */
      '/polityka': `
        <h1>Privacy Policy</h1>
        <p>
          This privacy policy describes how "Second Chance" Shelter processes
          and protects personal data of our users.
        </p>
        <p>
          1. Data controller: "Second Chance" Shelter.<br/>
          2. Data is processed for adoption services, information, and statutory goals.<br/>
          3. Users have the right to access, correct, or request deletion of their data.<br/>
        </p>
        <p>
          We safeguard your personal information according to current regulations,
          ensuring confidentiality and security at all times.
        </p>
      `,
      '/kontakt': `
        <h1>Contact</h1>
        <p>Please get in touch for any questions or to support us:</p>
        <ul>
          <li>Phone: 555 123 999</li>
          <li>E-mail: shelter@secondchance.org</li>
          <li>Address: 7 Helping Street, 00-000 Warsaw</li>
        </ul>
        <p>We are available Monday to Friday, 9:00 AM - 5:00 PM.</p>
      `,
      '/ochrona': `
        <h1>Data Protection</h1>
        <p>
          Our shelter places great emphasis on the security of personal data.
          All information is stored and processed with due care and in compliance
          with relevant regulations, including GDPR.
        </p>
        <p>
          Staff members with data access receive regular training,
          and our systems are periodically updated and monitored.
        </p>
      `,
      '/datek': `
        <h1>Donate for Pet Food</h1>
        <p>
          We encourage you to support our animals by donating for pet food.
          Even a small amount can help save a life!
        </p>
        <p>Bank account number: 00 1234 5678 9999 0000 1111</p>
        <p>Payment title: "Donation for pet food - Second Chance".</p>
        <p>Thank you for your support!</p>
      `
    },
    noRoute: `<h1>404</h1><p>Page not found.</p>`,
    loginSuccess: 'Logged in successfully! Redirecting...',
    loginFailed: 'Invalid login data.',
    loginAlready: 'You are already logged in as an administrator.',
    fillFields: 'Please fill in all fields.',
    noAnnouncements: 'No announcements.',
    addedOn: 'Added on'
  }
};
/****************************************************************************/
/* 5. Router SPA (obsługa hash)                                             */
/****************************************************************************/
function router() {
  const lang = getLanguage();
  let hash = window.location.hash.substring(1) || '/';
  const routeContent = texts[lang].routes[hash] || texts[lang].noRoute;
  document.getElementById('app').innerHTML = routeContent;

  if (hash === 'login') {
    initLogin();
  } else if (hash === 'logout') {
    performLogout();
  } else if (hash === 'ogloszenia') {
    initAnnouncements();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

/****************************************************************************/
/* 6. Admin – stan isAdmin w localStorage                                   */
/****************************************************************************/
function isAdmin() {
  return localStorage.getItem('isAdmin') === 'true';
}
function performLogout() {
  localStorage.removeItem('isAdmin');
  window.location.hash = '/';
}

/****************************************************************************/
/* 7. Logowanie (ukryte w menu)                                             */
/****************************************************************************/
function initLogin() {
  const lang = getLanguage();
  const loginMessage = document.getElementById('login-message');
  const loginBtn = document.getElementById('admin-login-btn');

  if (isAdmin()) {
    loginMessage.style.color = 'green';
    loginMessage.textContent = texts[lang].loginAlready;
    return;
  }

  loginBtn.addEventListener('click', () => {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Proste dane logowania (admin / 1234)
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isAdmin', 'true');
      loginMessage.style.color = 'green';
      loginMessage.textContent = texts[lang].loginSuccess;
      setTimeout(() => {
        window.location.hash = '/ogloszenia';
      }, 1000);
    } else {
      loginMessage.style.color = 'red';
      loginMessage.textContent = texts[lang].loginFailed;
    }
  });
}

/****************************************************************************/
/* 8. Ogłoszenia – widoczne dla wszystkich, ale formularz tylko dla admina  */
/****************************************************************************/
async function initAnnouncements() {
  const lang = getLanguage();
  const formWrapper = document.getElementById('announcements-form-wrapper');
  const announcementsList = document.getElementById('announcements-list');
  const addBtn = document.getElementById('add-announcement-btn');

  // Ukryj/pokaż formularz w zależności od uprawnień
  if (!isAdmin()) {
    formWrapper.style.display = 'none';
  } else {
    formWrapper.style.display = 'block';
    addBtn.addEventListener('click', onAddAnnouncement);
  }

  // Na starcie pobierz listę z backendu
  await loadAnnouncements();

  // ====== Funkcje pomocnicze ======

  // Pobiera ogłoszenia z serwera (GET /api/announcements) i wyświetla
  async function loadAnnouncements() {
    announcementsList.innerHTML = 'Ładowanie ogłoszeń...';
    try {
      const resp = await fetch('/api/announcements');
      if (!resp.ok) {
        throw new Error('Błąd pobierania ogłoszeń');
      }
      const data = await resp.json();
      renderAnnouncements(data);
    } catch (err) {
      announcementsList.innerHTML = 'Błąd przy ładowaniu.';
      console.error(err);
    }
  }

  // Wyświetlanie ogłoszeń w HTML
  function renderAnnouncements(items) {
    announcementsList.innerHTML = '';
    if (items.length === 0) {
      announcementsList.innerHTML = `<p>${texts[lang].noAnnouncements}</p>`;
      return;
    }

    items.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('announcement-item');

      // Tylko admin widzi przycisk Usuń
      let removeBtnHTML = '';
      if (isAdmin()) {
        removeBtnHTML = `
          <button class="remove-announcement-btn" data-id="${item.id}">
            X
          </button>`;
      }

      div.innerHTML = `
        <h4>${item.name}
          <span class="announcement-category">(${item.type})</span>
        </h4>
        <img src="${item.image}" alt="${item.name}"
             style="max-width:100%; max-height:200px; display:block; margin-bottom:5px;">
        <div class="announcement-description">${item.desc}</div>
        <div>Tel: <strong>${item.phone}</strong></div>
        <div class="announcement-date">
          ${texts[lang].addedOn}: ${item.date}
        </div>
        ${removeBtnHTML}
      `;
      announcementsList.appendChild(div);
    });

    // Obsługa przycisku usuń (tylko jeśli admin)
    if (isAdmin()) {
      const removeBtns = announcementsList.querySelectorAll('.remove-announcement-btn');
      removeBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const id = e.target.getAttribute('data-id');
          if (confirm('Na pewno usunąć ogłoszenie?')) {
            await deleteAnnouncement(id);
          }
        });
      });
    }
  }

  // Dodawanie nowego ogłoszenia (POST /api/announcements)
  async function onAddAnnouncement() {
    const animalType = document.getElementById('animal-type').value;
    const animalName = document.getElementById('animal-name').value.trim();
    const animalDesc = document.getElementById('animal-desc').value.trim();
    const animalPhone = document.getElementById('animal-phone').value.trim();
    const animalImageInput = document.getElementById('animal-image');

    if (!animalType || !animalName || !animalDesc || !animalPhone || !animalImageInput.files[0]) {
      alert(texts[lang].fillFields);
      return;
    }

    // Konwersja pliku na Base64
    const file = animalImageInput.files[0];
    const reader = new FileReader();
    reader.onload = async (evt) => {
      const base64Img = evt.target.result;

      // Wyślij POST z danymi ogłoszenia
      try {
        const resp = await fetch('/api/announcements', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: animalType,
            name: animalName,
            desc: animalDesc,
            phone: animalPhone,
            image: base64Img
          })
        });
        if (!resp.ok) {
          throw new Error('Błąd przy dodawaniu ogłoszenia');
        }
        alert('Dodano ogłoszenie!');
        // Wyczyść pola
        document.getElementById('animal-name').value = '';
        document.getElementById('animal-desc').value = '';
        document.getElementById('animal-phone').value = '';
        animalImageInput.value = '';
        // Odśwież listę
        await loadAnnouncements();
      } catch (err) {
        console.error(err);
        alert('Nie udało się dodać ogłoszenia.');
      }
    };
    reader.readAsDataURL(file);
  }

  // Usuwanie ogłoszenia (DELETE /api/announcements/:id)
  async function deleteAnnouncement(id) {
    try {
      const resp = await fetch(`/api/announcements/${id}`, {
        method: 'DELETE'
      });
      if (!resp.ok) {
        throw new Error('Błąd przy usuwaniu ogłoszenia');
      }
      alert('Usunięto ogłoszenie');
      // Po usunięciu odśwież listę
      await loadAnnouncements();
    } catch (err) {
      console.error(err);
      alert('Nie udało się usunąć ogłoszenia.');
    }
  }
}
