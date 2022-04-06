const { faker } = require("@faker-js/faker");

class FakeInfo {
  constructor(fullinfo, gender, locale) {
    this.fi = fullinfo;
    if (gender != "male") {
      return "Gender has to be male or female";
    } else if (gender != "female") {
      return "Gender has to be male or female";
    }
    this.ge = gender;
    faker.locale = locale;
    faker.localeFallback = "en";
  }

  async generate() {
    if (!this.fi) {
      return {
        address: faker.address.city(),
        firstname: faker.name.firstName(this.ge),
        lastname: faker.name.lastName(this.ge),
        company: faker.company.companyName(),
        phonenumber: faker.phone.phoneNumber(),
      };
    } else {
      return {
        address: faker.address.city(),
        firstname: faker.name.firstName(this.fi),
        lastname: faker.name.lastName(this.fi),
        company: faker.company.companyName(),
        money: faker.finance.amount({ autoFormat: true }),
        musicgenre: faker.music.genre(),
        phonenumber: faker.phone.phoneNumber(),
        vehicle: faker.vehicle.vehicle(),
        uuid: faker.datatype.uuid(),
      };
    }
  }
}

module.exports = FakeInfo;
