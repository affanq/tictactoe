const express = require('express')
const router= express.Router()

let allGames = new Array();

router.get('/api', (req, res) => {
    res.send('Hello World!')
  });
  

  router.get('/api/games', (req, res) => {
  res.send(allGames)
})

router.post('/api/game', () => {
  const gameId = getRandomInt(100);
  const game = new Game(gameId, 'Game ' + gameId, 'in_progress');
  allGames.push(game);

  res.send(allGames)
})

router.post('/api/game/:gameId/move', (req, res) => {

  //req.params

})

function Game (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = router;