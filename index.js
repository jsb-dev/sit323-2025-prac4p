import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

const validate = (req, res, next) => {
  try {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both a and b must be numbers');
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

app.post('/add', validate, (req, res) => {
  try {
    const { a, b } = req.body;
    const result = a + b;
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/subtract', validate, (req, res) => {
  try {
    const { a, b } = req.body;
    const result = a - b;
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/multiple', validate, (req, res) => {
  try {
    const { a, b } = req.body;
    const result = a * b;
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/divide', validate, (req, res) => {
  try {
    const { a, b } = req.body;
    const result = a / b;
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint Not Found' });
});

app.listen(port, () => {
  console.log(`Calculator Microservicce running on ${port}`);
});
