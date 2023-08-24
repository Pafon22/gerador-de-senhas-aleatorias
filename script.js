const generatePassword = (size) => {
  const arrayNewPass = [];
  //caracteres específicos
  const possibleCharacter = 'abcdefghijklmnopqrstuvwxyz0123456789';
  // toString(36) -> /[0-9][a-z]/ (index: 0 _ 35)

  for (let index = 0; index < size; index += 1) {
    let newNumber = Math.floor(Math.random() * 36).toString(36);
    let randomCaps = Math.floor(Math.random() * 2);
    if(randomCaps){
      newNumber = newNumber.toUpperCase();
    };
    console.log('i: ' + index + ' || rC: ' + randomCaps + ' || nN: ' + newNumber);
    arrayNewPass.push(newNumber);
  }
console.log(arrayNewPass);


  // newPass = newNumber.toString(36);
  // arrayNewPass.push(newNumber);
};

for (let index = 0; index < 1; index += 1) {
  generatePassword(35);
}