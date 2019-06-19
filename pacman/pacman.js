var pacman;


function pacmanBehaviour(){
    pacman.sx=0;
        pacman.sy=0;
        if(keys[37]) {
             pacman.sx=-speed;
             pacman.element.style.transform = "rotate(180deg)"; 
             
        }
        

        if(keys[39] && pacman.sx==0)
        {
            pacman.sx=+speed;
            pacman.element.style.transform = "rotate(0deg)";

        }
        if(keys[38] && pacman.sx==0) {
             pacman.sy=-speed;
             pacman.element.style.transform = "rotate(270deg)";
        }
       
        if(keys[40] && pacman.sx==0 && pacman.sy==0){
            pacman.sy=+speed;
            pacman.element.style.transform = "rotate(90deg)";
        }
        
        // apply speed
        pacman.x = pacman.x+pacman.sx;
        pacman.y = pacman.y+pacman.sy;

        if(pacman.x <=10){
            pacman.x = 10;
        }
        

        if(pacman.x >=1235){
            pacman.x = 1235;
        }

        if(pacman.y <=10){
            pacman.y = 10;
        }

        if(pacman.y >=675){
            pacman.y = 675;
        }

        pacman.element.style.left=pacman.x+"px";
        pacman.element.style.top=pacman.y+"px";
}

function initPacman() {
    var element = document.getElementById("man");
   pacman = {}
      pacman.element = element;
      //pacman position
      pacman.x = 8;
      pacman.y = 8;
    //   pacman speed
      pacman.sx=0;
      pacman.sy=0; 
      
      pacman.rotate = 0; 
}
