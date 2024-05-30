const gallery4Service = require("../services/gallery4Service");

class Gallery4Controller {

    async createGallery4(req,res) {
        try{
            const galleries4 = req.body;
            const saveGallery4 = await gallery4Service.createGallery4(galleries4);
            res.json(saveGallery4);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllGalleries4(req, res){
        try{
              const galleries4 = await gallery4Service.getAllGalleries4();
              res.json(galleries4);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  Gallery4Controller();