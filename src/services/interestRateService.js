

// interestRateService.js
//service layer to handle nested structures
const InterestRate = require("../models/interestRate");

class InterestRateService {

    async createInterestRates(interestRates) {
        //createInterestRates(interestRates) 
        //This method takes a nested structure of interest rates and flattens it before storing it in the database.
        //It initializes an empty array formattedInterestRates.
        //Iterates over the interestRates object using Object.entries, which provides key-value pairs of category and rates.
        //For each category (e.g., "intdet31"), it iterates over the rates array, and
        // for each rate, it creates a new object that includes the category and the properties of rate.
       //Pushes these new objects into formattedInterestRates.
        const formattedInterestRates = [];
        for (const [category, rates] of Object.entries(interestRates)) {
            for (const rate of rates) {
                formattedInterestRates.push({ ...rate, category });
            }
        }
        //flattens array of data before storing it into database
        //Uses insertMany to insert the formattedInterestRates array into the MongoDB collection.
        return await InterestRate.insertMany(formattedInterestRates);
    }

    async getAllInterestRates() {
        const interestRates = await InterestRate.find();
        const groupedInterestRates = interestRates.reduce((acc, rate) => {
            //Reduces the flat array of interest rates into a nested structure grouped by category.
            if (!acc[rate.category]) {
                acc[rate.category] = [];
            }
            //Iterates over the fetched interestRates array. 
            //For each rate, it checks if the category already exists in groupedInterestRates. 
           // If not, it initializes an empty array for that category.

           //Pushes the product and percentage properties into the respective category array.
            acc[rate.category].push({ product: rate.product, percentage: rate.percentage });
            return acc;
        }, {});
        return groupedInterestRates;
        //The method returns an object where each key is a category, and the value is an array of interest rate objects.
    }
}

module.exports = new InterestRateService();

