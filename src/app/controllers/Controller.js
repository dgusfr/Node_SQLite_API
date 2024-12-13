class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const listRecords = await this.entityService.getAllRecords(); 
      res.status(200).json(listRecords);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;
