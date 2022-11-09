const validator = {

  isValid: function (cardNumber) {
    //  const cardNumber = '4083952015263';
    let length = cardNumber.length;
    // console.log(length);  
    let contar = 0

    for (let i = 0; i < length; i++) {
      let currentNum = parseInt(cardNumber[i]);


      if ((i + 2) % 2 !== 0) //posicion par
        if ((currentNum *= 2) > 9)
          currentNum -= 9;
      contar += currentNum;
     //  console.log('ejecucion for>>', contar,currentNum)
    }

    // console.log(contar)
    return (contar % 10) === 0


  },



  maskify: function (cardNumber) {
    // console.log('esto es card number', cardNumber)
    //const cardNumber = '4551038290138341' ej:
    let newNum = cardNumber.length;
    let mask = ""
    for (let i = 0; i < newNum - 4; i++) {
      mask += "#";
    }
    // console.log(mask);
    let cadenaOculta = mask + cardNumber.substring(newNum - 4, newNum);
    // console.log(cadenaOculta);
    return cadenaOculta;

  }


};
//4551038290138341 visa 
//5261 4850 5361 4216  mastercard

export default validator;
