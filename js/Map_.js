
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

console.log(fruits.size);   
console.log(fruits);

fruits.set("apples",200); // set the new value of apples is 200 (changed)

console.log(fruits); //

console.log(fruits.get('apples'));  // 200

console.log(fruits.has('bananas')); // true 

fruits.forEach((value, key) => {
    console.log(key + ' ' + value);
});

console.log(fruits.entries())      // Entires key and value will read

