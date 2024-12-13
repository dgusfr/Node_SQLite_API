const dataSource = require('../../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRecords() {
    return dataSource[this.model].findAll();
  }

  async updateRecord(updatedData, id) {
    const updatedRecordsList = await dataSource[this.model].update(updatedData, {
      where: { id: id }
    });
    if (updatedRecordsList[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;
