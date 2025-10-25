const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const gameRoutes = require('./routes/gameRoutes');
require('dotenv').config();

