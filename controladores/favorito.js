const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId  } = require("./../servicos/favorito.js");

function getFavoritos(req, res) {
    try {
        const favoritos = getTodosFavoritos();
        res.send(favoritos);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id;
        if(insereFavorito(id)) {
            res.status(201);
            res.send('Favorito inserido com sucesso!');
        } else {
            res.status(304);
            res.send('Já contêm esse favorito.')
        }
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            deletaFavoritoPorId(id);
            res.send("Favorito deletado com sucesso!");
        } else {
            res.status(422);
            res.send("ID inválido.");
        }
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}