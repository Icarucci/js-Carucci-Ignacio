//Funcion inicial del Saldo

function inicioSaldo(){
    if(sessionStorage.getItem('saldoUsuario') === null)
        sessionStorage.setItem('saldoUsuario', 0);
    else{
        sessionStorage.getItem('saldoUsuario');
    }
}
inicioSaldo()



// Delaración de Variables del Body y asignaciones de ID y/o clases
const body = document.getElementById('body');

// Delaración de Variables DivContainer y asignaciones de ID y/o clases
const containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'container');
const classContainter = document.getElementById('container');

// Delaración de Variables Aside y asignaciones de ID y/o clases
const aside = document.createElement('aside');
aside.setAttribute('id', 'aside');
const asidePrincipal = document.getElementById('aside');
const divlog = document.createElement('div');
divlog.setAttribute('id', 'divlog');
const div1 = document.createElement('div');
div1.setAttribute('id', 'div1');
const userNameAside = document.createElement('h3');
userNameAside.setAttribute('class', 'txtUserAside');
const logOut = document.createElement('button');
logOut.setAttribute('id', 'deslogueo');
logOut.setAttribute('class', 'logOut');
const img = document.createElement('img');
const LOGOORIGEN = document.createElement('a');
const asideSecundario = document.createElement('div');
const divNuevoContacto = document.createElement('div');
divNuevoContacto.setAttribute('id', 'divNuevoContacto');
const h2NuevoContacto = document.createElement('h2');
const divFormNuevoContacto = document.createElement('div');
const formNuevoContacto = document.createElement('form');
formNuevoContacto.setAttribute('id', 'agregarContactoForm');
const h3Apodo = document.createElement('h3');
const inputApodo = document.createElement('input');
inputApodo.setAttribute('id', 'inputApodo');
const h3NombreCompleto = document.createElement('h3');
const inputNombreCompleto = document.createElement('input');
inputNombreCompleto.setAttribute('id', 'inputNombreCompleto');
const h3Telefono = document.createElement('h3');
const inputTelefono = document.createElement('input');
inputTelefono.setAttribute('id', 'inputTelefono');
const divBotonAgregarNuevoContacto = document.createElement('div');
const botonAgregarNuevoContacto = document.createElement('button');



