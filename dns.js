const dns = require("dns/promises");

class DNS {
  constructor(address) {
    this.adr = address;
  }
  async resolve() {
    await dns.resolve(this.adr, "A", (err, addresses) => {
      if (err) {
        return "Error";
      } else {
        return addresses;
      }
    });
  }

  async reverse() {
    await dns.reverse(this.adr, (err, hostnames) => {
      if (err) {
        return "Error";
      } else {
        return hostnames;
      }
    });
  }
}

module.exports = DNS;
