const express = require('express');
const router = express.Router();

const gameController = require('../controllers/gameController');

router.post('/', gameController.createGame);

router.get('/', gameController.getAllGames);

router.get('/:id', gameController.getGameById);

router.delete('/:id', gameController.deleteGame);

router.put('/:id', gameController.updateGame);

module.exports = router;