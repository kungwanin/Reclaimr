const express = require('express');
const bodyParser = require('body-parser');
const protectedRoutes = require('./routes/protected');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Health check
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Protected routes
app.use('/api', protectedRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
