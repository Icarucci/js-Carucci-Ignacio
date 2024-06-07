let log1 = "ADMIN";
let log2 = "ADMIN";
let saldo = 0.0;
const arrayContacto = [];


inicio();

function inicio(){
    alert("Bienvenido a PagoMisDeudas")
    let inicio = prompt("Ya tenes cuenta? S/N");
    if(inicio === "s"){
        login();
        }
    else if(inicio == "n"){
        crearUsuario();
    }
    else{
        home();
    }
}
        
function home(){
    alert ("Logueo incorrecto.")
    inicio();
}

 function login() {
    let usuario = prompt("Ingrese su Usuario:");
    let contrasenia = prompt("Ingrese su Contraseña:");
    if (log1 === usuario && log2 === contrasenia){
        alert("Bienvenido/a " + usuario + ".")
        operaciones();

    }
    else{
        alert("El usuario o la contraseña no existen.");
        home();
    }

}

function crearUsuario() {
        log1 = prompt("Ingrese nuevo Usuario:");
        log2 = prompt("Ingrese nueva Contraseña:");
        alert("Nuevo usuario creado!");
        login();
        }

function operaciones(){
        let operacion = prompt ("Hola, " + log1 + ".\n \n¿Que deseas realizar hoy?:\n \n(1) Consulta de Saldo\n(2) Recargar Saldo\n(3) Transferir dinero\n(4) Pagar Servicios\n(5) Salir");
        if (operacion === "1"){
            consultaDeSaldo();
        }
        else if (operacion === "2"){
            recargaSaldo();
        }
        else if (operacion === "3"){
            transferirDinero();
        }
        else if (operacion === "4"){
            pagarServicios();
        }
        else if (operacion === "5"){
            alert("Muchas gracias por utilizar PagoMisDeudas. ¡Hasta luego!");
            inicio();
        }
        else{
            alert("Opcion incorrecta.");
            operaciones();
        }
}

function consultaDeSaldo(){
            alert("Su saldo actual es de: $ " + saldo);
            operaciones();
        }

function recargaSaldo(){
            let recarga = prompt ("Desea cargar saldo? S/N");
            if (recarga === "s"){
                let sumaSaldo = prompt ("Cuanto monto desea recargar?");
                sumaSaldo = parseFloat(sumaSaldo);
                if (sumaSaldo > 0){
                    alert("Se añadieron $" + sumaSaldo + " a tu cuenta");
                    saldo+=sumaSaldo;
                    alert("Saldo actual: $" + saldo);
                    operaciones();   
                }
                else{
                    alert("Valor invalido.")
                    recargaSaldo();
                
                }

            }
            else if (recarga === "n"){
                operaciones();
            }
            else{
                alert("Opcion incorrecta.")
                operaciones();
            }
        }

function transferirDinero(){
            let transferir = prompt("Transferir dinero\n \n(1) Elegir contacto por lista\n \n(2) Buscar Contacto por tel\n \n(3) Agregar contacto\n \n(4) Volver atrás");
            if (transferir === "1"){
                elegirContacto();
            }
            else if(transferir === "2"){
                let buscador = prompt("Ingrese numero del contacto");
                const telefono = arrayContacto.find(contacto => contacto.telefono === buscador);
                if (telefono == undefined){
                    alert("El contacto no existe.");
                    transferirDinero();
                }
                else {
                    alert("Contacto encontrado: " + telefono.apodo)
                    transferirDinero();
                }
            }
            else if (transferir === "3"){
                //Constructores
                agregarContacto();

                // Instancia del objeto persona
                const persona1 = new agregarContacto(
                    prompt("Ingrese el apodo"),
                    prompt("Ingrese el nombre completo"),
                    prompt("Ingrese el Telefono"));
                alert("Nuevo contacto Agregado!\n \n" + persona1.apodo + "\n" + persona1.telefono);
                arrayContacto.push(persona1);
                transferirDinero();
            }
            else{
                operaciones();
            }
}

function pagarServicios(){
            let servicios = prompt("¿Cuantos servicios desea pagar?");
            if (servicios > 0){
                for(let i=0; i<servicios; i++){
                    let servicio1 = prompt("Ingrese el nombre del servicio:");
                    let valor1 = prompt("Ingrese el monto a abonar:");
                    alert("Usted va a abonar los siguientes servicios: " + servicio1 + " por $" + valor1);
                    valor1 = parseFloat(valor1);
                    if (valor1 > 0 && valor1 < saldo){
                        saldo-=valor1;
                        alert("Pagaste "  + servicio1 + " por un total de: $" + valor1);
                        alert("Saldo actual: $" + saldo);
                    }
                    else if(valor1 < 0){
                        alert("El importe debe ser positivo.");
                    }
                    else if(valor1 > 0 && valor1 > saldo){
                        alert("Saldo insuficiente.");
                    }
                    else{
                        alert("Valor incorrecto.");
                    }
                }
                alert("Gracias por utilizar el sistema de pagos!")
                operaciones();
            }
            else if(servicios = 0){
                alert("Ningun servicio a abonar.");
                operaciones();
            }
            else{
                alert("Valor incorrecto.")
                pagarServicios();
            }
}

function elegirContacto(){
    let lista = "";
    for (let i = 0; i < arrayContacto.length; i++) {
        lista += ((i+1) + ". " + arrayContacto[i].apodo + "\n");
    }
    let contacto = prompt("¿A quién le querés transferir?\n" + "\n" + lista + " \n" + "\n" + "(V) Volver atrás");
    if (contacto >= 1 && contacto <= arrayContacto.length){ 
        transferirAPersona(contacto - 1);
        transferirDinero();
    }
    else if (contacto === "v"){
        transferirDinero();
    }
    else{
        alert("Opcion incorrecta.")
        elegirContacto();
    }
}



//Constructor
function agregarContacto(apodo, nombre, telefono) {
    this.apodo = apodo;
    this.nombre = nombre;
    this.telefono = telefono;

}

function transferirAPersona(index){
    let valor3 = prompt("Ingrese el monto que desea transferir a: " +  arrayContacto[index].apodo);
    alert("Vas a transferir: $ " + valor3);
    valor3 = parseFloat(valor3);
        if (valor3 > 0 && valor3 < saldo){
            saldo-=valor3;
            alert("Transacción realizada con exito.");
            alert("Saldo actual: $" + saldo);
        }
        else if(valor3 < 0){
            alert("El importe debe ser positivo.");
        }
        else if(valor3 > 0 && valor3 > saldo){
            alert("Saldo insuficiente.");
        }
        else{
            alert("Valor incorrecto.");
        }
    }