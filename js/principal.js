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
divimgPagarServicios.setAttribute('id', 'idPagarServicios');
divimgPagarServicios.setAttribute('class', 'zoom');
const divimgComprarDolares = document.createElement('div');
divimgComprarDolares.setAttribute('id', 'divComprarDolares');
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
const divTransferirAcontacto = document.createElement('div');
divTransferirAcontacto.setAttribute('id', 'divTransferirAcontacto');
const divTransferirAcontactoh3 = document.createElement('div');
const imgAtras3 = document.createElement('img');
imgAtras3.setAttribute('id', 'imgAtras3');
const h3TransferirAcontacto = document.createElement('h3');
const inputTransferirAcontacto = document.createElement('input');
inputTransferirAcontacto.setAttribute('id', 'inputTransferirAcontacto');
const botonContinuarTransferencia = document.createElement('button');
botonContinuarTransferencia.setAttribute('id', 'botonContinuarTransferencia');
const divOPpagarServicios = document.createElement('div');
divOPpagarServicios.setAttribute('id', 'divOPpagarServicios');
const divPagarServiciosSalir = document.createElement('div');
const h3PagarServicios = document.createElement('h3');
const imgAtras4 = document.createElement('img');
imgAtras4.setAttribute('id', 'imgAtras4');
const divPagarServiciosPagos = document.createElement('div');
const divPagarServiciosCant = document.createElement('div');
divPagarServiciosCant.setAttribute('id', 'divPagarServiciosCant');
const h4PagarServiciosCant = document.createElement('h4');
const inputPagarServiciosCant = document.createElement('input');
inputPagarServiciosCant.setAttribute('id', 'inputPagarServiciosCant');
const divbotonPagarServiciosCant = document.createElement('div');
const botonPagarServiciosCant = document.createElement('button');
botonPagarServiciosCant.setAttribute('id', 'botonPagarServiciosCant');
const divPagarServiciosCuentas = document.createElement('div');
const divPagarServiciosCuentasTitulo = document.createElement('div');
const h4PagarServiciosCuentas = document.createElement('h4');
const h4PagarServiciosCuentas2 = document.createElement('h4');
const divPagarServiciosCuentasLista = document.createElement('div');
const divPagarServiciosCuentasListaServicios = document.createElement('div');
const divPagarServiciosCuentasListaValor = document.createElement('div');
const divPagarServiciosCuentasTotal = document.createElement('div');
const divPagarServiciosCuentasTotaltxt = document.createElement('div');
const divPagarServiciosCuentasTotalNum = document.createElement('div');
const h4PagarServiciosCuentasTotaltxt = document.createElement('h4');
const h4PagarServiciosCuentasTotalNum = document.createElement('h4');
const divPagarServiciosCuentasPagar = document.createElement('div');
divPagarServiciosCuentasPagar.setAttribute('id', 'divPagarServiciosCuentasPagar');
const botonPagarServiciosCuentas = document.createElement('button');
botonPagarServiciosCuentas.setAttribute('id', 'botonPagarServiciosCuentas');
const divModalPagarServicios = document.createElement('div');
divModalPagarServicios.setAttribute('id', 'divModalPagarServicios');
const divModalPagarServiciosOperacion = document.createElement('div');
const formModalPagarServiciosOperacion = document.createElement('form');
const h4ModalPagarServiciosServicios = document.createElement('h4');
const inputModalPagarServiciosServicios = document.createElement('input');
inputModalPagarServiciosServicios.setAttribute('id', 'inputModalPagarServiciosServicios');
const h4ModalPagarServiciosMonto = document.createElement('h4');
const inputModalPagarServiciosMonto = document.createElement('input');
inputModalPagarServiciosMonto.setAttribute('id', 'inputModalPagarServiciosMonto');
const divbotonModalSiguienteServicio= document.createElement('div');
divbotonModalSiguienteServicio.setAttribute('id', 'divbotonModalSiguienteServicio');
const botonModalSiguienteServicio = document.createElement('button');
botonModalSiguienteServicio.setAttribute('id', 'botonModalSiguienteServicio');
const divbotonModalIniciarAgregarServicio= document.createElement('div');
divbotonModalIniciarAgregarServicio.setAttribute('id', 'divbotonModalIniciarAgregarServicio');
const botonModalIniciarAgregarServicio = document.createElement('button');
botonModalIniciarAgregarServicio.setAttribute('id', 'botonModalIniciarAgregarServicio');
const divOPComprarDolares = document.createElement('div');
divOPComprarDolares.setAttribute('id', 'divOPComprarDolares');
const divComprarDolaresSalir = document.createElement('div');
const h3ComprarDolares = document.createElement('h3');
const imgAtras5 = document.createElement('img');
imgAtras5.setAttribute('id', 'imgAtras5');
const divComprarDolaresMain = document.createElement('div');
const divMainSaldosComprarDolares = document.createElement('div');
const divMainSaldosPesosComprarDolares = document.createElement('div');
const h4MainSaldosPesosComprarDolares = document.createElement('h4');
const h5MainSaldosPesosTxtComprarDolares = document.createElement('h5');
const divMainSaldosDolaresComprarDolares = document.createElement('div');
const h4MainSaldosDolaresComprarDolares = document.createElement('h4');
const h5MainSaldosDolaresTxtComprarDolares = document.createElement('h5');
const divMainOperacionesComprarDolares = document.createElement('div');
const divMainOperacionesCompraComprarDolares = document.createElement('div');
const h4MainOperacionesCompraComprarDolares = document.createElement('h4');
const inputMainOperacionesCompraComprarDolares = document.createElement('input');
inputMainOperacionesCompraComprarDolares.setAttribute('id', 'inputMainOperacionesCompraComprarDolares');
const botonMainOperacionesCompraComprarDolares = document.createElement('button');
botonMainOperacionesCompraComprarDolares.setAttribute('id', 'botonMainOperacionesCompraComprarDolares');
const divMainOperacionesVentaComprarDolares = document.createElement('div');
const h4MainOperacionesVentaComprarDolares = document.createElement('h4');
const inputMainOperacionesVentaComprarDolares = document.createElement('input');
inputMainOperacionesVentaComprarDolares.setAttribute('id', 'inputMainOperacionesVentaComprarDolares');
const botonMainOperacionesVentaComprarDolares = document.createElement('button');
botonMainOperacionesVentaComprarDolares.setAttribute('id', 'botonMainOperacionesVentaComprarDolares');
const divApiComprarDolares = document.createElement('div');
divApiComprarDolares.setAttribute('id', 'divApiComprarDolares');
const ulApiComprarDolares = document.createElement('ul');
ulApiComprarDolares.setAttribute('id', 'ulApiComprarDolares');






