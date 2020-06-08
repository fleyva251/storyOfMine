const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const keys = require('./keys')

const port = 6060;


const app = express();


app.use(express.static('dist'));

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send();
  });

  mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))
  
  const articlesRouter = require('./routes/articles');
  app.use('/articles', articlesRouter);
  
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Now listening on Port: ${port}`);
});