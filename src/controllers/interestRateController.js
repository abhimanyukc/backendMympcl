const interestRateService = require("../services/interestRateService");

class InterestRateController {

    async createInterestRates(req, res) {
        try {
             // Flatten the array of arrays into a single array of objects
             const interestRates = req.body.flat();
             // Insert the interest rates into the database
             const saveInterestRate = await interestRateService.createInterestRates(interestRates);
             res.json(saveInterestRate);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllInterestRates(req, res) {
        try {
            const interestRates = await interestRateService.getAllInterestRates();
            res.json(interestRates);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = new InterestRateController();
