const { uuidv4 } = require("uuid");

/**
 * UUID Helper Class
 */
class UUID {
  /**Generate an UUID asynchronously
   * @returns {String} - The generated UUID
   */
  async generateAsync() {
    return new Promise((resolve, reject) => {
      resolve(uuidv4());
    });
  }
  /**Generates a UUID synchronously
   * @returns {String} - The generated UUID
   */
  generateSync() {
    return uuidv4();
  }
  /**Generates multiple UUIDs asynchronously
   * @param {Number} amount - The amount of UUIDs to generate
   * @returns {Array} - An array of generated UUIDs
   */
  async generateMultiple(count) {
    return new Promise((resolve, reject) => {
      resolve(
        Array(count)
          .fill(0)
          .map(() => uuidv4())
      );
    });
  }
}

module.exports = UUID;
