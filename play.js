const person = {
    name: 'JP',
    age: 33,
    greet() {
        console.log('Hi, Im ' + this.name );
    }
};

//person.greet();

// arrays
const hobbies = ['Sports', 'Cooking'];

/* for( let hobby of hobbies){
    console.log(hobby);
} 

console.log(hobbies.map(hobby =>{
    return 'Hobby: ' + hobby
}));
console.log(hobbies); */

hobbies.push('Programming');

console.log(hobbies);