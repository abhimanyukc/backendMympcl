const teamMemberService = require("../services/teamMemberService");

class TeamMemberController {

    async createTeamMember(req,res) {
        try{
            const teamMembers = req.body;
            const saveTeamMember = await teamMemberService.createTeamMember(teamMembers);
            res.json(saveTeamMember);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllTeamMembers(req, res){
        try{
              const teamMembers = await teamMemberService.getAllTeamMembers();
              res.json(teamMembers);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  TeamMemberController();