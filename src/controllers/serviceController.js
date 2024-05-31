const serviceService = require("../services/serviceService");

class ServiceController {

    async createService(req,res) {
        try{
            const services = req.body;
            const saveService = await serviceService.createService(services);
            res.json(saveService);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllServices(req, res){
        try{
              const services = await serviceService.getAllServices();
              res.json(services);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  ServiceController();