////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Asignacion DOM al Aside
body.appendChild(containerDiv);
containerDiv.appendChild(aside)
aside.appendChild(divlog);
aside.appendChild(div1);
LOGOORIGEN.href = 'index.html';
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
div4main.appendChild(divTransferirAcontacto);
divTransferirAcontacto.appendChild(divTransferirAcontactoh3);
divTransferirAcontactoh3.appendChild(h3TransferirAcontacto);
divTransferirAcontactoh3.appendChild(imgAtras3);
imgAtras3.src = 'assets/img/atras.png';
imgAtras3.alt = 'Atras';
divTransferirAcontacto.appendChild(inputTransferirAcontacto);
divTransferirAcontacto.appendChild(botonContinuarTransferencia);

//Pagar Servicios
div4main.appendChild(divOPpagarServicios);
divOPpagarServicios.appendChild(divPagarServiciosSalir);
divPagarServiciosSalir.appendChild(h3PagarServicios);
divPagarServiciosSalir.appendChild(imgAtras4);
imgAtras4.src = 'assets/img/atras.png';
imgAtras4.alt = 'Atras';
divOPpagarServicios.appendChild(divPagarServiciosPagos);
divPagarServiciosPagos.appendChild(divPagarServiciosCant);
divPagarServiciosCant.appendChild(h4PagarServiciosCant);
divPagarServiciosCant.appendChild(inputPagarServiciosCant);
divPagarServiciosCant.appendChild(divbotonPagarServiciosCant);
divbotonPagarServiciosCant.appendChild(botonPagarServiciosCant);
divPagarServiciosPagos.appendChild(divPagarServiciosCuentas);
divPagarServiciosCuentas.appendChild(divPagarServiciosCuentasTitulo);
divPagarServiciosCuentasTitulo.appendChild(h4PagarServiciosCuentas);
divPagarServiciosCuentasTitulo.appendChild(h4PagarServiciosCuentas2);
divPagarServiciosCuentas.appendChild(divPagarServiciosCuentasLista);
divPagarServiciosCuentasLista.appendChild(divPagarServiciosCuentasListaServicios);
divPagarServiciosCuentasLista.appendChild(divPagarServiciosCuentasListaValor);
divPagarServiciosCuentas.appendChild(divPagarServiciosCuentasTotal);
divPagarServiciosCuentasTotal.appendChild(divPagarServiciosCuentasTotaltxt);
divPagarServiciosCuentasTotaltxt.appendChild(h4PagarServiciosCuentasTotaltxt);
divPagarServiciosCuentasTotal.appendChild(divPagarServiciosCuentasTotalNum);
divPagarServiciosCuentasTotalNum.appendChild(h4PagarServiciosCuentasTotalNum);
divPagarServiciosCuentas.appendChild(divPagarServiciosCuentasPagar);
divPagarServiciosCuentasPagar.appendChild(botonPagarServiciosCuentas);
body.appendChild(divModalPagarServicios);
divModalPagarServicios.appendChild(divModalPagarServiciosOperacion);
divModalPagarServiciosOperacion.appendChild(formModalPagarServiciosOperacion);
formModalPagarServiciosOperacion.appendChild(h4ModalPagarServiciosServicios);
formModalPagarServiciosOperacion.appendChild(inputModalPagarServiciosServicios);
formModalPagarServiciosOperacion.appendChild(h4ModalPagarServiciosMonto);
formModalPagarServiciosOperacion.appendChild(inputModalPagarServiciosMonto);
formModalPagarServiciosOperacion.appendChild(divbotonModalSiguienteServicio);
formModalPagarServiciosOperacion.appendChild(divbotonModalIniciarAgregarServicio);
divbotonModalSiguienteServicio.appendChild(botonModalSiguienteServicio);
divbotonModalIniciarAgregarServicio.appendChild(botonModalIniciarAgregarServicio);

