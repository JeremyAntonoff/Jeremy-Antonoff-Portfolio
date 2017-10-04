const express = require('express');
const app = express();


app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))

app.use("/", function(req, res) {
  res.render('home')
});

app.listen(3000, function() {
  console.log('Server has started');
});
