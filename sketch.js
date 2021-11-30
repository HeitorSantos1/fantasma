var imagemDaTorre, torre,imagemDoFantasma,fantasma,imagemDaPorta,porta,somAssustador;

var GrupoDePortas;

var estadojogo;

function preload(){
  imagemDaTorre = loadImage("tower.png");
  imagemDoFantasma = loadImage("ghost-standing.png");
  imagemDaPorta = loadImage("door.png");
  somAssustador = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  GrupoDePortas = new Group();
  
  torre = createSprite(300,300);
  torre.addImage("tower",imagemDaTorre);
  torre.velocityY = 1;
  
  fantasma = createSprite(300,300);
  fantasma.addImage("fantasma",imagemDoFantasma);
  fantasma.scale = 0.5;
  
  estadojogo = "jogar"
  somAssustador.loop();
}


function draw(){
  background(255);
  
  if(estadojogo =="perdeu") {
    background("black");
    torre.visible = false;
    fill("orange");
    textSize(50);
    text("GAME OVER",170,300);
    GrupoDePortas.destroyEach();
    fantasma.velocityY = 0;
  }
  
  if(estadojogo == "perdeu" && keyDown("r") ){
     estadojogo = "jogar";
     torre.visible = true;
     fantasma.y = 200;
  }
  
  if(estadojogo == "jogar" ) {
     
  if(fantasma.y > 600 || fantasma.y < 0 || fantasma.isTouching(GrupoDePortas)) { 
    
    estadojogo = "perdeu"; 
     
  }
    
    
  fantasma.velocityY =  6;
  
  if(torre.y > 400) {
    torre.y = 300;
    
}
  if(keyDown("space")) {
     fantasma.velocityY = -6 ; 
  
  } 
  
  if(keyDown("left")) {
    fantasma.x = fantasma.x -6
  }
  
  if(keyDown("right")) { 
    fantasma.x = fantasma.x +6 
  }

  gerarporta();
}  

  
  drawSprites();
}

function gerarporta() {
   if(frameCount%250==0) {
   porta = createSprite(random(100,350),0);
   porta.addImage("porta",imagemDaPorta);
   porta.velocityY = 1;
   GrupoDePortas.add(porta);
   porta.lifetime = 600;
     
     
   }  
}