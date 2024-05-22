const newsService = require("../services/newsService");

class NewsController {

    async createNews(req,res) {
        try{
            const {id,title,image,details} = req.body;
            const saveNews = await newsService.createNews(id,title,image,details);
            res.json(saveNews);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllNews(req, res){
        try{
              const news = await newsService.getAllNews();
              res.json(news);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  NewsController();