const Contact = require("../models/contact");

class ContactService {
       
    async createContact(name, email, subject, message) {
        const newContact = new Contact({ name, email, subject, message});
        return await newContact.save()
    }

    async getAllContacts(){
        return await Contact.find();
    }
};

module.exports = new ContactService();