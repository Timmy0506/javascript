var ghost;


function ghostBehaviour(){
        // ai
        if(Math.random()<0.01)
        {

                if(Math.random()<0.5)
                {
                    if(Math.random()<0.5)
                    {
                        ghost.sx=0;
                        ghost.sy=0;
                            ghost.sx=1;   
                    }else{
                        ghost.sx=0;
                        ghost.sy=0;
                                ghost.sx=-1;   

                    }
                }else{
                    if(Math.random()<0.5)
                    {
                        ghost.sx=0;
                                ghost.sy=1;   

                    }else{
                        ghost.sx=0;
                                ghost.sy=-1;   

                    }

                }
        }

        // apply speed
        ghost.x = ghost.x+ghost.sx;
        ghost.y = ghost.y+ghost.sy;

        if(ghost.x <=10){
            ghost.x = 10;
        }
        

        if(ghost.x >=1235){
            ghost.x = 1235;
        }

        if(ghost.y <=10){
            ghost.y = 10;
        }

        if(ghost.y >=675){
            ghost.y = 675;
        }

        ghost.element.style.left=ghost.x+"px";
        ghost.element.style.top=ghost.y+"px";
}

function initghost() {
    var element = document.getElementById("ghost");
   ghost = {}
      ghost.element = element;
      //ghost position
      ghost.x = 160;
      ghost.y = 160;
    //   ghost speed
      ghost.sx=0;
      ghost.sy=0; 
      
      ghost.rotate = 0; 
}



