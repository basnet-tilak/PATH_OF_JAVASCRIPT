
const person = {
    firsrtName: "Tilak",
    lastName: "Basnet",
    age: 33,
    address: "Nepal",
    fullName: function(){
        return this.firsrtName + " " + this.lastName;
    }
};
console.log(person.age);
console.log(person.firsrtName + ' ' + person.lastName)
console.log(person.fullName());

