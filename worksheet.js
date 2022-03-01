const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader', 
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***======================MAP=====================***
//1. Get array of all names
const allNames = characters.map(character=>character.name)
console.log(allNames);

//2. Get array of all heights
const height = characters.map(character=>character.height);
console.log(height);

//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map((character)=>({
    name : character.name, 
    height: character.height,}));
console.log(nameAndHeight);

//4. Get array of all first names

const firstName = characters.map(character=>character.name.split(' ')[1]);

console.log(firstName);

//***===================REDUCE================================***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc,cur) => {
// console.log('The value of accumulator: ', acc);
// console.log('The value of currentValue: ', cur);

    return acc + cur.mass
}, 0);

console.log(totalMass);


//2. Get total height of all characters
const totalHeight = characters.reduce((acc, curr) => acc + curr.height, 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
const characterByEyeColor = characters.reduce((acc, curr) => {
    const color = curr.eye_color;
    if(acc[color]){
        acc[color] = acc[color] +1;
    }
    else{
        acc[color] = 1;
    }
    return acc;
}, {})

console.log(characterByEyeColor);

//4. Get total number of characters in all the character names
const totalNumberOfCharacters = characters.reduce((acc, curr) => acc + curr.name.length, 0);

console.log(totalNumberOfCharacters);

//***FILTER***
//1. Get characters with mass greater than 100
// const greater100Characters = characters.filter(character=>character.mass>100);
// console.log(greater100Characters);

//2. Get characters with height less than 200

// const shorterCharacters = characters.filter(character=>character.height< 200);
// console.log(shorterCharacters);


//3. Get all male characters
// const maleCharters = characters.filter(male=>male.gender === "male");
// console.log(maleCharters);

//4. Get all female characters
// const femaleCharters = characters.filter(female=>female.gender === "female");
// console.log(femaleCharters);

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
