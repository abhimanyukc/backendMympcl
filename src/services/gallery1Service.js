const Gallery1 = require("../models/gallery1");

class Gallery1Service {
       
    async createGallery1(galleries1) {
        return await Gallery1.insertMany(galleries1);
    }

    async getAllGalleries1(){
        return await Gallery1.find();
    }
};

module.exports = new Gallery1Service();