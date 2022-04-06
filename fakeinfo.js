const { faker } = require("@faker-js/faker");
/**
 * Faker Helper Class
 */
class FakeInfo {
  /**
   *
   * @param {boolean} fullinfo - Whether to generate full info or not
   * @param {String} gender - What gender the specified data should be. Inputs are male or female
   * @param {String} locale - What locale should the data be generated for
   *@constructor
   */
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
  /**
   *  Generates new fake data based on inputs
   * @returns {object}
   */
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
