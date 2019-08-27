const person = {
    name: 'JP',
    age: 33,
    greet() {
        console.log('Hi, Im ' + this.name );
    }
};

person.greet();