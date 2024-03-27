
class MyClass {

  // This is constructor 
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
}
  
const myClass = new MyClass("Ford", 2014);
//document.getElementById("demo").innerHTML = "My car is " + .age() + " years old.";
console.log("Car name is "+ myClass.name + " & Date of Manufacture: " + myClass.year);