// Delaración de Variables main y asignaciones de ID y/o clases
const main = document.createElement('main');
const div1main = document.createElement('div');
div1main.setAttribute('id', 'horaMain');
const div2main = document.createElement('div');
const div3main = document.createElement('div');
div3main.setAttribute('id', 'div3main');
const div4main = document.createElement('div');
div4main.setAttribute('id', 'div4main');
const horaMain = document.createElement('h3');
const divLogo = document.createElement('div');
const divBienvenida = document.createElement('div');
const imgLogo = document.createElement('img');
const bienvenidaTxt = document.createElement('h1');
const disponible = document.createElement('h3');
const divSaldo = document.createElement('div');
const txtSaldo = document.createElement('h2');
const imgSaldoEyeOpen = document.createElement('img');
imgSaldoEyeOpen.setAttribute('id', 'mostrarSaldo');
const divOperaciones = document.createElement('div');
const divimgIngresarSaldo = document.createElement('div');
divimgIngresarSaldo.setAttribute('id', 'idIngresarSaldo');
divimgIngresarSaldo.setAttribute('class', 'zoom');
const divimgTransferirSaldo = document.createElement('div');
divimgTransferirSaldo.setAttribute('id', 'idTransferirSaldo');
divimgTransferirSaldo.setAttribute('class', 'zoom');
const divimgPagarServicios = document.createElement('div');
divimgPagarServicios.setAttribute('class', 'zoom');
const divimgComprarDolares = document.createElement('div');
divimgComprarDolares.setAttribute('class', 'zoom');
const imgIngresarSaldo = document.createElement('img');
const imgTransferirSaldo = document.createElement('img');
const imgPagarServicios = document.createElement('img');
const imgComprarDolares = document.createElement('img');
const txtIngresarSaldo = document.createElement('h3');
const txtTrasferirSaldo = document.createElement('h3');
const txtPagarServicios = document.createElement('h3');
const txtComprarDolares = document.createElement('h3');
const divOPIngresarSaldo = document.createElement('div');
divOPIngresarSaldo.setAttribute('id', 'divOPIngresarSaldo');
const divIngresarSaldoSalir = document.createElement('div');
const h3IngresarSaldo = document.createElement('h3');
const imgAtras = document.createElement('img');
imgAtras.setAttribute('id', 'imgAtras');
const inputAgregarSaldo = document.createElement('input');
inputAgregarSaldo.setAttribute('id', 'inputAgregarSaldo');
const continuarSaldo = document.createElement('button');
continuarSaldo.setAttribute('id', 'idContinuar');
const divOPTransferirSaldo = document.createElement('div');
divOPTransferirSaldo.setAttribute('id', 'divOPTransferirSaldo');
const h3TransferirSaldo = document.createElement('h3');
const divTransferirSaldoSalir = document.createElement('div');
const imgAtras2 = document.createElement('img');
imgAtras2.setAttribute('id', 'imgAtras2');
const divAgregarContacto = document.createElement('div');
divAgregarContacto.setAttribute('id', 'divAgregarContacto');
const h3AgregarContacto = document.createElement('h3');
const imgAgregarContacto = document.createElement('img');
const divListaContacto = document.createElement('div');
divListaContacto.setAttribute('id', 'divListaContacto');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Asignacion DOM al Aside
body.appendChild(containerDiv);
containerDiv.appendChild(aside)
aside.appendChild(divlog);
aside.appendChild(div1);
LOGOORIGEN.href = '/index.html';
LOGOORIGEN.appendChild(img);
img.src = 'assets/img/logo.png';
img.alt = 'Pago Mis Deudas Logo';
divlog.appendChild(LOGOORIGEN);
divlog.appendChild(userNameAside);
divlog.appendChild(logOut);


//Asignacion DOM al Main
//Hora
containerDiv.appendChild(main);
main.appendChild(div1main);
div1main.appendChild(horaMain);

//Bienvenida
main.appendChild(div2main);
div2main.appendChild(divLogo);
div2main.appendChild(divBienvenida);
divLogo.appendChild(imgLogo);
imgLogo.src = 'assets/img/user.png';
imgLogo.alt = 'Logo usuario';
divBienvenida.appendChild(bienvenidaTxt);

//Saldo
main.appendChild(div4main);
div4main.appendChild(div3main);
div3main.appendChild(disponible);
div3main.appendChild(divSaldo);
divSaldo.appendChild(txtSaldo);
divSaldo.appendChild(imgSaldoEyeOpen);
imgSaldoEyeOpen.src = 'assets/img/ojoabierto.png';
imgSaldoEyeOpen.alt = 'Ojo';

//Operaciones
div3main.appendChild(divOperaciones);
divOperaciones.appendChild(divimgIngresarSaldo);
divOperaciones.appendChild(divimgTransferirSaldo);
divOperaciones.appendChild(divimgPagarServicios);
divOperaciones.appendChild(divimgComprarDolares);
divimgIngresarSaldo.appendChild(imgIngresarSaldo);
imgIngresarSaldo.src = 'assets/img/ingresarsaldo.png';
imgIngresarSaldo.alt = 'Ingresar';
divimgTransferirSaldo.appendChild(imgTransferirSaldo);
imgTransferirSaldo.src = 'assets/img/transferirsaldo.png';
imgTransferirSaldo.alt = 'Transferir';
divimgPagarServicios.appendChild(imgPagarServicios);
imgPagarServicios.src = 'assets/img/pagarservicios.png';
imgPagarServicios.alt = 'Pagar';
divimgComprarDolares.appendChild(imgComprarDolares);
imgComprarDolares.src = 'assets/img/compradolares.png';
imgComprarDolares.alt = 'Dolar';
divimgIngresarSaldo.appendChild(txtIngresarSaldo);
divimgTransferirSaldo.appendChild(txtTrasferirSaldo);
divimgPagarServicios.appendChild(txtPagarServicios);
divimgComprarDolares.appendChild(txtComprarDolares);

