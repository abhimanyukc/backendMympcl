const Gallery = require("../models/gallery");

class GalleryService {
       
    async createGallery(galleries) {
        return await Gallery.insertMany(galleries);
    }

    async getAllGalleries(){
        return await Gallery.find();
    }
};

module.exports = new GalleryService();