const dataSource = require('../../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRecords() {
    return dataSource[this.model].findAll();
  }

  async createRecord(data) {
    return dataSource[this.model].create(data);
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

  async deleteRecord(id) {
    const deleted = await dataSource[this.model].destroy({ where: { id: id } });
    if (deleted === 0) {
      return false;
    }
    return true;
  }

  async getRecordById(id) {
    return dataSource[this.model].findByPk(id);
  }
}

module.exports = Services;