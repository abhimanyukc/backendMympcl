const Department = require("../models/department");

class DepartmentService {
       
    async createDepartment(departments) {
        return await Department.insertMany(departments);
    }

    async getAllDepartments(){
        return await Department.find();
    }
};

module.exports = new DepartmentService();