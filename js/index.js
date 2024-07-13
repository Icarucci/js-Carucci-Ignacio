// Delaración de Variables Body
const cuerpo = document.getElementById('dinamico');

// Delaración de Variables Header
const header = document.createElement('header');
header.setAttribute('id','header');
cuerpo.appendChild(header);
const cabecera = document.getElementById('header');
const navegacion = document.createElement('div'); 
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const img = document.createElement('img');
const LOGOORIGEN = document.createElement('a');

//Declaracíon de Variables Main
const mainer = document.createElement('main');
mainer.setAttribute('id','main');
cuerpo.appendChild(mainer);
const mainIndexID = document.getElementById('main');
const mainIndexDIV1 = document.createElement('div');
const txtMainIndex = document.createElement('h1');
const formIndex = document.createElement('form');
const txtMainIndexUsuario = document.createElement('h2');
const txtMainIndexContraseña = document.createElement('h2');
const inputUsuario = document.createElement('input');
const inputContraseña = document.createElement('input');
const mainIndexDIV1submit = document.createElement('div');
const mainIndexDIV2 = document.createElement('div');
const mainIndexDIV3 = document.createElement('div');
const ingresar = document.createElement('button');
const crearUsuario = document.createElement('button');

crearUsuario.setAttribute('id','open');
formIndex.setAttribute('id', 'logueo');

//Declaracíon de Variables footer
const footer = document.createElement('footer');
footer.setAttribute('id','footer');
cuerpo.appendChild(footer);
const txtFooter = document.createElement('h4');
footer.appendChild(txtFooter);
const TIME = new Date().getFullYear();


//Asignacion DOM al Body
cuerpo.style.backgroundColor = '#009ee3';
cuerpo.style.height = '100vh';


//Asignacion DOM al Header
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
LOGOORIGEN.href = '/';
LOGOORIGEN.appendChild(img);
img.src = 'assets/img/logo.png';
img.alt = 'Pago Mis Deudas Logo';
navegacion.appendChild(LOGOORIGEN);

//Asignacion DOM al Main

mainIndexID.appendChild(mainIndexDIV1);
mainIndexDIV1.appendChild(txtMainIndex);
mainIndexDIV1.appendChild(formIndex);
formIndex.appendChild(txtMainIndexUsuario);
formIndex.appendChild(inputUsuario);
formIndex.appendChild(txtMainIndexContraseña);
formIndex.appendChild(inputContraseña);
mainIndexID.appendChild(mainIndexDIV2);
mainIndexID.appendChild(mainIndexDIV3);
formIndex.appendChild(mainIndexDIV1submit);
mainIndexDIV1submit.appendChild(ingresar);
mainIndexDIV3.appendChild(crearUsuario);



// Estilos DOM
cuerpo.style.margin = '0px';
cabecera.style.backgroundColor = 'rgb(243, 243, 243)';
cabecera.style.textAlign = 'center';
navegacion.style.paddingTop = '10px';
navegacion.style.marginLeft = '10px';
mainIndexID.style.textAlign = 'center';
mainIndexID.style.margin = '30px';
mainIndexID.style.height = '80vh';
txtMainIndex.innerText = 'Ingresá tu usuario y contraseña de PagoMisDeudas';
txtMainIndex.style.marginBottom = '30px';
txtMainIndex.style.font = '30px';
txtMainIndex.style.color = 'black';
txtMainIndexUsuario.innerText = 'Usuario';
txtMainIndexUsuario.style.color = 'black';
txtMainIndexContraseña.innerText = 'Contraseña';
txtMainIndexContraseña.style.color = 'black';
inputUsuario.type = 'text';
inputUsuario.placeholder = 'Ingrese su usuario';
inputContraseña.type = 'password';
inputContraseña.placeholder = 'Ingrese su contraseña';
mainIndexDIV2.style.marginTop = '30px';
ingresar.style.webkitBorderRadius = '15px';
ingresar.innerText = 'INGRESAR';
ingresar.style.background = 'black';
ingresar.style.cursor = 'pointer';
ingresar.style.border = 'none';
ingresar.style.padding = '15px 15px';
ingresar.style.fontsize = '20px';
ingresar.style.fontWeight = 'bold';
ingresar.style.position = 'relative';
ingresar.style.color = 'white';
ingresar.style.marginTop = '30px';
ingresar.type = 'submit';
mainIndexDIV3.style.marginTop = '40px';
crearUsuario.style.background = 'white';
crearUsuario.style.webkitBorderRadius = '20px';
crearUsuario.innerText = 'Crear nuevo usuario';
crearUsuario.style.cursor = 'pointer';
crearUsuario.style.border = 'none';
crearUsuario.style.padding = '10px 10px';
crearUsuario.style.fontsize = '20px';
crearUsuario.style.fontWeight = 'bold';
crearUsuario.style.position = 'relative';
crearUsuario.style.color = '#009ee3';
txtFooter.innerHTML = 'PagoMisDeudas - ' + TIME + ' | by Ignacio Nicolás Carucci';
txtFooter.style.textAlign = 'center';
txtFooter.style.marginTop = '80';





//Modal crear usuario
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

close.style.marginTop = ('40px');
close.style.webkitBorderRadius = '20px';
close.style.cursor = 'pointer';
close.style.border = 'none';
close.style.padding = '10px 10px';
close.style.fontsize = '20px';
close.style.fontWeight = 'bold';
close.style.position = 'relative';
close.style.color = '#009ee3';
close.style.background = 'black';

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

//Evento crear usuario
let formCrearUsuario = document.getElementById('formCrearUsuario');
const infoInputUsuario = document.getElementById('nuevoUsuario');
const infoInputContraseña = document.getElementById('nuevaContraseña');

formCrearUsuario.addEventListener("submit", () => {
    infoInputUsuario.value
    infoInputContraseña.value
    localStorage.setItem("usuariolog", infoInputUsuario.value);
    localStorage.setItem("contraseñalog", infoInputContraseña.value);
    alert("Nuevo usuario creado.");
    })


//Evento Logueo
let login = document.getElementById('logueo');

login.addEventListener('submit', (e) => {
    e.preventDefault();
    inputUsuario.value
    inputContraseña.value
    sessionStorage.setItem("log1", inputUsuario.value)
    sessionStorage.setItem("log2", inputContraseña.value)
    if (sessionStorage.getItem("log1") === localStorage.getItem("usuariolog") && sessionStorage.getItem("log2") === localStorage.getItem("contraseñalog"))
        window.location.assign('principal.html')
    else {
      
      let mensajeErrorLog = document.getElementById('mensajeErrorLog');
    
      if (!mensajeErrorLog) {
          mensajeErrorLog = document.createElement('h2');
          mensajeErrorLog.id = 'mensajeErrorLog';
          mensajeErrorLog.style.marginBottom = '20px';
          mensajeErrorLog.style.marginTop = '20px';
          mensajeErrorLog.style.fontSize = '20px';
          mensajeErrorLog.style.color = 'red';
          mensajeErrorLog.style.textShadow = `
          1px 1px 0 #000,
          -1px -1px 0 #000,
          1px -1px 0 #000,
          -1px 1px 0 #000`;
          mainIndexDIV2.appendChild(mensajeErrorLog);
      }

      mensajeErrorLog.innerText = 'Usuario o contraseña incorrectos';
  }
})


