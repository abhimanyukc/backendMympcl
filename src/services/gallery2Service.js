const Gallery2 = require("../models/gallery2");

class Gallery2Service {
       
    async createGallery2(galleries2) {
        return await Gallery2.insertMany(galleries2);
    }

    async getAllGalleries2(){
        return await Gallery2.find();
    }
};

module.exports = new Gallery2Service();