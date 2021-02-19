const fs = require('fs');
const path = require('path');

const randomUsers1 = [
    {name: 'Alex', gender: 'male'},
    {name: 'Viktor', gender: 'male'},
    {name: 'Alina', gender: 'female'},
    {name: 'Oksana', gender: 'female'},
    {name: 'Igor', gender: 'male'}
];
// з 11 по 23 строчку просто створюю файлики з юзерами в двох папках 18_00 і 20_00
for (const user of randomUsers1) {
    fs.writeFile(path.join(__dirname, '18_00', `${user.name}.json`), JSON.stringify(user), err => {
        if (err) console.log(err);
        return;
    })
}
for (const user of randomUsers1) {
    fs.writeFile(path.join(__dirname, '20_00', `${user.name}.json`), JSON.stringify(user), err => {
        if (err) console.log(err);
        return;
    })
}

//тут витягую всіх чоловіків і перекидаю в папку 22_00
fs.readdir(path.join(__dirname, '18_00'), (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(el => {
        fs.readFile(path.join(__dirname, '18_00', el), (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            let user = JSON.parse(res);
            if (user.gender === "male") {
                fs.rename(path.join(__dirname, '18_00', `${user.name}.json`), path.join(__dirname, '20_00', `${user.name}.json`), err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                })
            }
        })
    })
})

//тут роблю всьо то саме тільки з папки 20_00 витягаю жінок і перекидую в 18_00
fs.readdir(path.join(__dirname, '20_00'), (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(el => {
        fs.readFile(path.join(__dirname, '20_00', el), (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            let user = JSON.parse(res);
            if (user.gender === "female") {
                fs.rename(path.join(__dirname, '20_00', `${user.name}.json`), path.join(__dirname, '18_00', `${user.name}.json`), err => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                })
            }
        })
    })
})


