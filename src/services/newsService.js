const News = require("../models/news");

class NewsService {   
    async createNews(newses) {
        return await News.insertMany(newses);
    }

    async getAllNewses(){
        return await News.find();
    }
};

module.exports = new NewsService();