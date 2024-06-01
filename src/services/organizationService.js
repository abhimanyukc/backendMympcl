const Organization = require("../models/organization");

class OrganizationService {
       
    async createOrganization(organizations) {
        return await Organization.insertMany(organizations);
    }

    async getAllOrganizations(){
        return await Organization.find();
    }
};

module.exports = new OrganizationService();