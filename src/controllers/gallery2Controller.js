const gallery2Service = require("../services/gallery2Service");

class Gallery2Controller {

    async createGallery2(req,res) {
        try{
            const galleries2 = req.body;
            const saveGallery2 = await gallery2Service.createGallery2(galleries2);
            res.json(saveGallery2);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllGalleries2(req, res){
        try{
              const galleries2 = await gallery2Service.getAllGalleries2();
              res.json(galleries2);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  Gallery2Controller();