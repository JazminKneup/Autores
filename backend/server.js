const express = require('express');
const cors = require('cors');
require('./config/connection');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authorRoutes = require('./routes/authorRoutes');
app.use('/api/authors', authorRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
});
