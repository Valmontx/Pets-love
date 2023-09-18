const validator = {

  isValid: function (cardNumber) {
    let length = cardNumber.length;
    let contar = 0

    for (let i = 0; i < length; i++) {
      let currentNum = parseInt(cardNumber[i]); //cadena combertida a un entero 

      if ((i + 2) % 2 == 0) //posicion par

        if ((currentNum *= 2) > 9) { //operadores de asignacion 

          currentNum -= 9;
        } contar += currentNum;
      //  console.log('ejecucion for>>', contar,currentNum)
    }
    if (contar % 10 === 0) {
      return true
    } else {
      return false
    }
  },

  maskify: function (cardNumber) {

    let newNum = cardNumber.length;
    let mask = ""
    for (let i = 0; i < newNum - 4; i++) {
      mask += "#";
    }

    let cadenaOculta = mask + cardNumber.substring(newNum - 4, newNum);
    return cadenaOculta;

  }
};
//4551038290138341 visa 
//5261485053614216  mastercard

export default validator;