//Ingresar Saldo
div4main.appendChild(divOPIngresarSaldo);
divOPIngresarSaldo.appendChild(divIngresarSaldoSalir);
divIngresarSaldoSalir.appendChild(h3IngresarSaldo);
divIngresarSaldoSalir.appendChild(imgAtras);
imgAtras.src = 'assets/img/atras.png';
imgAtras.alt = 'Atras';
divOPIngresarSaldo.appendChild(inputAgregarSaldo);
divOPIngresarSaldo.appendChild(continuarSaldo);

//Transferir Saldo
div4main.appendChild(divOPTransferirSaldo);
divOPTransferirSaldo.appendChild(divTransferirSaldoSalir);
divTransferirSaldoSalir.appendChild(h3TransferirSaldo);
divTransferirSaldoSalir.appendChild(imgAtras2);
imgAtras2.src = 'assets/img/atras.png';
imgAtras2.alt = 'Atras';
divOPTransferirSaldo.appendChild(divAgregarContacto);
divAgregarContacto.appendChild(imgAgregarContacto);
imgAgregarContacto.src = 'assets/img/agregarContacto.png';
imgAgregarContacto.alt = 'agregarContacto';
divAgregarContacto.appendChild(h3AgregarContacto);
divOPTransferirSaldo.appendChild(divListaContacto);

//Asignacion DOM al AsideSecundario
containerDiv.appendChild(asideSecundario);
asideSecundario.appendChild(divNuevoContacto);
divNuevoContacto.appendChild(h2NuevoContacto);
divNuevoContacto.appendChild(divFormNuevoContacto);
divFormNuevoContacto.appendChild(formNuevoContacto);
formNuevoContacto.appendChild(h3Apodo);
formNuevoContacto.appendChild(inputApodo);
formNuevoContacto.appendChild(h3NombreCompleto);
formNuevoContacto.appendChild(inputNombreCompleto);
formNuevoContacto.appendChild(h3Telefono);
formNuevoContacto.appendChild(inputTelefono);
formNuevoContacto.appendChild(divBotonAgregarNuevoContacto);
divBotonAgregarNuevoContacto.appendChild(botonAgregarNuevoContacto);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Estilos DOM
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.minHeight = '100vh';
body.style.margin = '0';
containerDiv.style.display = 'flex';
containerDiv.style.flex = '1'
aside.style.width = '10%';
aside.style.backgroundColor = '#f4f4f4';
aside.style.padding = '20px';
aside.style.textAlign = 'center';
img.style.width = '95%';
userNameAside.innerHTML = 'Logueado como: ' + sessionStorage.getItem("log1");
userNameAside.style.textAlign = 'center';
userNameAside.style.paddingTop = '10px';
userNameAside.style.margin = '0px';
logOut.style.cursor = 'pointer';
logOut.style.border = 'none';
logOut.style.padding = '10px 10px';
logOut.style.fontsize = '20px';
logOut.style.fontWeight = 'bold';
logOut.style.position = 'relative';
logOut.style.color = '#009ee3';
logOut.innerText = 'Cerrar sesión';
logOut.style.background = 'black';
logOut.style.marginTop = '20px';
logOut.style.webkitBorderRadius = '20px';
main.style.flex = '1';
main.style.background = 'linear-gradient(to bottom,  #009ee3 0%, #009ee3 60%, #FFFFFF 100%)';
main.style.padding = '0px';
div1main.style.height = '5%';
div1main.style.backgroundColor = '#004a75';
div1main.style.padding = '10px 20px 10px 20px';
div1main.style.textAlign = 'center';
div2main.style.height = '10%';
div2main.style.padding = '20px 10px 10px 10px';
div2main.style.textAlign = 'start';
div2main.style.display = 'flex';
asideSecundario.style.width = '20%';
imgLogo.style.width = '50%';
divLogo.style.width = '10%';
divLogo.style.textAlign = 'center';
divBienvenida.style.width = '90%';
bienvenidaTxt.innerHTML = 'Hola, ' + sessionStorage.getItem("log1") + ' ';
bienvenidaTxt.style.textAlign = 'start';
bienvenidaTxt.style.margin = '0px';
bienvenidaTxt.style.color = 'white';
//

