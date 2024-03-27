const person = {
    fullName: function(){
        return this.firstName +' '+ this.lastName;
    } 
}
const person1 = {
    firstName: "Tilak",
    lastName:  "Basnet"
}
const person2 = {
    firstName: "Kshitish",
    lastName: "Basnet"
}

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));