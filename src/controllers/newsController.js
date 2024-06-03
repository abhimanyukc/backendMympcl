const newsService = require("../services/newsService");

class NewsController {

    async createNews(req,res) {
        try{
            const newses = req.body;
            const saveNews = await newsService.createNews(newses);
            res.json(saveNews);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllNewses(req, res){
        try{
              const news = await newsService.getAllNewses();
              res.json(news);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  NewsController();