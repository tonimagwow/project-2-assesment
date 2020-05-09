const express = require('express');
const app = express ();
const mongoose = require ('mongoose');
const methodOverride  = require('method-override');
const todoController = require("./controllers/todo.js");
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
app.use('/todo', todoController);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/basiccrud'
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
mongoose.connection.on('open' , ()=>{});

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
})