const fs = require('fs')
const zlib = require('zlib')

const decompress = () => {
    const unzip = zlib.createUnzip()
    const input = fs.createReadStream('./textCOMPRESS.txt.gz')
    const output = fs.createWriteStream('./textDECOMPRESSED.txt')
    input.pipe(unzip).pipe(output)
}

decompress()