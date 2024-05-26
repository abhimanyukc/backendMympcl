const Location = require("../models/location");

class LocationService {
       
    async createLocation(title, address, phone, email) {
        const newLocation = new Location({ title, address, phone, email});
        return await newLocation.save()
    }

    async getAllLocations(){
        return await Location.find();
    }
};

module.exports = new LocationService();