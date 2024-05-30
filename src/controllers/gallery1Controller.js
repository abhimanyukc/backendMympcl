const gallery1Service = require("../services/gallery1Service");

class Gallery1Controller {

    async createGallery1(req,res) {
        try{
            const galleries1 = req.body;
            const saveGallery1 = await gallery1Service.createGallery1(galleries1);
            res.json(saveGallery1);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllGalleries1(req, res){
        try{
              const galleries1 = await gallery1Service.getAllGalleries1();
              res.json(galleries1);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  Gallery1Controller();