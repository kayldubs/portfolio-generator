const fs = require('fs');
const { resolve } = require('path');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there is an error, reject the promise and send the error to the primises `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise doesnt accidentally execute the resolve()function as well
                return;
            }
            // if everything went well. resolve the promise and send out the successful data to the `then()` method
            resolve({
                ok: true,
                message: 'file created!'
            });
        });
    });
  };

  const copyFile = copyFile => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/index.html', copyFile, err => {
            if (err) {
                reject(err);
                return; 
            }
            resolve( {
                ok:true, 
                message: 'file copied'
            });
        });
    });
  }

  module.exports = { writeFile, copyFile, };