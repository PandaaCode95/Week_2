class Person {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = 150 + Math.round(Math.random() * 50);
        this.edad = 16 + Math.round(Math.random() * 50);
        this.peso = 40 + Math.round(Math.random() * 80);
        this.pelo = pelo();
        this.trabajo = trabajo();
        this.hobbies = hobbies();
        
        function pelo() {
            let pelos = ["azul", "rojo", "castaño", "rubio"]
            let pelo = pelos[Math.round(Math.random() * pelos.length)]
            return pelo;
        }
        function trabajo() {
            let trabajos = ["policia", "abogado", "medico", "programador"]
            trabajo = trabajos[Math.round(Math.random() * trabajos.length)]
            return trabajo;
        }
        function hobbies() {
            let hobbies = new Set();
            let options = ["Cantar", "Cocinar", "Bailar", "Gamer", "Peliculas", "Musica", "Guitarra"]
            hobbies.length = Math.round(Math.random() * 3)+1;
            for (let i = 0; i < hobbies.length; i++) {
                let index = Math.round(Math.random() * 7);
                hobbies.add(options[index])
            }
            return hobbies;
        }
    }
    calcularIMC() {
        let result = Math.round(this.peso / (this.altura * this.altura) * 10000)
        return result;
    }
    yearofBirth() {
        let result = 2022 - (this.edad);
        return result;
    }
    printAll(persona) {
        
        let res = "";
        for (let atribute in persona) {
            res = res + atribute + "-" + persona[atribute] + "\n ";
        }
        return res;
    }

}
let persona = new Person("Alvaro", "Montero");
let persona2 = new Person("Manuel", "Piris")
let persona3 = new Person("Jorge", "HT")
let persona4 = new Person("Ana", "Perez")
// let edad = edad => 16 +(Math.round(Math.random()*80))
// let peso = peso => 40 + (Math.round(Math.random()*80))
console.log(persona)
console.log(persona2)
console.log(persona3)
console.log(persona4)
console.log(persona4.calcularIMC())
console.log(persona3.yearofBirth())
console.log(persona.printAll(persona))

module.exports.Person = Person;