//! onkeydown cuando se presiona la tecla
  //! onkeypress cuan se presiona mitrala tecla
  //! onkeyup es cuado se levanta la tecla

const inputPassword = document.querySelector("#input-password");
const checkBoxShowPassword = document.querySelector("#checkbox-show-password");

const inputPasswordComfirm = document.querySelector("#input_password_confirm");


checkBoxShowPassword.onchange = function () {
  
  inputPassword.type = this.checked ? "text" : "password";}

  
const passwordd=inputPassword.value;
const confirmPassword=inputPasswordComfirm.value;
const textError = document.querySelector(".text-error");

const inputPhoneNumber=document.querySelector("#input_phone_number")

  inputPasswordComfirm.onkeyup = function () {
    const password = inputPassword.value;
    const confirmPassword = this.value;
    if (password === "") {
      alert("debe completar el password para poder escirbir en este input");
      this.value = "";
      inputPassword.focus();
      return;
    }
  

    if (password !== confirmPassword) {

      console.log("los passwords no son iguales");
      textError.style.display = "block";
    } else {
      textError.style.display = "none";
      console.log("si son iguales");
    }

  };



  inputPhoneNumber.onkeyup= function(){
   const valor=this.value;
   const caracteres=valor.split("");
   let newValue="";

   caracteres.forEach(caracter=> {
    if(!isNaN(Number(caracter))){
        newValue+=caracter;

    }
   });
   this.value=newValue;
  }





  inputPhoneNumber.onkeyup= function(){
   
    let newValue="";

    this.value.split("").forEach(caracter=> {
     if(!isNaN(Number(caracter))){
         newValue+=caracter;
 
     }
    });
    this.value=newValue;
   }
  //  inputPhoneNumber.onkeyup = function () {
  //   this.value = this.value
  //     .split("")
  //     .filter((caracter) => !isNaN(Number(caracter)))
  //     .join("");
  // };

const inputEmail=document.querySelector("#input_email");
const emailValidate=document.querySelector("#validate_email")



inputEmail.onkeyup =function(){

const  regex=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
regex.test( this.value)?
emailValidate.style.display = "none":
emailValidate.style.display = "block";
   

}

// /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;