const dns = require("dns/promises");
/**
 * DNS Helper Class
 */
class DNS {
  constructor(address) {
    this.adr = address;
  }
  /**
   * Resolves the given hostname to an IP address
   * @returns {Array<String>} - An array of resolved IP addresses
   */
  async resolve() {
    await dns.resolve(this.adr, "A", (err, addresses) => {
      if (err) {
        return "Error";
      } else {
        return addresses;
      }
    });
  }
  /**
   * Asynchronously reverses the given IP address
   */
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
