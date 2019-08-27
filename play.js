const person = {
    name: 'JP',
    age: 33,
    greet() {
        console.log('Hi, Im ' + this.name );
    }
};

const copiedPerson = {...person}; // pull out of array spread
console.log(copiedPerson);
// arrays
const hobbies = ['Sports', 'Cooking'];

const copiedArray = [...hobbies];  // spread

console.log(copiedArray);


const toArray =(...arg) =>{ // merge items rest operators
    return arg;
};

console.log(toArray(1,2,3,4,5));