const interestRateService = require("../services/interestRateService");

class InterestRateController {

    async createInterestRates(req, res) {
        try {
            const interestRates = req.body;
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
