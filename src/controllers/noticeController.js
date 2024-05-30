const noticeService = require("../services/noticeService");

class NoticeController {

    async createNotice(req,res) {
        try{
            const notices = req.body;
            const saveNotice = await noticeService.createNotice(notices);
            res.json(saveNotice);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllNotices(req, res){
        try{
              const notices = await noticeService.getAllNotices();
              res.json(notices);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  NoticeController();