const locationService = require("../services/locationService");

class LocationController {

    async createLocation(req,res) {
        try{
            const {title, address, phone, email} = req.body;
            const saveLocation = await locationService.createLocation(title, address, phone, email);
            res.json(saveLocation);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllLocations(req, res){
        try{
              const locations = await locationService.getAllLocations();
              res.json(locations);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};
module.exports =  new  LocationController();