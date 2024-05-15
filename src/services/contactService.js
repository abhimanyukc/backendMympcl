const Contact = require("../models/contact");

class ContactService {
       
    async createContact(name, email, subject, message) {
        const newContact = new Contact({ name, email, subject, message});
        return await newContact.save()
    }
   

};

module.exports = new ContactService();