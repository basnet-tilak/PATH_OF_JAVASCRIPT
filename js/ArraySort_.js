
const array_w = ["Tilak","Kshitish","Him","Shubham","Sujan","Devil"];
const array_x = [7,13,9,8,3,2];

console.log(array_x.sort((a,b) => a - b));  // sort by ascesdening order

console.log(array_x.sort((a,b) => b - a));  // sort by descending order

console.log(Math.min.apply(null, array_x));  // find the min number from the array

console.log(Math.max.apply(null, array_x));