//
div4main.style.height = '60%';
div4main.style.backgroundColor = 'white';
div4main.style.margin = '0px 20px 20px 20px';
div4main.style.webkitBorderRadius = '15px';
div4main.style.boxShadow = '10px 10px 30px rgba(0, 0, 0, 0.3)';
div4main.style.border = '0.5px solid grey';
div4main.style.display = 'block';
//
disponible.innerText = "Disponible";
disponible.style.padding = '20px 20px 0px 20px';
disponible.style.margin = '0px';
//
divSaldo.style.height = '30%';
divSaldo.style.display = 'flex';
divSaldo.style.margin = '0px 20px 20px 20px';
//
txtSaldo.innerText = "$ " + sessionStorage.getItem('saldoUsuario');
txtSaldo.style.fontSize = '40px';
txtSaldo.style.margin = '10px 20px 0px 0px';
//
imgSaldoEyeOpen.style.width = "50px";
imgSaldoEyeOpen.style.height = "50px";
imgSaldoEyeOpen.style.margin = '0px 20px 10px 20px'
//
divOperaciones.style.height = '50%';
divOperaciones.style.height = '50%';
divOperaciones.style.display = 'flex';
divOperaciones.style.margin = '0px 20px 20px 20px';
//
imgIngresarSaldo.style.width = '50%';
imgTransferirSaldo.style.width = '50%';
imgPagarServicios.style.width = '50%';
imgComprarDolares.style.width = '50%';
imgIngresarSaldo.style.textAlign = 'center';
imgTransferirSaldo.style.textAlign = 'center';
imgPagarServicios.style.textAlign = 'center';
imgComprarDolares.style.textAlign = 'center';
//
divimgIngresarSaldo.style.textAlign = 'center';
divimgTransferirSaldo.style.textAlign = 'center';
divimgPagarServicios.style.textAlign = 'center';
divimgComprarDolares.style.textAlign = 'center';
//
txtIngresarSaldo.innerText = 'Ingresar Dinero';
txtTrasferirSaldo.innerText = 'Transferir dinero';
txtPagarServicios.innerText = 'Pagar servicios';
txtComprarDolares.innerText = 'Comprar dólares';
txtIngresarSaldo.style.margin = '0px 0px 20px 0px';
txtTrasferirSaldo.style.margin = '0px 0px 20px 0px';
txtPagarServicios.style.margin = '0px 0px 20px 0px';
txtComprarDolares.style.margin = '0px 0px 20px 0px';
//
divOPIngresarSaldo.style.display = 'none';
//
divIngresarSaldoSalir.style.display = 'flex';
//
h3IngresarSaldo.style.width = '90%';
h3IngresarSaldo.innerHTML = '¿Cuánto querés ingresar?';
h3IngresarSaldo.style.fontSize = '30px';
h3IngresarSaldo.style.padding = '20px';
h3IngresarSaldo.style.margin = '0px';
//
imgAtras.style.width = '50px';
imgAtras.style.height = '50px';
imgAtras.style.padding = '20px';
//
inputAgregarSaldo.style.margin = '20px';
inputAgregarSaldo.style.width = '94%';
inputAgregarSaldo.style.height = '140px';
inputAgregarSaldo.type = 'number';
inputAgregarSaldo.placeholder = '$ 0';
inputAgregarSaldo.style.textAlign = 'center';
inputAgregarSaldo.style.fontSize = '50px';
inputAgregarSaldo.style.borderWidth = '0px';
//
continuarSaldo.style.webkitBorderRadius = '5px';
continuarSaldo.style.margin = '0px 20px 20px 20px';
continuarSaldo.innerText = 'Continuar';
continuarSaldo.style.background = '#009ee3';
continuarSaldo.style.cursor = 'pointer';
continuarSaldo.style.border = 'none';
continuarSaldo.style.padding = '15px 15px';
continuarSaldo.style.fontsize = '20px';
continuarSaldo.style.fontWeight = 'bold';
continuarSaldo.style.position = 'relative';
continuarSaldo.style.color = 'white';
continuarSaldo.style.marginTop = '30px';
continuarSaldo.style.width = '95%';
continuarSaldo.style.textAlign = 'center';
//
divOPTransferirSaldo.style.display = 'none';
//
divTransferirSaldoSalir.style.display = 'flex';
//
h3TransferirSaldo.style.width = '90%';
h3TransferirSaldo.innerHTML = 'Elige a quién deseas transferir';
h3TransferirSaldo.style.fontSize = '30px';
h3TransferirSaldo.style.padding = '20px';
h3TransferirSaldo.style.margin = '0px';
//
imgAtras2.style.width = '50px';
imgAtras2.style.height = '50px';
imgAtras2.style.padding = '20px';
//
divAgregarContacto.style.display = 'flex';
divAgregarContacto.style.boxShadow = '10px 10px 30px rgba(0, 0, 0, 0.3)';
divAgregarContacto.style.border = '0.5px solid grey';
divAgregarContacto.style.webkitBorderRadius = '10px';
divAgregarContacto.style.width = '40%';
divAgregarContacto.style.margin = '0px 0px 0px 20px';
divAgregarContacto.style.overflow = 'hidden';
//
h3AgregarContacto.innerHTML = 'Agregar nuevo contacto';
h3AgregarContacto.style.fontSize = '20px';
h3AgregarContacto.style.padding = '15px';
h3AgregarContacto.style.margin = '0px';
//
imgAgregarContacto.style.width = '30px';
imgAgregarContacto.style.height = '30px';
imgAgregarContacto.style.padding = '10px 0px 0px 20px';
//
divListaContacto.style.display = 'block';
divListaContacto.style.boxShadow = '10px 10px 30px rgba(0, 0, 0, 0.3)';
divListaContacto.style.border = '0.5px solid grey';
divListaContacto.style.margin = '20px';
divListaContacto.style.padding = '20px';
//
asideSecundario.style.backgroundColor = '#f4f4f4';
asideSecundario.style.padding = '20px';
//
divNuevoContacto.style.display = 'none';
divNuevoContacto.style.boxShadow = '10px 10px 30px rgba(0, 0, 0, 0.3)';
divNuevoContacto.style.border = '0.5px solid grey';
divNuevoContacto.style.webkitBorderRadius = '10px';
divNuevoContacto.style.margin = '0px';
divNuevoContacto.style.padding = '20px';
divNuevoContacto.style.textAlign = 'center';
//
h2NuevoContacto.style.textAlign = 'center';
h2NuevoContacto.innerHTML = 'Ingrese aquí los datos del nuevo contacto';
h2NuevoContacto.style.fontSize = '20px';
h2NuevoContacto.style.padding = '0px';
h2NuevoContacto.style.margin = '0px';
//
h3Apodo.style.textAlign = 'center';
h3Apodo.innerHTML = 'Apodo';
h3Apodo.style.fontSize = '20px';
h3Apodo.style.padding = '0px';
h3Apodo.style.margin = '30px 0pc 10px 0px';
//
h3NombreCompleto.style.textAlign = 'center';
h3NombreCompleto.innerHTML = 'Nombre completo';
h3NombreCompleto.style.fontSize = '20px';
h3NombreCompleto.style.padding = '0px';
h3NombreCompleto.style.margin = '30px 0pc 10px 0px';
//
h3Telefono.style.textAlign = 'center';
h3Telefono.innerHTML = 'Teléfono';
h3Telefono.style.fontSize = '20px';
h3Telefono.style.padding = '0px';
h3Telefono.style.margin = '30px 0pc 10px 0px';
//
botonAgregarNuevoContacto.style.webkitBorderRadius = '5px';
botonAgregarNuevoContacto.style.margin = '0px 20px 20px 20px';
botonAgregarNuevoContacto.innerText = 'Agregar';
botonAgregarNuevoContacto.style.background = '#009ee3';
botonAgregarNuevoContacto.style.cursor = 'pointer';
botonAgregarNuevoContacto.style.border = 'none';
botonAgregarNuevoContacto.style.padding = '15px 15px';
botonAgregarNuevoContacto.style.fontsize = '20px';
botonAgregarNuevoContacto.style.fontWeight = 'bold';
botonAgregarNuevoContacto.style.position = 'relative';
botonAgregarNuevoContacto.style.color = 'white';
botonAgregarNuevoContacto.style.marginTop = '30px';
botonAgregarNuevoContacto.style.textAlign = 'center';
//

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Evento Deslogueo
let login = document.getElementById('deslogueo');

