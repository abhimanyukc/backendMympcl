const News = require("../models/news");

class NewsService {   
    async createNews(id, title, image, details) {
        const newNews = new News({ id, title, image, details});
        return await newNews.save()
    }

    async getAllNews(){
        return await News.find();
    }
};

module.exports = new NewsService();