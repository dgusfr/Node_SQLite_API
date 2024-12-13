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

  async create(req, res) {
    try {
      const record = await this.entityService.createRecord(req.body);
      res.status(201).json(record);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await this.entityService.updateRecord(req.body, req.params.id);
      if (!updated) {
        return res.status(404).json({ error: 'Record not found' });
      }
      res.status(200).json({ message: 'Record updated' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await this.entityService.deleteRecord(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: 'Record not found' });
      }
      res.status(200).json({ message: 'Record deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const record = await this.entityService.getRecordById(req.params.id);
      if (!record) {
        return res.status(404).json({ error: 'Record not found' });
      }
      res.status(200).json(record);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;