const express = require('express');
const app     = express();
const Pokemon = require('./models/pokemon.js');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
app.use('/css', express.static(__dirname + '/css'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));




app.get('/', (req, res) => {
  res.send('This')
});




app.get('/pokemon', (req, res) => {
  res.render("index.ejs", {

    pokemon: Pokemon

  });
});
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs');
});
app.post('/pokemon', (req, res) => {


  Pokemon.push(req.body);

  res.redirect('/pokemon')
});

app.get('/pokemon/:index', (req, res) => {
  res.render('show.ejs', {

    pokemon:Pokemon[req.params.index],

  });
});





app.get('/pokemon/:id/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon: Pokemon[req.params.id],
    id: req.params.id
  });
});
app.delete('/pokemon/:id', (req, res) => {
  Pokemon.splice(req.params.id, 1);
  res.redirect('/pokemon');
});

app.put('/pokemon/:id', (req, res) => {

  Pokemon[req.params.id] = req.body;

  res.redirect('/pokemon')
})
app.listen(3000, () => {
  console.log('listening on port 3000')
})
module.exports = app;
