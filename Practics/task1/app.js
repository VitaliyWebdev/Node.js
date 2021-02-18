// // практичне
// // - у вас є масив юзрів (до 10), з такими полями наприклад - const users = [
// //     { name: 'olya', gender: 'female', age: 20 }
// //         ...
// // ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// // вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// // перед тим створити 4 папки - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// // і розподілити ваших юзерів саме по відповідних папках
const fs = require('fs');
const path = require('path');
const users = [
    {name: 'olya', gender: 'female', age: 20},
    {name: 'vika', gender: 'female', age: 16},
    {name: 'oleg', gender: 'male', age: 4},
    {name: 'inna', gender: 'female', age: 19},
    {name: 'petro', gender: 'male', age: 99},
    {name: 'ira', gender: 'female', age: 42},
    {name: 'Okrebn', gender: 'male', age: 55},
    {name: 'Igor', gender: 'male', age: 54},
];

users.forEach(el => {
    const {name, age, gender} = el;
    if (age > 20 && gender === 'male') {
        fs.writeFile(path.join(`${__dirname}`, 'manOlder20', `${name}.json`), JSON.stringify(el), err => {
            if (err) console.log(err);
        })
    } else if (age < 20 && gender === 'male') {
        fs.writeFile(path.join(`${__dirname}`, 'manYounger20', `${name}.json`), JSON.stringify(el), err => {
            if (err) console.log(err);
        })
    } else if (age > 20 && gender === 'female') {
        fs.writeFile(path.join(`${__dirname}`, `womenOlder20`, `${name}.json`), JSON.stringify(el), err => {
            if (err) console.log(err);
        })
    } else if (age < 20 && gender === 'female') {
        fs.writeFile(path.join(`${__dirname}`, `womenYounger20`, `${name}.json`), JSON.stringify(el), err => {
            if (err) console.log(err);
        })
    }


})














