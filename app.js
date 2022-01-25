const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');


let messages = [];
app.get('/', (req, res) => {
    
    res.render('index', { messages: messages })
})

app.post('/', (req, res) => {
    let msg = req.body.msg;
    console.log(msg);
    messages.push(msg);
    console.log(messages);
    res.redirect('/');

})
app.post('/del', (req, res) => {
    
    messages.pop();
   
    res.redirect('/');

})









const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});