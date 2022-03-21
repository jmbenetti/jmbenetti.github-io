function myFunction() {
  var x = document.getElementById("mitopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validarForm() {
  var szNombre = document.getElementById("nombrecontacto").value;
  var szEmail = document.getElementById("email").value;
  var szAsunto = document.getElementById("asunto").value;
  var szMensaje = document.getElementById("mensaje").value;
  var szRegexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(szNombre == "") { 
      // bOk = false;
      alert("Debe ingresar su nombre y apellido");
      document.getElementById("nombrecontacto").focus();
      return false;
    }
  if(szNombre.length > 50) {
      alert("El campo nombre no puede tener más de 50 caracteres.")
      document.getElementById("nombrecontacto").focus();
      return false;
    }
  if(szEmail == "") {
      alert("El campo email no puede estar en blanco.");
      document.getElementById("email").focus();
      return false;
    }
  else
    {
      if (!szEmail.match(szRegexMail)) {
        alert("La dirección de mail es inválida.");
        document.getElementById("email").focus();
        return false;
      }
    }
  if(szAsunto== "") { 
      alert("Debe ingresar el asunto del mensaje.");
      document.getElementById("asunto").focus();
      return false;
    }
  if(szAsunto.length > 50) {
      alert("El campo asunto no puede tener más de 50 caracteres.")
      document.getElementById("asunto").focus();
      return false;
    }
  if(szMensaje== "") { 
      // bOk = false;
      alert("Debe ingresar un mensaje.");
      document.getElementById("asunto").focus();
      return false;
    }
  if(szMensaje.length > 300) {
      alert("El campo asunto no puede tener más de 300 caracteres.")
      document.getElementById("asunto").focus();
      return false;
    }
  return true;
}