const fs = require('fs')
const zlib = require('zlib')

const compress = () => {
    const gzip = zlib.createGzip()
    const input = fs.createReadStream('./index.html')
    const output = fs.createWriteStream('./textCOMPRESS.txt.gz')
    input.pipe(gzip).pipe(output)
}

compress()