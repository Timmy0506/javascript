var canvas, ctx;
var points;
var walls;

function initLevel(){
    canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.style.position = "absolute";
    canvas.style.left = "7px";
    canvas.style.top = "7px";
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx= canvas.getContext("2d");
    var y;
    points = [];
    for(y=0; y<20; y++){
        var o = {};
        o.x=Math.random()*rect.width;
        o.y=Math.random()*rect.height;
        points.push(o);
    }
    
    updateLevel();
}

function updateLevel() {
    ctx.fillStyle= "black";
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "white";
    for(var y=0; y<points.length; y++){
        var o=points[y];
        ctx.fillRect(o.x, o.y, 10, 10);
        
    }  
    
    
}

function levelBehaviour() {

    for(var p=points.length-1; p>=0; p--){
        var o=points[p];
        var distanceX = o.x - (pacman.x+25);
        var distanceY = o.y - (pacman.y+25);  
        
        if(Math.abs(distanceX) <25  && Math.abs(distanceY) <25 ){
            
            points.splice(p,1);
            updateLevel();
        }

    

    }
    
}