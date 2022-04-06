const os = require("os");

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
  async platform() {
    return new Promise((resolve, reject) => {
      resolve(this.platform);
    });
  }
  async arch() {
    return new Promise((resolve, reject) => {
      resolve(this.arch);
    });
  }
  async release() {
    return new Promise((resolve, reject) => {
      resolve(this.release);
    });
  }
  async type() {
    return new Promise((resolve, reject) => {
      resolve(this.type);
    });
  }
  async hostname() {
    return new Promise((resolve, reject) => {
      resolve(this.hostname);
    });
  }
  async loadavg() {
    return new Promise((resolve, reject) => {
      resolve(this.loadavg);
    });
  }
  async totalmem() {
    return new Promise((resolve, reject) => {
      resolve(this.totalmem);
    });
  }
  async freemem() {
    return new Promise((resolve, reject) => {
      resolve(this.freemem);
    });
  }
  async cpus() {
    return new Promise((resolve, reject) => {
      resolve(this.cpus);
    });
  }
  async networkInterfaces() {
    return new Promise((resolve, reject) => {
      resolve(this.networkInterfaces);
    });
  }
  async uptime() {
    return new Promise((resolve, reject) => {
      resolve(this.uptime);
    });
  }
}

module.exports = OS;
