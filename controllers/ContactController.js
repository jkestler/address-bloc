const inquirer = require("inquirer");
// Contact is our Sequelize model
const Contact = require("../db/models").Contact;

module.exports = class ContactController {
   constructor() {
      this.contacts = [];
      this.addContactQuestions = [
         {
            type: "input",
            name: "name",
            message: "Contact's name - ",
            // run after question. if empty/false, ask again.
            validate(val) {
               return val !== "";
            }
         },
         {
            type: "input",
            name: "phone",
            message: "Contact's phone number - ",
            validate(val) {
               return val !== "";
            }
         }
      ];
   }

   // POST to the database
   addContact(name, phone) {
      // interacts with DB. rerturns an async Sequelize promise that must be resolved in our test using .then().
      return Contact.create({name, phone});
   }

 }