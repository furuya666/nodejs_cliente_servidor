var dgram = require('dgram');
var mensaje = new Buffer.from("Mensaje al servidor");
var client = dgram.createSocket("udp4");
const readline = require('readline')
/// la lectura desde teclado 
console.log("Bienvenido al sistema de LAB-273");
console.log("Ingrese usuario y contraseña......user/pass");

let rl=readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
});

client.on('message',function(msg){
    ///////conversion a String del mensaje
    if(msg=="Bienvenido Dan Israel Copa Lupe!!!!!" || msg=="Bienvenido Jorge Andres Alanoca Quino!!!!!"  || msg=="Bienvenido Ana Condori Quispe!!!!!"  ){
        client.close();
        rl.close();

    }
    console.log(msg.toString());
    
    
  });
  
rl.on('line',(mensaje)=>{
   
   
        ////////si no es igual a ADIOS entonces seguira recibiendo mensajes
        client.send(mensaje,0,mensaje.length, 3000, "localhost", function (err,
            bytes) {})
            
   
});


///funcion te muestra  si te desconectaste del servidor
client.on('close',function(){
   
    console.log('Desconectado del servidor');
});