const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => res.send('Game API Running'));

app.use('/api/games', gameRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));