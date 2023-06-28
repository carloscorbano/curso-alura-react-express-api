const fs = require("fs");

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favoritos.json"));
}

function deletaFavoritoPorId(id) {
    const livros = JSON.parse(fs.readFileSync("favoritos.json"));
    const livrosFiltrados = livros.filter((livro) => livro.id !== id);

    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados));
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));

    if(favoritos.filter( livro => livro.id === id ).length > 0) {
        return false;
    } else {    
        const livroInserido = livros.find((livro) => livro.id === id);
        const novaListaFavoritos = [ ...favoritos, livroInserido ];
        
        fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos));
        return true;
    }
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}