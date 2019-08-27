const person = {
    name: 'JP',
    age: 33,
    greet() {
        console.log('Hi, Im ' + this.name );
    }
};


const printName = ({ name}) => {
    console.log(name);
}

printName(person);

const {name, age} = person;

console.log(name, age);

// arrays
const hobbies = ['Sports', 'Cooking'];

const [hobbie1, hobbie2] = hobbies;

console.log(hobbie1, hobbie2);
