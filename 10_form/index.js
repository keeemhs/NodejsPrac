const express = require('express');
const app = express();
const PORT = 9000;

// body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// view engine
app.set("view engine", "ejs");
app.set('views', './views');

// router
app.post('/', (req, res) => {
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})