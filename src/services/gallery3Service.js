const Gallery3 = require("../models/gallery3");

class Gallery3Service {
       
    async createGallery3(galleries3) {
        return await Gallery3.insertMany(galleries3);
    }

    async getAllGallery3(){
        return await Gallery3.find();
    }
};

module.exports = new Gallery3Service();