//Comprar dolares
div4main.appendChild(divOPComprarDolares);
divOPComprarDolares.appendChild(divComprarDolaresSalir);
divComprarDolaresSalir.appendChild(h3ComprarDolares);
divComprarDolaresSalir.appendChild(imgAtras5);
imgAtras5.src = 'assets/img/atras.png';
imgAtras5.alt = 'Atras';
divOPComprarDolares.appendChild(divComprarDolaresMain);
divComprarDolaresMain.appendChild(divMainSaldosComprarDolares);
divMainSaldosComprarDolares.appendChild(divMainSaldosPesosComprarDolares);
divMainSaldosPesosComprarDolares.appendChild(h5MainSaldosPesosTxtComprarDolares);
divMainSaldosPesosComprarDolares.appendChild(h4MainSaldosPesosComprarDolares);
divMainSaldosComprarDolares.appendChild(divMainSaldosDolaresComprarDolares);
divMainSaldosDolaresComprarDolares.appendChild(h5MainSaldosDolaresTxtComprarDolares);
divMainSaldosDolaresComprarDolares.appendChild(h4MainSaldosDolaresComprarDolares);
divComprarDolaresMain.appendChild(divMainOperacionesComprarDolares);
divMainOperacionesComprarDolares.appendChild(divMainOperacionesCompraComprarDolares);
divMainOperacionesCompraComprarDolares.appendChild(h4MainOperacionesCompraComprarDolares);
divMainOperacionesCompraComprarDolares.appendChild(inputMainOperacionesCompraComprarDolares);
divMainOperacionesCompraComprarDolares.appendChild(botonMainOperacionesCompraComprarDolares);
divMainOperacionesComprarDolares.appendChild(divMainOperacionesVentaComprarDolares);
divMainOperacionesVentaComprarDolares.appendChild(h4MainOperacionesVentaComprarDolares);
divMainOperacionesVentaComprarDolares.appendChild(inputMainOperacionesVentaComprarDolares);
divMainOperacionesVentaComprarDolares.appendChild(botonMainOperacionesVentaComprarDolares);
divComprarDolaresMain.appendChild(divApiComprarDolares);
divApiComprarDolares.appendChild(ulApiComprarDolares);





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
main.style.minHeight = '100vh';
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
divOPIngresarSaldo.style.overflow = 'auto';
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
divListaContacto.style.overflowY = 'auto';
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
inputTelefono.type = "number";

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
divTransferirAcontacto.style.display = 'none';
//
divTransferirAcontactoh3.style.display = 'flex';
//
imgAtras3.style.width = '50px';
imgAtras3.style.height = '50px';
imgAtras3.style.padding = '20px';
//
h3TransferirAcontacto.style.width = '90%';
h3TransferirAcontacto.innerHTML = '¿Cuánto dinero querés transferir?';
h3TransferirAcontacto.style.fontSize = '30px';
h3TransferirAcontacto.style.padding = '20px';
h3TransferirAcontacto.style.margin = '0px';
//
inputTransferirAcontacto.style.margin = '20px';
inputTransferirAcontacto.style.width = '94%';
inputTransferirAcontacto.style.height = '140px';
inputTransferirAcontacto.type = 'number';
inputTransferirAcontacto.placeholder = '$ 0';
inputTransferirAcontacto.style.textAlign = 'center';
inputTransferirAcontacto.style.fontSize = '50px';
inputTransferirAcontacto.style.borderWidth = '0px';
//
botonContinuarTransferencia.style.webkitBorderRadius = '5px';
botonContinuarTransferencia.style.margin = '0px 20px 20px 20px';
botonContinuarTransferencia.innerText = 'Continuar';
botonContinuarTransferencia.style.background = '#009ee3';
botonContinuarTransferencia.style.cursor = 'pointer';
botonContinuarTransferencia.style.border = 'none';
botonContinuarTransferencia.style.padding = '15px 15px';
botonContinuarTransferencia.style.fontsize = '20px';
botonContinuarTransferencia.style.fontWeight = 'bold';
botonContinuarTransferencia.style.position = 'relative';
botonContinuarTransferencia.style.color = 'white';
botonContinuarTransferencia.style.marginTop = '30px';
botonContinuarTransferencia.style.width = '95%';
botonContinuarTransferencia.style.textAlign = 'center';
//
divOPpagarServicios.style.display = 'none';
//
divPagarServiciosSalir.style.display = 'flex';
//
h3PagarServicios.style.width = '90%';
h3PagarServicios.innerHTML = 'Pagar Servicios';
h3PagarServicios.style.fontSize = '30px';
h3PagarServicios.style.padding = '20px';
h3PagarServicios.style.margin = '0px';
//
imgAtras4.style.width = '50px';
imgAtras4.style.height = '50px';
imgAtras4.style.padding = '20px';
//
divPagarServiciosPagos.style.display = 'flex';
//
divPagarServiciosCant.style.width = '20%';
divPagarServiciosCant.style.textAlign = 'center';
divPagarServiciosCant.style.alignItems = 'center';
//
divPagarServiciosCuentas.style.width = '80%';
//
h4PagarServiciosCant.innerText = 'Ingrese cantidad de servicios a abonar (Max 9)';
h4PagarServiciosCant.style.margin = '20px';
//
inputPagarServiciosCant.style.margin = '0px 20px 20px 20px';
inputPagarServiciosCant.style.background = '#009ee3';
inputPagarServiciosCant.style.color = 'white';
inputPagarServiciosCant.style.width = '30px';
inputPagarServiciosCant.style.height = '30px';
inputPagarServiciosCant.style.webkitBorderRadius = '30px';
inputPagarServiciosCant.style.textAlign = 'center';
inputPagarServiciosCant.style.fontSize = '20px';
inputPagarServiciosCant.type = 'number';
inputPagarServiciosCant.min = '1';
inputPagarServiciosCant.max = '9';
//
divbotonPagarServiciosCant.style.margin = '0px 20px 20px 20px';
//
botonPagarServiciosCant.innerText = 'Siguiente';
botonPagarServiciosCant.style.background = '#009ee3';
botonPagarServiciosCant.style.color = 'white';
botonPagarServiciosCant.style.webkitBorderRadius = '30px';
botonPagarServiciosCant.style.padding = '10px';
//
divPagarServiciosCuentasTitulo.style.display = 'flex';
//
divPagarServiciosCuentasLista.style.display = 'flex';
divPagarServiciosCuentasListaServicios.style.width = '50%';
divPagarServiciosCuentasListaServicios.style.marginLeft = '50px';
divPagarServiciosCuentasListaValor.style.width = '50%';
//
h4PagarServiciosCuentas.innerText = 'Servicio';
h4PagarServiciosCuentas.style.width = '50%';
h4PagarServiciosCuentas.style.marginLeft = '50px';
//
h4PagarServiciosCuentas2.innerText = 'Valor'
h4PagarServiciosCuentas2.style.width = '50%';
//
divPagarServiciosCuentasTotal.style.display = 'flex';
//
divPagarServiciosCuentasTotaltxt.style.width = '50%';
divPagarServiciosCuentasTotaltxt.style.marginLeft = '50px';
h4PagarServiciosCuentasTotaltxt.innerHTML = "Total";
h4PagarServiciosCuentasTotaltxt.style.textAlign ='end';
h4PagarServiciosCuentasTotaltxt.style.paddingRight ='20px';
//
divPagarServiciosCuentasTotalNum.style.width = '50%';
h4PagarServiciosCuentasTotalNum.innerHTML = '$ ';
//
divPagarServiciosCuentasPagar.style.textAlign ='center';
divPagarServiciosCuentasPagar.style.marginBottom ='20px';
//
botonPagarServiciosCuentas.innerText = 'PAGAR';
botonPagarServiciosCuentas.style.background = '#009ee3';
botonPagarServiciosCuentas.style.color = 'white';
botonPagarServiciosCuentas.style.webkitBorderRadius = '30px';
botonPagarServiciosCuentas.style.width = '50%';
botonPagarServiciosCuentas.style.padding = '10px';
//

