const {Person} = require("./Person.js");
const {Contact} = require("./contacts.js");
let amigo = new Person("Antonio", "Romero")
let conta = new Contact;
console.log(amigo)
console.log(amigo.printAll(amigo))
let contact1 = new Person("Manuel","Ibañez")
let contact2 = new Person("Placido","Domingo")
conta.arrayC.push(contact1)
conta.arrayC.push(contact2)
conta.printPerson();