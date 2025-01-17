// Write a program to calculate the volume of a cylinder
// Start with a variable that contains the diameter of the end of the circle
// Add another variable that references the height in meters

let diameter = 20;
let height = 2;

let Vcylinder = Math.PI * ((diameter/2) ** 2) * height;
Vcylinder = Math.round(Vcylinder * 100) / 100;
console.log(`The volume of the cylinder is ${Vcylinder} m³`);