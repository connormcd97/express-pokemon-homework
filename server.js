const express = require('express');
const app     = express();
const Pokemon = require('./models/pokemon.js');
app.use('/css', express.static(__dirname + '/css'))



app.get('/', (req, res) => {
  res.send('This')
});



// Index route
// Shows all the fruits
app.get('/pokemon', (req, res) => {
  res.render("index.ejs", {

    pokemon: Pokemon

  });
});
app.get('/pokemon/:index', (req, res) => {
  res.render('show.ejs', {

    pokemon:Pokemon[req.params.index],

  });
});



app.listen(3000, () => {
  console.log('listening on port 3000')
})
module.exports = app;
