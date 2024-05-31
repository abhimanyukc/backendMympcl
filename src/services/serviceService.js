const Service = require("../models/service");

class ServiceService {
       
    async createService(services) {
        return await Service.insertMany(services);
    }
    async getAllServices(){
        return await Service.find();
    }
};

module.exports = new ServiceService();