const Branch = require("../models/branch");

class BranchService {
       
    async createBranch(branches) {
        return await Branch.insertMany(branches);
    }

    async getAllBranches(){
        return await Branch.find();
    }
};

module.exports = new BranchService();