const generatePassword = (size) => {
  const arrayNewPass = [];
  //caracteres específicos
  const possibleCharacter = 'abcdefghijklmnopqrstuvwxyz0123456789';
  // toString(36) -> /[0-9][a-z]/ (index: 0 _ 35)

  for (let index = 0; index < 100; index += 1) {
    let newNumber = Math.floor(Math.random() * 36);
    let randomCaps = Math.floor(Math.random() * 2);
    arrayNewPass.push(newNumber.toString(36))
    console.log('index: ' + index + ' || randomCaps: '+ randomCaps + ' || ' + Boolean(randomCaps));
  }



  // newPass = newNumber.toString(36);
  // arrayNewPass.push(newNumber);
};

for (let index = 0; index < 1; index += 1) {
  generatePassword(35);
}