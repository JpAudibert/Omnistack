const express = require('express');
// upload de posts "multpart"
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

// criação da rota -> req (acessa informação) = require -> res = resposta
routes.post('/posts', upload.single('image'),PostController.store); // PARECE O LARAVEL NÉ NÃO???
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;