divModalPagarServicios.style.display = "none";
divModalPagarServicios.style.position = "fixed";
divModalPagarServicios.style.zIndex = "1";
divModalPagarServicios.style.left = "0";
divModalPagarServicios.style.top = "0";
divModalPagarServicios.style.width = "100%";
divModalPagarServicios.style.height = "100%";
divModalPagarServicios.style.overflow = "auto";
divModalPagarServicios.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
//
divModalPagarServiciosOperacion.style.display = "block";
divModalPagarServiciosOperacion.style.backgroundColor = "white";
divModalPagarServiciosOperacion.style.position = "absolute";
divModalPagarServiciosOperacion.style.top = "50%";
divModalPagarServiciosOperacion.style.left = "50%";
divModalPagarServiciosOperacion.style.transform = "translate(-50%, -50%)";
divModalPagarServiciosOperacion.style.padding = "20px";
divModalPagarServiciosOperacion.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)"
divModalPagarServiciosOperacion.style.webkitBorderRadius = "30px";
//
divModalPagarServiciosOperacion.style.textAlign ='center';
//
h4ModalPagarServiciosServicios.innerText = 'Ingrese el nombre del servicio';
//
inputModalPagarServiciosMonto.type = 'number';
//
h4ModalPagarServiciosMonto.innerText = 'Ingrese el monto a abonar';
h4ModalPagarServiciosMonto.style.marginTop = '50px';
//
botonModalIniciarAgregarServicio.style.marginTop = '50px';
botonModalIniciarAgregarServicio.innerText = 'Agregar';
botonModalIniciarAgregarServicio.style.background = '#009ee3';
botonModalIniciarAgregarServicio.style.color = 'white';
botonModalIniciarAgregarServicio.style.webkitBorderRadius = '30px';
botonModalIniciarAgregarServicio.style.width = '50%';
botonModalIniciarAgregarServicio.style.padding = '10px';
//
divbotonModalSiguienteServicio.style.display = "none";
//
botonModalSiguienteServicio.style.marginTop = '50px';
botonModalSiguienteServicio.innerText = 'Siguiente';
botonModalSiguienteServicio.style.background = '#009ee3';
botonModalSiguienteServicio.style.color = 'white';
botonModalSiguienteServicio.style.webkitBorderRadius = '30px';
botonModalSiguienteServicio.style.width = '50%';
botonModalSiguienteServicio.style.padding = '10px';
//
divOPComprarDolares.style.display = 'none';
//
divComprarDolaresSalir.style.display = 'flex';
//
h3ComprarDolares.style.width = '90%';
h3ComprarDolares.innerHTML = 'Comprar Dolares';
h3ComprarDolares.style.fontSize = '30px';
h3ComprarDolares.style.padding = '20px';
h3ComprarDolares.style.margin = '0px';
//
imgAtras5.style.width = '50px';
imgAtras5.style.height = '50px';
imgAtras5.style.padding = '20px';
//
divComprarDolaresMain.style.display = 'flex';
//
divMainSaldosComprarDolares.style.width = '33%';
divMainSaldosComprarDolares.style.padding = '20px';
divMainSaldosComprarDolares.style.margin = '0px';
//
h5MainSaldosPesosTxtComprarDolares.innerText = 'Saldo en pesos';
h5MainSaldosPesosTxtComprarDolares.style.margin = '0px 0px 10px 0px';
h5MainSaldosPesosTxtComprarDolares.style.fontSize = '20px';
//
h4MainSaldosPesosComprarDolares.innerHTML = ' $  ' + sessionStorage.getItem('saldoUsuario');
h4MainSaldosPesosComprarDolares.style.margin = '0px 0px 30px 0px';
h4MainSaldosPesosComprarDolares.style.fontSize = '40px';
//
h5MainSaldosDolaresTxtComprarDolares.innerText = 'Saldo en dólares';
h5MainSaldosDolaresTxtComprarDolares.style.margin = '0px 0px 10px 0px';
h5MainSaldosDolaresTxtComprarDolares.style.fontSize = '20px';
//
h4MainSaldosDolaresComprarDolares.innerHTML = 'u$s ';
h4MainSaldosDolaresComprarDolares.style.margin = '0px 0px 20px 0px';
h4MainSaldosDolaresComprarDolares.style.fontSize = '40px';
//
divMainOperacionesComprarDolares.style.width = '33%';
divMainOperacionesComprarDolares.style.padding = '20px';
divMainOperacionesComprarDolares.style.marginBottom = '20px';
divMainOperacionesComprarDolares.style.boxShadow = '10px 10px 30px rgba(0, 0, 0, 0.3)';
divMainOperacionesComprarDolares.style.border = '0.5px solid grey';
divMainOperacionesComprarDolares.style.webkitBorderRadius = '10px';
divMainOperacionesComprarDolares.style.background = '#6ec5ff';
//
divMainOperacionesCompraComprarDolares.style.height = '50%';
//
h4MainOperacionesCompraComprarDolares.innerText = 'Comprar dólares';
h4MainOperacionesCompraComprarDolares.style.fontSize = '30px';
h4MainOperacionesCompraComprarDolares.style.margin = '0px 0px 10px 0px';
//
inputMainOperacionesCompraComprarDolares.style.width = '60%';
inputMainOperacionesCompraComprarDolares.style.marginRight = '5px';
inputMainOperacionesCompraComprarDolares.placeholder = 'Ingrese valor en dolares';
inputMainOperacionesCompraComprarDolares.type = 'number';
//
botonMainOperacionesCompraComprarDolares.innerText = 'Comprar';
//
divMainOperacionesCompraComprarDolares.style.height = '50%';
//
h4MainOperacionesVentaComprarDolares.innerText = 'Vender dólares';
h4MainOperacionesVentaComprarDolares.style.fontSize = '30px';
h4MainOperacionesVentaComprarDolares.style.margin = '0px 0px 10px 0px';
//
inputMainOperacionesVentaComprarDolares.style.width = '60%';
inputMainOperacionesVentaComprarDolares.style.marginRight = '5px';
inputMainOperacionesVentaComprarDolares.placeholder = 'Ingrese valor en dolares';
inputMainOperacionesVentaComprarDolares.type = 'number';
//
botonMainOperacionesVentaComprarDolares.innerText = 'Vender';
//
divApiComprarDolares.style.width = '33%';
divApiComprarDolares.style.padding = '20px';
divApiComprarDolares.style.margin = '0px';

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
    div7.style.display = 'none';
}

