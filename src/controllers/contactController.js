const contactService = require("../services/contactService");

class ContactController {

    async createContact(req,res) {
        try{
            const {name, email, subject, message} = req.body;
            const saveContact = await contactService.createContact(name, email, subject, message);
            res.json(saveContact);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }
};

module.exports =  new  ContactController();
