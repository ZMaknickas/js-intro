/*
OBJECT - objejtas(kitose kalbose siek tiek panasu 
i: hashmap, dictionary)
*/


const empty = {};
console.log(empty);

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(person);

// Sveiki, mano vardas X.
console.log(`Sveiki, mano vardas ${person['name']}.`);

// Man yra metu
console.log(`Man yra ${person['age']} metu`);

// Standartine sintakse
console.log(person.name);
console.log(person.age);
console.log(person.isMarried);

const demo = {
    color: 'red',
    5: 5,
    'is Married' : true, 
}

console.log(demo['color']);
console.log(demo['5']);
console.log(demo[5]);

const studentas = {
    Vrdas : 'Remigijus',
    Kursas : 1,
    Phone : [1111111111, 22222222],
    Tevai: 
    [
        {vardas: 'Jonas',
        age : 57}, 
        {vardas: Ona,
         age: 66,   
        }
    ]   
 
}