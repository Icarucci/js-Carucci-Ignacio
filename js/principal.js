//Variables globales
let saldo = 0.0;

// Delaración de Variables del Body y asignaciones de ID y/o clases
const body = document.getElementById('body');

// Delaración de Variables DivContainer y asignaciones de ID y/o clases
const containerDiv = document.createElement('div');
containerDiv.setAttribute('class','container');
const classContainter = document.getElementById('container');

// Delaración de Variables Aside y asignaciones de ID y/o clases
const aside = document.createElement('aside');
aside.setAttribute('id','aside');
const asidePrincipal = document.getElementById('aside');
const divlog = document.createElement('div');
divlog.setAttribute('id','divlog');
const div1 = document.createElement('div');
div1.setAttribute('id','div1');
const userNameAside = document.createElement('h3');
userNameAside.setAttribute('class','txtUserAside');
const logOut = document.createElement('button');
logOut.setAttribute('id', 'deslogueo');
logOut.setAttribute('class','logOut');
const img = document.createElement('img');
const LOGOORIGEN = document.createElement('a');
const asideSecundario = document.createElement('div');

// Delaración de Variables main y asignaciones de ID y/o clases
const main = document.createElement('main');
const div1main = document.createElement('div');
div1main.setAttribute('id','horaMain');
const div2main = document.createElement('div');
const div3main = document.createElement('div');
div3main.setAttribute('id','div3main');
const div4main = document.createElement('div');
div4main.setAttribute('id','div4main');
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
const divimgTransferirSaldo = document.createElement('div');
const divimgPagarServicios = document.createElement('div');
const divimgComprarDolares = document.createElement('div');
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
const continuarSaldo = document.createElement('button');
continuarSaldo.setAttribute('id', 'idContinuar');






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





//Asignacion DOM al AsideSecundario
containerDiv.appendChild(asideSecundario)

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
div4main.style.margin= '0px 20px 20px 20px';
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
txtSaldo.innerText = "$ " + saldo;
txtSaldo.style.fontSize = '35px';
txtSaldo.style.margin = '10px 20px 0px 0px';
//
imgSaldoEyeOpen.style.width="50px";
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
continuarSaldo.type = 'submit';
continuarSaldo.style.width = '95%';
continuarSaldo.style.textAlign = 'center';
//
asideSecundario.style.backgroundColor = '#f4f4f4';
asideSecundario.style.padding = '20px';



//Evento Deslogueo
let login = document.getElementById('deslogueo');

login.addEventListener('click', (e) => {
    sessionStorage.removeItem("log1");
    sessionStorage.removeItem("log2");
    window.location.assign('index.html');
    alert("Hasta luego!");
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

mostrarSaldo.addEventListener("mouseover", () =>{
    imgSaldoEyeOpen.style.cursor = "pointer";
})
mostrarSaldo.addEventListener("mouseout", () =>{
    imgSaldoEyeOpen.style.cursor = "default";
})


mostrarSaldo.addEventListener("click", () =>{
    if (imgSaldoEyeOpen.src.includes("ojoabierto.png")) {
        imgSaldoEyeOpen.src = 'assets/img/ojocerrado.png';
        txtSaldo.innerText = "$ ****";

    } else {
        imgSaldoEyeOpen.src = 'assets/img/ojoabierto.png';
        txtSaldo.innerText = "$ " + saldo;
    }
});

//Ocultar y mostrar div Operaciones

document.getElementById('idIngresarSaldo').addEventListener("click", ocultarDiv);

function ocultarDiv() {
    let div3 = document.getElementById('div3main');
    div3.style.display = 'none';
    let div4 = document.getElementById('divOPIngresarSaldo');
    div4.style.display = 'block';
    }

document.getElementById('imgAtras').addEventListener("click", mostrarDiv);

function mostrarDiv() {
    let div3 = document.getElementById('div3main');
    div3.style.display = 'block';
    let div4 = document.getElementById('divOPIngresarSaldo');
    div4.style.display = 'none';    
    }

imgAtras.addEventListener("mouseover", () =>{
    imgAtras.style.cursor = "pointer";
})
mostrarSaldo.addEventListener("mouseout", () =>{
    imgAtras.style.cursor = "default";
})

//Sumar saldo
let sumaSaldo = document.getElementById('idcontinuar');

login.addEventListener('submit', (e) => {
    e.preventDefault();
    let sumaSaldo = inputAgregarSaldo.value
    sumaSaldo = parseFloat(sumaSaldo);
    if (sumaSaldo > 0){
        alert("Se añadieron $" + sumaSaldo + " a tu cuenta");
        saldo+=sumaSaldo; 
    }
    else{
        alert("Valor invalido.");    
    }
})
