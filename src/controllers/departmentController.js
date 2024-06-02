const departmentService = require("../services/departmentService");

class DepartmentController {

    async createDepartment(req,res) {
        try{
            const departments = req.body;
            const saveDepartment = await departmentService.createDepartment(departments);
            res.json(saveDepartment);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllDepartments(req, res){
        try{
              const departments = await departmentService.getAllDepartments();
              res.json(departments);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  DepartmentController();