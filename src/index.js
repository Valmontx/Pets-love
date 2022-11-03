import validator from './validator.js';
//abriendo ventana mergente//

const btnAbrirModal=
document.querySelector("#btn-abrir-modal");
const btnCerrarModal=
document.querySelector("#btn-cerrar-modal");
const modal=
document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();

    
    var btnValidate = document.getElementById('btnValidate')
    
    btnValidate.addEventListener('click',()=> { // Llamando al evento click  con el parámentro () mediante la funcion 
        let Num = document.getElementById ('cardNumber').value
        let arrNum = Num.split(""); //Separa 'objetos'-string a una array 
        console.log (arrNum)
        arrNum.reverse(); // Devuelve la reversa del array
        console.log(arrNum)
        let cardArrNum = arrNum.map((elemento)=> {
            return Number (elemento); //cambiando array a número
        
        });
        console.log(cardArrNum); //Muestra los argumentos en la consola web 

         });
         
         
}) 


 

//function validateTarjeta() {

//validator.isValid 


