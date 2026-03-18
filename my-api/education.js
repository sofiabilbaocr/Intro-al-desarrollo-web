const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3002;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let education = [
  { id: 1, school: 'UFM', degree: 'Ingeniería en CS', startYear: 2025, endYear: 2029, details: 'Pensum completo con minor en ML y Finanzas' },
  { id: 2, school: 'Coursera', degree: 'Full Stack Development', startYear: 2024, endYear: 2024, details: 'Certificado profesional de Meta' },
  { id: 3, school: 'Colegio Monte Maria', degree: 'Bachillerato en Ciencias y Letras', startYear: 2011, endYear: 2024, details: 'Graduada con honores' },
];

let nextId = 4;

// GET / - Bienvenida
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Educación' });
});

// GET /education - Ver todos los registros
app.get('/education', (req, res) => {
  res.json(education);
});

// GET /education/:id - Ver un registro específico
app.get('/education/:id', (req, res) => {
  const record = education.find(e => e.id === parseInt(req.params.id));

  if (!record) {
    return res.status(404).json({ error: 'Registro de educación no encontrado' });
  }

  res.json(record);
});

// POST /education - Crear un registro
app.post('/education', (req, res) => {
  const { school, degree, startYear, endYear, details } = req.body;

  if (!school || !degree) {
    return res.status(400).json({ error: 'Los campos "school" y "degree" son requeridos' });
  }

  const newRecord = {
    id: nextId++,
    school,
    degree,
    startYear: startYear || null,
    endYear: endYear || null,
    details: details || '',
  };

  education.push(newRecord);
  res.status(201).json(newRecord);
});

// PATCH /education/:id - Actualizar un registro
app.patch('/education/:id', (req, res) => {
  const index = education.findIndex(e => e.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Registro de educación no encontrado' });
  }

  education[index] = { ...education[index], ...req.body };
  res.json(education[index]);
});

// DELETE /education/:id - Eliminar un registro
app.delete('/education/:id', (req, res) => {
  const index = education.findIndex(e => e.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Registro de educación no encontrado' });
  }

  const deleted = education.splice(index, 1);
  res.json({ message: 'Registro eliminado', record: deleted[0] });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})