imgAtras2.addEventListener("mouseover", () => {
    imgAtras2.style.cursor = "pointer";
})

// Ocultar y Mostrar: divOPTransferirSaldo y divTransferirAcontacto
function ocultardivOPTransferirSaldo() {
    let div5 = document.getElementById('divOPTransferirSaldo');
    div5.style.display = 'none';
    let div6 = document.getElementById('divTransferirAcontacto');
    div6.style.display = 'block';
}
document.getElementById('imgAtras3').addEventListener("click", ocultardivTransferirAcontacto);

function ocultardivTransferirAcontacto() {
    let div7 = document.getElementById('divTransferirAcontacto');
    div7.style.display = 'none';
    let div6 = document.getElementById('divOPTransferirSaldo');
    div6.style.display = 'block';

}
// Ocultar y Mostrar: divOPpagarServicios
document.getElementById('idPagarServicios').addEventListener("click", ocultarDivPagarServicios);

function ocultarDivPagarServicios() {
    let div3 = document.getElementById('div3main');
    div3.style.display = 'none';
    let div4 = document.getElementById('divOPpagarServicios');
    div4.style.display = 'block';
}

document.getElementById('imgAtras4').addEventListener("click", mostrarDivPagarServicios);

function mostrarDivPagarServicios() {
    let div3 = document.getElementById('div3main');
    div3.style.display = 'block';
    let div4 = document.getElementById('divOPpagarServicios');
    div4.style.display = 'none';
}

