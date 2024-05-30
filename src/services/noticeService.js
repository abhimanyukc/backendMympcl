const Notice = require("../models/notice");

class NoticeService {
       
    async createNotice(notices) {
        return await Notice.insertMany(notices);
    }

    async getAllNotices(){
        return await Notice.find();
    }
};

module.exports = new NoticeService();