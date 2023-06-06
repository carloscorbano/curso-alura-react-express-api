const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    try {
        res.send("Olá mundo da Alura!");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
});

router.post('/', (req, res) => {
    res.send('Você fez uma requisição do tipo post');
});

module.exports = router;