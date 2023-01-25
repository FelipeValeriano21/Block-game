
var PosX = 20; 
var PosY = 20; 
var VelX = 10; 
var VelY = 10; 
var size = 40; 
var cont = 0; 
objcolor = "green";

var teste = 0; 

var PosBlocoX = Math.floor(Math.random() * 700); 
var PosBlocoY = Math.floor(Math.random() * 480);

var PosObsX = 280; 
var PosObsY = 0; 
var SizeObs = 40; 



var sizeBloco = 8; 
var c = document.getElementById("idCanvas");
var ctx = c.getContext("2d");

//onload =  window.alert("click em qualquer seta para começar");







function posicionar (){

    PosBlocoX = Math.floor(Math.random() * 700); 
    PosBlocoY = Math.floor(Math.random() * 500);


}




function loop(){

    window.requestAnimationFrame(loop, canvas); 
    update(); 
    draw();
   

}

function colide (){

    if  (PosX + size > PosBlocoX && PosX < PosBlocoX + sizeBloco && PosY + size > PosBlocoY && PosY < PosBlocoY + sizeBloco){

        posicionar ();
        objcolor = "red";
        cont++;
        const audio = document.getElementById('som');
        audio.play();


        

    }else{

        objcolor = "green";

    }

    if (PosX + size > PosObsX && PosX < PosObsX + size && PosY + size > PosObsY && PosY < PosBlocoY + sizeBloco){


        objcolor = "pink";

    }



}

function draw (){

    ctx.clearRect(0,0,700,700) //limpa

    
    ctx.fillStyle = "red";
    ctx.fillRect(PosBlocoX,PosBlocoY,sizeBloco,sizeBloco); //desenha a cereja 


    ctx.fillStyle = objcolor;
    ctx.fillRect(PosX, PosY, size, size); // desenha o player

    ctx.fillStyle = "orange";
    ctx.fillRect(PosObsX, PosObsY, SizeObs, SizeObs); // desenha o obstaculo


    ctx.fillStyle = "white";
    ctx.font = '20px serif';
    ctx.fillText('Score: ' + cont, 5, 20); //score

    colide();
  
}




function  update() {

    mover();
 

}







window.addEventListener("keydown", function mover (event) {
    if (event.defaultPrevented) {
        return;
    }
    if (event.code === "ArrowDown"){

        PosY = PosY + VelY; 
        draw();
    
    } else if (event.code === "ArrowUp"){
       
        PosY = PosY - VelY; 
        draw();

        
    } else if (event.code === "ArrowLeft"){
       
       
        PosX = PosX - VelX; 
        draw();

     
    } else if (event.code === "ArrowRight"){
       
       
        PosX = PosX + VelX; 
        draw();
        
 
      
    }
  
  }, true);


  loop();









