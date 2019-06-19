

var speed;

var ghost;
var keys;
  

    function docReady() {
      window.addEventListener('keydown', handleInput); 
      window.addEventListener('keyup', handleInput);
      
      
      keys=[];
      initLevel();
      initghost();
      initPacman();
      startGame();
    }
    window.addEventListener('load',docReady);

    function startGame(){
        speed = 10;
        

        gameLoop();
        
        
        


    }
    function gameLoop() {
        window.requestAnimationFrame(gameLoop);
        
        // control pacman
        pacmanBehaviour();
        ghostBehaviour();
        levelBehaviour();
        
        
    }

    function handleInput(evt) {
        if(evt.type=="keydown")
        keys[evt.keyCode]=true;
        if(evt.type=="keyup")
        keys[evt.keyCode]=false;
        // console.log("keys",keys) 

    }

    