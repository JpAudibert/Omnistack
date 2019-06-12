// configuração das dependências
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// criação da aplicação
const app = express();

// split do servidor, pra usar http e web socket
const server = require('http').Server(app);
const io = require('socket.io')(server);

// conexão com DB
mongoose.connect('mongodb+srv://DeusJP:Jp16052001@cluster0-vdseo.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

// uso do web socket
app.use((req, res, next)=>{
    req.io = io;

    next();
})

// permite acesso a api
app.use(cors());

// uso de imagens
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// uso de rotas
app.use(require('./routes'));

// configurando a porta que será utilizada
server.listen(3333);