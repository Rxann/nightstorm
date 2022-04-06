const { uuidv4 } = require("uuid");

class UUID {
  async generateAsync() {
    return new Promise((resolve, reject) => {
      resolve(uuidv4());
    });
  }
  generateSync() {
    return uuidv4();
  }

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
