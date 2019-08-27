var name= 'JP';
var age = 33;
var hasHobbies = true;

function sumarizeUser(userName, userAge, userHasHobby){
    return  ('Name is ' + 
              userName + 
              ' age is '+
              userAge + 
              ' has hobbies ' +
              userHasHobby
            );
}

console.log(sumarizeUser(name,age,hasHobbies));