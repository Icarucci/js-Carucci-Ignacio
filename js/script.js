let log1 = "ADMIN";
let log2 = "ADMIN";
let saldo = 0.0;


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
        let operacion = prompt ("¿Que desea realizar?: " + "//" + "Consulta de Saldo (1) " + "//" + "Recargar Saldo (2)" + "//" + "Pagar Servicios (3)" + "//" + "Salir (4)");
        if (operacion === "1"){
            consultaDeSaldo();
        }
        else if (operacion === "2"){
            recargaSaldo();
        }
        else if (operacion === "3"){
            pagarServicios();
        }
        else if (operacion === "4"){
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


