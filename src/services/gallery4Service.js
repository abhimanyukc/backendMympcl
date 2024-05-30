const Gallery4 = require("../models/gallery4");

class Gallery4Service {
       
    async createGallery4(galleries4) {
        return await Gallery4.insertMany(galleries4);
    }

    async getAllGallery4(){
        return await Gallery4.find();
    }
};

module.exports = new Gallery4Service();