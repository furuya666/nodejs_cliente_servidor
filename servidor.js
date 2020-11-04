var dgram = require('dgram');
var server = dgram.createSocket("udp4");
server.on ("message", function(msg,client) {
     let cadena=msg.toString().split("/");
    
  if(msg==("dcopalupe/123456") ){
    const b="Bienvenido Dan Israel Copa Lupe!!!!!";
    server.send(b,0,b.length, client.port,client.address,function(){
     
  
  });
  }else{
    if(msg==("jalanocaquino/1q2w3e4") ){
        const b="Bienvenido Jorge Andres Alanoca Quino!!!!!";
        server.send(b,0,b.length, client.port,client.address,function(){
         
      
      });
      }else{
        if(msg==("acondoriquispe/54321") ){
            const b="Bienvenido Ana Condori Quispe!!!!!";
            server.send(b,0,b.length, client.port,client.address,function(){
             
          
          });
          }else{

                if(cadena[0]=="dcopalupe" || cadena[0]=="jalanocaquino" || cadena[0]=="acondoriquispe"){
                    const b='La contraseña para '+cadena[0]+' es incorrecta o no existe.';
                   
                    server.send(b,0,b.length, client.port,client.address,function(){
                     
                  
                  });
                }else{
                    if(cadena[1]=="123456" || cadena[1]=="1q2w3e4" || cadena[1]=="54321"){
                        const b='El usuario '+cadena[0]+' es incorrecta o no existe.';
                        server.send(b,0,b.length, client.port,client.address,function(){
                         
                      
                      });
                    }
                    else{
                        const b='El usuario '+cadena[0]+' es incorrecta o no existe.';
                        server.send(b,0,b.length, client.port,client.address,function(){
                         
                      
                      });
                    }
                }
               
          
            
          }


      }
  }

const an="Ingrese usuario y contraseña...... user/pass";
server.send(an,0,an.length, client.port,client.address,function(){
    
});
console.log('Cliente Conectado '+msg);

//const ans='Hola'+' '+msg+' te saluda el servidor';


});

server.on('listening',function(){
    const address=server.address();
    console.log('Serevidor corriendo en el puerto : '+address.port);
}); 
server.bind(3000);