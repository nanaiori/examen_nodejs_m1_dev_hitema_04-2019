module.exports.decodeHexFileContent = (filePath) =>  {
    var fs = require('fs');
        var readStream = fs.createReadStream('./io/input');
        readStream.pipe(process.stdout);
    return new Promise((resolve, reject) => {
       
        if (filePath === null) 
        resolve(filePath);
        else reject(null);

    });
}