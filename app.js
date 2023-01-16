const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res, next) => {
  console.log("Home");
  res.render('home', {
    name: 'Dino Elian'
  });
})
app.get('/about', (req, res, next) => {
  console.log("about");
  res.render('about');
})
app.get('/works', (req, res, next) => {
  console.log("works");
  res.render('works');
})

const port = 3000;
app.listen(port, () => console.log(`Aplication running at port ${port}`));
