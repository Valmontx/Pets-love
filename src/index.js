import validator from './validator.js';

const btnAbrirModal =
    document.querySelector("#btn-abrir-modal");
const modal =
    document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
    modal.showModal();

let verifica = document.getElementById('btnValidate');
    

        verifica.addEventListener("click", () => {
        // let message="";
        let newNum = document.getElementById('cardNumber').value;
        let validation = document.getElementById('validar');
        
        
        if (validator.isValid(newNum) === true) {
            //  message = "Su tarjeta es valida :)"
           alert('Su tarjeta '  + validator.maskify(newNum) + ' es valida :)')

        } else {

            alert('Su tarjeta NO es valida, intente de nuevo :(')

            //message= "su tarjeta es invalida :("
        }

        // validation.textContent= message;
        validation.textContent = validator.maskify(newNum);
        
    })


});























