const name= 'JP';
let age = 33;
const hasHobbies = true;


age = 44;

const sumarizeUser = (userName, userAge, userHasHobby) => {
    return  ('Name is ' + 
              userName + 
              ' age is '+
              userAge + 
              ' has hobbies ' +
              userHasHobby
            );
}

console.log(sumarizeUser(name,age,hasHobbies));