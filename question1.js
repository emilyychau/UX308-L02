// Take a variable with distance in kilometres as input and output the same distance converted to miles

let km = 10;
let mi = km*0.621371; 
mi = Math.round(mi * 100) / 100;
console.log(`${km} kilometers is about ${mi} miles`);