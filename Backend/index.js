const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://ilonaverenich:CiCvsYz7KuoJKMan@cluster0.gkclzup.mongodb.net/mongoDB-library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Ошибка соединения с MongoDB:'));
db.once('open', () => {
  console.log('Успешное соединение с MongoDB');
});


app.listen(1000, () => console.log('server has been started'));