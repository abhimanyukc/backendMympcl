const branchService = require("../services/branchService");

class BranchController {

    async createBranch(req,res) {
        try{
            const branches = req.body;
            const saveBranch = await branchService.createBranch(branches);
            res.json(saveBranch);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllBranches(req, res){
        try{
              const branches = await branchService.getAllBranches();
              res.json(branches);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  BranchController();