imgAtras.addEventListener("mouseover", () => {
    imgAtras.style.cursor = "pointer";
})

// Ocultar y Mostrar: divOComprarDolares
document.getElementById('divComprarDolares').addEventListener("click", ocultarDivComprarDolares);

function ocultarDivComprarDolares() {
    let div3 = document.getElementById('div3main');
    div3.style.display = 'none';
    let div4 = document.getElementById('divOPComprarDolares');
    div4.style.display = 'block';
    h4MainSaldosPesosComprarDolares.innerHTML = '$  ' + sessionStorage.getItem('saldoUsuario');
}

document.getElementById('imgAtras5').addEventListener("click", mostrarDivComprarDolares);

function mostrarDivComprarDolares() {
    let div3 = document.getElementById('div3main');
    div3.style.display = 'block';
    let div4 = document.getElementById('divOPComprarDolares');
    div4.style.display = 'none';
}

imgAtras.addEventListener("mouseover", () => {
    imgAtras.style.cursor = "pointer";
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

//
//Transferir dinero a contacto  (USO DE JSON)
let botonContinuarTransferencia1 = document.getElementById('botonContinuarTransferencia');
let inputTransferirAcontacto2 = document.getElementById('inputTransferirAcontacto');

botonContinuarTransferencia1.addEventListener("click", () => {
    let restarSaldo = parseFloat(inputTransferirAcontacto2.value);
    let saldo = sessionStorage.getItem("saldoUsuario");
    let saldoParse = JSON.parse(saldo);

    if (restarSaldo > 0 && Number.isInteger(restarSaldo)) {
        if (saldoParse >= restarSaldo) {      
            swal({
            title: "Transferencia realizada!",
            text: "Se transfirieron $ " + restarSaldo,
            icon: "success",
            button: "Aceptar"
            })
            .then(() => {
                let saldo = sessionStorage.getItem("saldoUsuario");
                let saldoParse = JSON.parse(saldo);
                saldoParse -= restarSaldo;
                swal({
                    title: "Saldo Actual",
                    text: "Tu saldo es de $" + saldoParse,
                    icon: "info",
                    button: "Aceptar",
                })
                .then(() => {
                    inputTransferirAcontacto2.value = '';
                    txtSaldo.innerText = "$ " + saldoParse;
                    const saldoString = JSON.stringify(saldoParse);
                    sessionStorage.setItem("saldoUsuario", saldoString);
                 });
            });
        }
        else {
            swal({
                title: "Error!",
                text: "Saldo insuficiente",
                icon: "error",
                button: "Aceptar"
            });
        }
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
    if (!apodoInput || !nombreInput || !telefonoInput) {
        swal({
            title: "Todos los campos son obligatorios",
            text: "Intenta nuevamente",
            icon: "warning",
            button: "Aceptar",
          });
    }
    else {
    const persona1 = new agregarContacto(apodoInput,nombreInput,telefonoInput);
    swal({
        title: "Nuevo contacto agregado",
        text: persona1.nombre + " se agregó a tu lista de contactos",
        icon: "success",
        button: "Aceptar",
      });
    arrayContacto.push(persona1);
    let div7 = document.getElementById('divNuevoContacto');
    div7.style.display = 'none';
    const divh3Contacto = document.createElement('div');
    divListaContacto.appendChild(divh3Contacto);
    const h3Contacto = document.createElement('h3');
    h3Contacto.innerText = persona1.apodo + " || " +  persona1.telefono;
    h3Contacto.addEventListener('click', () => {
        
        swal({
            title: "Detalles del contacto:",
            text: "Nombre: " + persona1.nombre + "\nTeléfono: " + persona1.telefono,
            button: "Aceptar",
          });
        ocultardivOPTransferirSaldo()
    });
    divh3Contacto.appendChild(h3Contacto);
    h3Contacto.style.margin = '0px';
    h3Contacto.style.cursor = 'pointer';
    const BotonborrarContacto = document.createElement('button');
    BotonborrarContacto.innerText = 'Eliminar';
    BotonborrarContacto.addEventListener('click', () => {
        divListaContacto.removeChild(divh3Contacto);
    });
    divh3Contacto.appendChild(BotonborrarContacto);
    divh3Contacto.style.width = "50%";
    divh3Contacto.style.display = "flex";
    divh3Contacto.style.justifyContent = "space-between";
    divh3Contacto.style.alignItems = 'center';
    divh3Contacto.style.margin = '10px 0px';
    BotonborrarContacto.style.webkitBorderRadius = '10px';
    BotonborrarContacto.style.background = 'red';
    BotonborrarContacto.style.cursor = 'pointer';
    BotonborrarContacto.style.border = 'none';
    BotonborrarContacto.style.padding = '2px 10px';
    BotonborrarContacto.style.fontSize = '15px';
    BotonborrarContacto.style.fontWeight = 'bold';
    BotonborrarContacto.style.color = 'black';
    BotonborrarContacto.style.textAlign = 'center';
    BotonborrarContacto.style.alignSelf = 'center';
    inputApodo.value = '';
    inputNombreCompleto.value = '';
    inputTelefono.value = '';
}
})


//Pagar servicios (Funcion asincronica y ciclo for)

let servicios = document.getElementById('inputPagarServiciosCant');

document.getElementById('botonPagarServiciosCant').addEventListener("click", () => {
    let serviciosParse = parseInt(servicios.value);
    if (serviciosParse > 0 && serviciosParse < 9) {
        let divModalPagarServicios = document.getElementById('divModalPagarServicios');
        divModalPagarServicios.style.display = 'block';
    } else {
        swal({
            title: "Cantidad incorrecta",
            text: "Debes elegir un número entre 1 y 9",
            icon: "warning",
            button: "Aceptar",
        });
    }
});



document.getElementById('botonModalIniciarAgregarServicio').addEventListener("click", (e) => {
    e.preventDefault()
    IniciarAgregarServicios()
})

let subTotalFactura = 0.0

async function IniciarAgregarServicios() {
    subTotalFactura = 0.0
    divPagarServiciosCuentasListaServicios.innerHTML = '';
    divPagarServiciosCuentasListaValor.innerHTML = '';
    let serviciosParse = parseInt(servicios.value);
    let subTotal = subTotalFactura;
    divbotonModalSiguienteServicio.style.display = 'block';
    divbotonModalIniciarAgregarServicio.style.display = 'none';
    

    const botonSiguiente = document.getElementById('botonModalSiguienteServicio');

    function esperarClick() {
        return new Promise((resolve) => {
                        function hacerClick(e) {
                e.preventDefault();
                botonSiguiente.removeEventListener("click", hacerClick);
                resolve();
            }
            botonSiguiente.addEventListener("click", hacerClick);
        });
    }

    for (let i = 0; i < serviciosParse; i++) {
        let servicio1 = document.getElementById('inputModalPagarServiciosServicios').value;
        let valor1 = parseFloat(document.getElementById('inputModalPagarServiciosMonto').value);
        if (servicio1.trim() === '' || isNaN(valor1) || valor1 <= 0) {
            swal({
                title: "Los datos ingresados son incorrectos",
                icon: "error",
                button: "Aceptar"
            })
            continue;
        }
        const h4ServicioFactura = document.createElement('h4');
        divPagarServiciosCuentasListaServicios.appendChild(h4ServicioFactura);
        h4ServicioFactura.innerHTML = servicio1;
        const h4ValorFactura = document.createElement('h4');
        divPagarServiciosCuentasListaValor.appendChild(h4ValorFactura);
        h4ValorFactura.innerHTML = valor1;
        subTotal += valor1;
        h4PagarServiciosCuentasTotalNum.innerHTML = '$ ' + subTotal;
        document.getElementById('inputModalPagarServiciosServicios').value = '';
        document.getElementById('inputModalPagarServiciosMonto').value = '';     
        if(i < serviciosParse - 1){
            await esperarClick();
        }
        else if(i = serviciosParse){
            divModalPagarServicios.style.display = 'none';
            divbotonModalSiguienteServicio.style.display = 'none';
            divbotonModalIniciarAgregarServicio.style.display = 'block';
        }
  
    }
    subTotalFactura = subTotal;
}

document.getElementById('botonPagarServiciosCuentas').addEventListener("click", (e) => {
    e.preventDefault()
    if(subTotalFactura == 0.0){
        swal({
            title: "No hay servicios para abonar",
            icon: "error",
            button: "Aceptar"
        })
    }
    else if(subTotalFactura > sessionStorage.getItem('saldoUsuario')){
        swal({
            title: "Saldo insuficiente",
            icon: "error",
            button: "Aceptar"
        })
        }
    else{
        let saldo = sessionStorage.getItem("saldoUsuario");
        let saldoParse = JSON.parse(saldo);
        saldoParse -= subTotalFactura;
        const saldoString = JSON.stringify(saldoParse);
        sessionStorage.setItem("saldoUsuario", saldoString);
        txtSaldo.innerText = "$ " + sessionStorage.getItem('saldoUsuario');
        swal({
            title: "Pago realizado con éxito",
            text: "Tu saldo actual es de $ " + sessionStorage.getItem('saldoUsuario'),
            icon: "success",
            button: "Aceptar"
        })
        divPagarServiciosCuentasListaServicios.innerHTML = '';
        divPagarServiciosCuentasListaValor.innerHTML = '';
        h4PagarServiciosCuentasTotalNum.innerHTML = '$ ';
        inputPagarServiciosCant.value = '';
        subTotalFactura = 0.0;
    }
    }
)


//Fetch y Api

const api = document.getElementById('ulApiComprarDolares');

fetch("https://api.bluelytics.com.ar/v2/latest")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);         
        const blue = data.blue;
        const actualizacion = data.last_update;
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>Valor del dólar</h3>
            <p>Compra: ${blue.value_buy}</p>
            <p>Venta: ${blue.value_sell}</p>
            <p>Ultima actualización: ${actualizacion}</p>
             `
        ;
            api.appendChild(li);
        })