login.addEventListener('click', (e) => {
    sessionStorage.removeItem("log1");
    sessionStorage.removeItem("log2");
    swal({
        title: "Hasta luego!!",
        text: "Gracias por utilizar PagoMisDeudas",
        icon: "assets/img/logo.png",
        button: "Aceptar"
    })
    .then(() => {
        window.location.assign('index.html');
    });
})


//Reloj Main
function reloj() {
    const HORA = new Date().getHours();
    let MINUTOS = new Date().getMinutes();
    MINUTOS = MINUTOS < 10 ? '0' + MINUTOS : MINUTOS;
    const horaMain = document.getElementById('horaMain');
    horaMain.style.padding = '10px';
    horaMain.style.margin = 0;
    horaMain.style.textAlign = 'start';
    horaMain.style.fontsize = '10px';
    horaMain.style.color = 'white';
    horaMain.innerHTML = HORA + ":" + MINUTOS;
}
setInterval(reloj, 1000);

//Mostrar y ocultar Saldo
let mostrarSaldo = document.getElementById('mostrarSaldo');

mostrarSaldo.addEventListener("mouseover", () => {
    imgSaldoEyeOpen.style.cursor = "pointer";
})
mostrarSaldo.addEventListener("mouseout", () => {
    imgSaldoEyeOpen.style.cursor = "default";
})


