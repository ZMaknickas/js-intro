function planet(id) {
return ['Mercury', 'Venus', 'Earth', 'Mars', 
'Jupiter', 'Uranus', 'Neptune', 'Pluto'][id-1];
}
console.log(planet(3));

const getPlanetName= id => ['Mercury', 'Venus', 'Earth', 'Mars', 
'Jupiter', 'Uranus', 'Neptune', 'Pluto'][--id];

console.log(getPlanetName(5));