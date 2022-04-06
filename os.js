const os = require("os");
/**UUID Class */
class OS {
  constructor() {
    this.platform = os.platform();
    this.arch = os.arch();
    this.release = os.release();
    this.type = os.type();
    this.hostname = os.hostname();
    this.loadavg = os.loadavg();
    this.totalmem = os.totalmem();
    this.freemem = os.freemem();
    this.cpus = os.cpus();
    this.networkInterfaces = os.networkInterfaces();
    this.EOL = os.EOL;
    this.uptime = os.uptime();
  }
  /**Get the platform of the OS*/
  async platform() {
    return new Promise((resolve, reject) => {
      resolve(this.platform);
    });
  }
  /**Get the arch of the OS */
  async arch() {
    return new Promise((resolve, reject) => {
      resolve(this.arch);
    });
  }
  /**Get the OS Release */
  async release() {
    return new Promise((resolve, reject) => {
      resolve(this.release);
    });
  }
  /**Get the type of OS */
  async type() {
    return new Promise((resolve, reject) => {
      resolve(this.type);
    });
  }
  /**Get the hostname of the computer */
  async hostname() {
    return new Promise((resolve, reject) => {
      resolve(this.hostname);
    });
  }
  /**Get the average load time of the OS */
  async loadavg() {
    return new Promise((resolve, reject) => {
      resolve(this.loadavg);
    });
  }
  /**Get the total memory on the system */
  async totalmem() {
    return new Promise((resolve, reject) => {
      resolve(this.totalmem);
    });
  }
  /**Get the free memory on the system */
  async freemem() {
    return new Promise((resolve, reject) => {
      resolve(this.freemem);
    });
  }
  /**Get the CPU's and their details*/
  async cpus() {
    return new Promise((resolve, reject) => {
      resolve(this.cpus);
    });
  }
  /**Get the network Interfaces of the system */
  async networkInterfaces() {
    return new Promise((resolve, reject) => {
      resolve(this.networkInterfaces);
    });
  }
  /**Get the system uptime */
  async uptime() {
    return new Promise((resolve, reject) => {
      resolve(this.uptime);
    });
  }
}

module.exports = OS;
