const fs = require('fs')

const readStream = fs.createReadStream('./t.txt');

const writeStream = fs.createWriteStream('./tNEW.txt')

readStream.on('data', (chunk) => {
    console.log('************')
    console.log(chunk)
})

readStream.on('data', (chunk) => {
    writeStream.write('\nчасть №1 начало\n')
    writeStream.write(chunk)
    writeStream.write('\nчасть №1 конец\n')
})