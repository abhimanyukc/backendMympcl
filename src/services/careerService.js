const Career = require("../models/career");

class CareerService {
       
    async createCareer(to, primaryText, dangerText1, dangerText2, userText1, userText2, arrowText) {
        const newCareer = new Career({ to, primaryText, dangerText1, dangerText2, userText1, userText2, arrowText});
        return await newCareer.save()
    }

    async  getAllCareers(){
        return await Career.find();
    }
};

module.exports = new CareerService();