mostrarSaldo.addEventListener("click", () => {
    if (imgSaldoEyeOpen.src.includes("ojoabierto.png")) {
        imgSaldoEyeOpen.src = 'assets/img/ojocerrado.png';
        txtSaldo.innerText = "$ ****";

    } else {
        imgSaldoEyeOpen.src = 'assets/img/ojoabierto.png';
        txtSaldo.innerText = "$ " + sessionStorage.getItem('saldoUsuario');
    }
});

//Ocultar y mostrar div Igresar Saldo

document.getElementById('idIngresarSaldo').addEventListener("click", ocultarDiv1);

function ocultarDiv1() {
    let div3 = document.getElementById('div3main');
    div3.style.display = 'none';
    let div4 = document.getElementById('divOPIngresarSaldo');
    div4.style.display = 'block';
}

document.getElementById('imgAtras').addEventListener("click", mostrarDiv1);

function mostrarDiv1() {
    let div3 = document.getElementById('div3main');
    div3.style.display = 'block';
    let div4 = document.getElementById('divOPIngresarSaldo');
    div4.style.display = 'none';
}

imgAtras.addEventListener("mouseover", () => {
    imgAtras.style.cursor = "pointer";
})


//Ocultar y mostrar div Transferir Saldo

document.getElementById('idTransferirSaldo').addEventListener("click", ocultarDiv2);

