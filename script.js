const showPassword = () => {
  const numberInField = null;

  return numberInField;
}

const generatePassword = (size) => {
  if (size === null) {
    return 'Quantidade de caracteres não definida.';
  }
  const arrayNewPass = [];
  let newPass = null;
  const possibleCharacter = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()[]{}_-+';

  for (let index = 0; index < size; index += 1) {
    let newNumber = Math.floor(Math.random() * possibleCharacter.length);
    let randomCaps = Math.floor(Math.random() * 2);
    newNumber = possibleCharacter[newNumber].toString();
    if (randomCaps) {
      newNumber = newNumber.toUpperCase();
    };
    arrayNewPass.push(newNumber);
  }
  newPass = arrayNewPass.join('');
  return newPass;
};