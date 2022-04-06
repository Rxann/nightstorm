const { readFile, writeFile } = require("fs");

class File {
  constructor(path) {
    this.path = path;
  }

  async read() {
    return new Promise((resolve, reject) => {
      readFile(this.path, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  async write() {
    return new Promise((resolve, reject) => {
      writeFile(this.path, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}

module.exports = File;
