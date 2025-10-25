const Game = require('../models/Game');

exports.createGame = async (req, res, next) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();

    res.status(201).json({
      message: 'Game baru berhasil ditambahkan!',
      data: newGame
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllGames = async (req, res, next) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

exports.getGameById = async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      const error = new Error('Game tidak ditemukan');
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

exports.deleteGame = async (req, res, next) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);

    if (!deletedGame) {
      const error = new Error('Game tidak ditemukan');
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: 'Game berhasil dihapus' });
  } catch (error) {
    next(error);
  }
};

exports.updateGame = async (req, res, next) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedGame){
      const error = new Error('Game Tidak Ditemukan!');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: 'Game Berhasil Diperbarui!',
      data: updatedGame
    })
  } catch (error) {
    next(error);
  }
}