

const array_w = ["Tilak","Kshitish","Him","Shubham","Sujan","Devil"];
const array_x = [11,2,6,8,2,21];

console.log(array_w.at(0));
console.log(array_w.at(1));

console.log("This is join metho of array: -> "+array_w.join()); //Tilak,Kshitish,Him,Shubham,Sujan,Devil

array_w.push("Royal");
console.log(array_w.join()); //Tilak,Kshitish,Him,Shubham,Sujan,Devil,Royal
array_w.pop()                //Remove the end of the element
console.log(array_w.join()); 
console.log(array_x.sort());