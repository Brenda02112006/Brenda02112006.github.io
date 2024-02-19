const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const users = [
    { email: 'usuario1@example.com', senha: 'senha123' },
    { email: 'usuario2@example.com', senha: 'abc123' },
   
];

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perfil/:email', (req, res) => {
    const email = req.params.email;
    
    res.render('perfil', { email });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

   
    const user = users.find(user => user.email === email);

    if (!user || user.senha !== password) {
       
        return res.render('index', { error: 'Email ou senha incorretos' });
    }

    
    res.redirect(`/perfil/${email}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

