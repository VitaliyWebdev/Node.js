// const fs = require('fs');
// const path = require('path');
//
// const empty = [];


// fs.readdir(__dirname, (err, files) => {
//     if (err) console.log(err);
//     files.shift()
//     files.forEach(el => {
//         console.log(el, "element*******");
//         fs.readdir(path.join(__dirname, el,), (err, data) => {
//             if (err) console.log(err);
//             for (const item of data) {
//                 fs.readFile(path.join(__dirname, el, item), (err, response) => {
//                     if (err) console.log(err);
//                     empty.push(JSON.parse(response));
//                     console.log('*************************************');
//                 })
//             }
//             setTimeout(() => {
//                 console.log(empty)
//             }, 2000)
//         })
//     })
// })


//const chalk = require('chalk') бібліотечка для кастомних шрифтів
const {promisify} = require('util')
const fs = require('fs')
const fsExtra = require('fs-extra')
const path = require('path');
const readFile = promisify(fs.readFile);


const func = async () => {
    try {
        const data = await fsExtra.readFile(__dirname)
        console.log(data);

    } catch (e) {
        console.log(e.message)
    }
}

func()


// console.log(process.cwd());

// // 2 - fs-extra
// const data = await fsExtra.readFile(path.join(process.cwd(), 'test.txt'))
// console.log(chalk.blue.bold.underline(data.toString()))
