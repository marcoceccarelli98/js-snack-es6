'use strict';

const teams = [
    {
        nome: 'Ternana',
        score: 0,
        fauls: 0
    },
    {
        nome: 'Perugia',
        score: 0,
        fauls: 0
    },
    {
        nome: 'Palermo',
        score: 0,
        fauls: 0
    },
    {
        nome: 'Pisa',
        score: 0,
        fauls: 0
    },
    {
        nome: 'Vicenza',
        score: 0,
        fauls: 0
    },
];

teams.forEach(e => {
    e.score = genRandomNum(1, 100);
    e.fauls = genRandomNum(1, 100);
});

const teamsAndFauls = teams.map(obj => ({
    nome: obj.nome,
    fauls: obj.fauls
}));

console.log(teams);

console.log(teamsAndFauls);

function genRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}