const texts=['labas', 'rytas', 'Lietuva', 
    'duona', 'aviza', 'Zirnis', 'Anakonda'];
console.log(texts);

const text=['labas', 'rytas', 'duona', 'aviza'];
console.log(text);

texts.sort();
console.log(texts);
text.sort();
console.log(text);

const numbers=[10, 2, 8, 1, 12, 23, 4, 6]
numbers.sort((a,b)=> a-b);
console.log(numbers);
//nuo didziausio sort((a,b)=> b-a)

const people=[
    {name:'Ana', age:70},
    {name:'Henrikas', age:45},
    {name:'Waclaw', age:60},
];
//sort by age
people.sort((a,b)=>a.age-b.age);
console.log(people);
//sort by name ABC
people.sort((a,b)=>a.name>b.name ? 1:a.name===b.name?0:-1);
console.log(people);