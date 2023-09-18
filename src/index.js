import validator from './validator.js';

const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const modal = document.querySelector("#modal");

 const btnCerrarModal = document.getElementById('btn-cerrar-modal');


btnAbrirModal.addEventListener("click", () => {
    modal.showModal();

btnCerrarModal.addEventListener('click', () =>{
     modal.close();
}) 

let verifica = document.getElementById('btnValidate');
    

        verifica.addEventListener("click", () => {
    
        let newNum = document.getElementById('cardNumber').value;
        let validation = document.getElementById('validar');
        
        
        if (validator.isValid(newNum) === true) {
        
           alert(' Thank you! your donation ' + validator.maskify(newNum) + ' has been sent 🐶🐱')

        } else {

            alert('Please enter a valid card number')
            modal.close()
        
        }

     
        // validation.textContent = validator.maskify(newNum);
        
    })


});








