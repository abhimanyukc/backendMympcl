

//remittanceController.js
//modifying remittanceController to get base url for the image in the response
const remittanceService = require("../services/remittanceService");

class RemittanceController {

    async createRemittance(req, res) {
        try {
            const remittances = req.body;
            const saveRemittance = await remittanceService.createRemittance(remittances);
            res.json(saveRemittance);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllRemittances(req, res) {
        try {
            const remittances = await remittanceService.getAllRemittances();
            const transformedRemittances = remittances.map(remittance => {
                return {
                    ...remittance._doc,
                    image: `${req.protocol}://${req.get('host')}/uploadsRemittance/${remittance.image}`
              //The req.protocol and req.get('host') are used to get the current protocol (http or https) and the host (domain name or IP with port) respectively.
                };
            });
            res.json(transformedRemittances);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = new RemittanceController();
