'use strict';

const bikes = [
    {
        nome: 'bmx',
        peso: 20,
    },
    {
        nome: 'mountain bike',
        peso: 25,
    },
    {
        nome: 'race bike',
        peso: 15,
    },
    {
        nome: 'city bike',
        peso: 18,
    }
];

let bikesFilter = [];

const minValue = bikes.map(bikes => bikes.peso).reduce((minValue, currentValue) => {
    if (currentValue < minValue) {
        return currentValue;
    }
    return minValue;
}, Infinity);

bikesFilter = bikes.filter(filter => filter.peso === minValue);

console.log(bikesFilter);

if (bikesFilter.length > 1) {
    console.log('Le bici che pesano meno sono:');
    bikesFilter.forEach(element => {
        console.log(`Nome : ${element.nome} | Peso : ${element.peso}`);
    });
} else if (bikesFilter.length == 1) {
    console.log('La bici che pesa meno è:');
    console.log(`Nome : ${bikesFilter[0].nome} | Peso : ${bikesFilter[0].peso}`);
}