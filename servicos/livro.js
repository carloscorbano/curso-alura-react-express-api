const fs = require("fs");

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
    const livros = getTodosLivros();
    const livroFiltrado = livros.filter((livro) => livro.id === id)[0];
    return livroFiltrado;
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const novaListaDeLivros = [ ...livros, livroNovo ];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);

    //essa operação altera apenas os campos presentes em modificações, alterando o objeto
    //livrosAtuais[indiceModificado] apenas com os campos que estão em modificações;
    //exemplo: se modificacoes conter apenas o campo 'nome', somente o 'nome' será alterado
    //(se o campo não existir ele cria um novo)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };
    livrosAtuais[indiceModificado] = conteudoMudado;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

function deletaLivro(id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));

    const livrosFiltrados = livrosAtuais.filter(livro => livro.id !== id);

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}