const fs = require('fs');

function getFiles(dir, files_) {
    files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (let i in files) {
        let name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

const result = getFiles(`${__dirname}/dir1`);

result.forEach(el => {
    fs.stat(el, (err, stat) => {
        if (err) console.log(err);
        if (stat.isFile()) {
            let fileNameArr = el.split('/');
            let fileName = fileNameArr[fileNameArr.length - 1]
            fs.rename(el, `${__dirname}/${fileName}`, err1 => {
                if (err) console.log(err);
            })
        }
    })
})
