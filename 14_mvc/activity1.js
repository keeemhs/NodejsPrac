const express = require('express');
const app = express();
const PORT = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

const router = require('./routes/activity');
app.use('/', router);

//server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
