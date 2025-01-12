const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Tymczasowa "baza" w pamięci
let announcements = [];

// Parsowanie JSON w ciele żądania
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serwuj pliki statyczne z folderu public
app.use(express.static('public'));

// Endpointy API
app.get('/api/announcements', (req, res) => {
  res.json(announcements);
});

app.post('/api/announcements', (req, res) => {
  const newItem = {
    id: announcements.length + 1,
    type: req.body.type,
    name: req.body.name,
    desc: req.body.desc,
    phone: req.body.phone,
    image: req.body.image,
    date: new Date().toLocaleString()
  };
  announcements.push(newItem);
  return res.status(201).json({ message: 'Dodano ogłoszenie', item: newItem });
});

app.delete('/api/announcements/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = announcements.findIndex(a => a.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Nie ma takiego ogłoszenia.' });
  }
  const removed = announcements.splice(index, 1);
  res.json({ message: 'Usunięto ogłoszenie', removed });
});

// Start serwera
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
