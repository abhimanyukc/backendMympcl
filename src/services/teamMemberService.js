const TeamMember = require("../models/teamMember");

class TeamMemberService {
       
    async createTeamMember(teamMembers) {
        return await TeamMember.insertMany(teamMembers);
    }

    async getAllTeamMembers(){
        return await TeamMember.find();
    }
};

module.exports = new TeamMemberService();