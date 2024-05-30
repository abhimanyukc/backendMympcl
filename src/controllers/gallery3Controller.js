const gallery3Service = require("../services/gallery3Service");

class Gallery3Controller {

    async createGallery3(req,res) {
        try{
            const galleries3 = req.body;
            const saveGallery3 = await gallery3Service.createGallery3(galleries3);
            res.json(saveGallery3);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllGalleries3(req, res){
        try{
              const galleries3 = await gallery3Service.getAllGalleries3();
              res.json(galleries3);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  Gallery3Controller();