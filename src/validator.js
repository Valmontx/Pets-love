const validator = {

  isValid: function (cardNumber) {
    //  const cardNumber = '4083952015263';
    let length = cardNumber.length;
    // console.log(length);  
    let contar = 0
    //Recorrer la posición de un  elemento en el array 
    for (let i = 0; i < length; i++) { // i++ es el valor de i antes del incremento
      let currentNum = parseInt(cardNumber[i]); //cadena combertida a uno entero 


      if ((i + 2) % 2 == 0) //posicion par
        if ((currentNum *= 2) > 9) //operadores de asignacion 
          currentNum -= 9;
          contar += currentNum;
      //  console.log('ejecucion for>>', contar,currentNum)
    }

      // console.log(contar)
         return (contar % 10) === 0


  },



  maskify: function (cardNumber) {
    
    //const cardNumber = '4551038290138341' 
    let newNum = cardNumber.length;
    let mask = ""
    for (let i = 0; i < newNum - 4; i++) {
      mask += "#";
    }
    
    let cadenaOculta = mask + cardNumber.substring(newNum - 4, newNum);
    //  console.log(cadenaOculta);
    return cadenaOculta;

  }
    

};
//4551038290138341 visa 
//5261485053614216  mastercard

export default validator;
