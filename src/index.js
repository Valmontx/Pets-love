import validator from './validator.js';

const btnAbrirModal =
    document.querySelector("#btn-abrir-modal");
const modal =
    document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
    modal.showModal();

    let verifica = document.getElementById('btnValidate');


    verifica.addEventListener("click", () => {

        let newNum = document.getElementById('cardNumber').value;
        //  console.log(newNum, '<<< new num')
             // alert('Completar los datos')
        
          if (validator.isValid(newNum) === true) {

            alert('Su tarjeta es Valida :)')
                       
        } else {

            alert('Su tarjeta no es Valida :(')
        }
    })
        // let maskify = validator.maskify(cardNumber.value);
       //  document.getElementById("textFinal").value = maskify;
    //  const newNum = document.getElementById("cardNumber");
    // oculta.addEventListener("click", () => {         

    //  validator.maskify(newNum.value);
    // console.log(oculta);

    // })
});























