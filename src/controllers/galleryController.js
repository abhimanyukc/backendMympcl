const galleryService = require("../services/galleryService");

class GalleryController {

    async createGallery(req,res) {
        try{
            const galleries = req.body;
            const saveGallery = await galleryService.createGallery(galleries);
            res.json(saveGallery);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllGalleries(req, res){
        try{
              const galleries = await galleryService.getAllGalleries();
              res.json(galleries);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  GalleryController();