function myFunction () {
    counter();
    var context;
    var dx= 4;  
    var dy=4;
    var y=150;
    var x=10;
    function draw(){
        context= myCanvas.getContext('2d');
        context.clearRect(0,0,400,400);
        context.beginPath();
        context.fillStyle="#FFFFFF";
        context.arc(x,y,10,0,Math.PI*2,true);
        context.closePath();
        context.fill();
    }
    setInterval(draw,10); 
}

function istolethis () {
    counter();
    const FPS = 165;
    var bs = 30;
    var bx, by;
    var xv, yv;
    var canvas, context;

    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    
    bx = canvas.width / 2;
    by = 0;
    
    xv = 0;
    yv = 15;
    
    function update() {
        bx += xv;
        by += yv;

        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.clearRect(0,0,400,400);
        context.beginPath();
        //context.fillStyle = "yellow";
        //context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
        context.fillStyle="#FF0000"
        context.arc(bx,by,10,0,Math.PI*2,true);
        context.closePath();
        context.fill();
    }
    setInterval(update, 50);

    // if( by > canvas.height ) {
    //     by = 0;
    //     context.fillStyle = "black";
    //     context.fillRect(0, 0, canvas.width, canvas.height);
    // }
}

var numBalls = 0;

function counter () {
    numBalls += 1;
    document.getElementById("numBalls").innerHTML = numBalls;
}

function quit () {
    alert("比心！爱你呦~ （不知道这个应该干啥嘿嘿xd）");
}