const fs = require('fs');
const path = require('path');

const empty = [];


fs.readdir(__dirname, (err, files) => {
    if (err) console.log(err);
    files.shift()
    files.forEach(el => {
        console.log(el, "element*******");
        fs.readdir(path.join(__dirname, el,), (err, data) => {
            if (err) console.log(err);
            for (const item of data) {
                fs.readFile(path.join(__dirname, el, item), (err, response) => {
                    if (err) console.log(err);
                    empty.push(JSON.parse(response));
                    console.log('*************************************');
                })
            }
            setTimeout(() => {
                console.log(empty)
            }, 2000)
        })
    })
})







