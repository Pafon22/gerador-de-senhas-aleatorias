const generatePassword = (size) => {
    // const arrayNewPass = [];
    //caracteres específicos
    // const possibleCharacter = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // toString(36) -> /[0-9][a-z]/ (index: 0 _ 35)


    let maior = -Infinity;
    let menor = Infinity;
    for (let index = 0; index < size; index += 1) {
        let newNumber = Math.floor(Math.random() * 36);
        if (maior < newNumber) {
            maior = newNumber
        } else if (menor > newNumber) {
            menor = newNumber;
        }
    }



    // newPass = newNumber.toString(36);
    // arrayNewPass.push(newNumber);
    return `Maior: ${maior} || Menor: ${menor}`;
};

for (let index = 0; index < 100; index += 1) {
    console.log(generatePassword(35));
}