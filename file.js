const { readFile, writeFile } = require("fs");
/**
 * File System Helper Class
 */
class File {
  /**
   *
   * @param {String} path - The path of the file
   * @constructor
   */
  constructor(path) {
    this.path = path;
  }
  /**
   * Reads the file asynchronously
   * @returns {Promise<String>}
   */
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
  /**
   * Write to the file asynchronously
   * @returns {Promise<String>}
   */
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
