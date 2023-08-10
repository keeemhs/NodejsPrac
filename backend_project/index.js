const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const 

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});