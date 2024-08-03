const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

app.use(bodyParser.json());

app.use('/api', transactionRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