function ocultarDiv2() {
    let div5 = document.getElementById('div3main');
    div5.style.display = 'none';
    let div6 = document.getElementById('divOPTransferirSaldo');
    div6.style.display = 'block';
}

document.getElementById('imgAtras2').addEventListener("click", mostrarDiv2);

function mostrarDiv2() {
    let div5 = document.getElementById('div3main');
    div5.style.display = 'block';
    let div6 = document.getElementById('divOPTransferirSaldo');
    div6.style.display = 'none';
    let div7 = document.getElementById('divNuevoContacto');
    divNuevoContacto.style.display = 'none';
}

imgAtras2.addEventListener("mouseover", () => {
    imgAtras2.style.cursor = "pointer";
})


//Sumar saldo (USO DE JSON)
let botonContinuarRecarga = document.getElementById('idContinuar');
let inputSaldo = document.getElementById('inputAgregarSaldo');

botonContinuarRecarga.addEventListener("click", () => {
    let sumarSaldo = parseFloat(inputAgregarSaldo.value);
    
    if (sumarSaldo > 0 && Number.isInteger(sumarSaldo)) {
        swal({
            title: "Éxito!",
            text: "Se añadieron $" + sumarSaldo + " a tu cuenta",
            icon: "success",
            button: "Aceptar"
        })
        .then(() => {
            let saldo = sessionStorage.getItem("saldoUsuario");
            let saldoParse = JSON.parse(saldo);
            saldoParse += sumarSaldo;
            swal({
                title: "Saldo Actual",
                text: "Tu saldo es de $" + saldoParse,
                icon: "info",
                button: "Aceptar",
            })
            .then(() => {
                inputAgregarSaldo.value = '';
                txtSaldo.innerText = "$ " + saldoParse;
                const saldoString = JSON.stringify(saldoParse);
                sessionStorage.setItem("saldoUsuario", saldoString);
            });
        });
    } 
    else {
        swal({
            title: "Error!",
            text: "Solamente puede ingresarse un valor entero.",
            icon: "error",
            button: "Aceptar"
        });
    }
});

//Agregar Contacto
//Constructor

document.getElementById('divAgregarContacto').addEventListener("click", mostrarAgregarContacto);

function mostrarAgregarContacto() {
    let contactoAside = document.getElementById('divNuevoContacto');
    contactoAside.style.display = 'block';
}

function agregarContacto(apodo, nombre, telefono) {
    this.apodo = apodo;
    this.nombre = nombre;
    this.telefono = telefono;

}


// Instancia del objeto persona


const arrayContacto = [];
let agregarContactoForm = document.getElementById('agregarContactoForm');

agregarContactoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const apodoInput = inputApodo.value
    const nombreInput = inputNombreCompleto.value
    const telefonoInput = inputTelefono.value
    const persona1 = new agregarContacto(apodoInput,nombreInput,telefonoInput);
    alert("Nuevo contacto Agregado!\n \n" + persona1.apodo + "\n" + persona1.telefono);
    arrayContacto.push(persona1);
    const divh3Contacto = document.createElement('div');
    divListaContacto.appendChild(divh3Contacto);
    const h3Contacto = document.createElement('h3');
    h3Contacto.innerText = persona1.apodo + " " +  persona1.telefono;
    divh3Contacto.appendChild(h3Contacto);
    divh3Contacto.style.width = "50%";
    inputApodo.value = '';
    inputNombreCompleto.value = '';
    inputTelefono.value = '';
})
