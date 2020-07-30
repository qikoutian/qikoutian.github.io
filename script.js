function ballDrop (obj) {
    counter();
    obj.disabled = true;
    setTimeout(function() {
        obj.disabled = false;
    }, 1000);
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

        context.fillStyle = "white";
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

var numBalls = 1;

function counter () {
    numBalls += 1;
    document.getElementById("numBalls").innerHTML = numBalls;
    var pBalls = numBalls / (numBalls + 30);
    pBalls = pBalls.toFixed(2)*100 + "%"
    document.getElementById("pBalls").innerHTML = pBalls;
}


function quit() {
    var b = document.getElementById('numBalls').innerHTML,
        url = 'qikoutian.github.io/phase2.html?name=' + encodeURIComponent(b);
    document.location.href = url;
}

window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    document.getElementById('numBalls').innerHTML = data.name;
}


function randomWin () {

    var chance = Math.floor((Math.random() * ( parseInt( document.getElementById('numBalls').innerHTML ) + 50)));
    if( chance < document.getElementById('numBalls').innerHTML ) {
        document.getElementById('win').innerHTML = "You Won. You will receive the base payment plus the winning amount as a bonus. \n " + 
        "Please add 09 at the end of your study code. \n" + 
        "In order to get paid, you must remember that you added a total of winning balls during the game. We will ask you to recall this number later. If you do not recall it correctly, your data will be deemed invalid.";
    } else {
        document.getElementById('win').innerHTML = "Sorry. You Didn't Win. But you will still receive the base payment. \n " + 
        "In order to get paid, you must remember that you added a total of xxx winning balls during the game. We will ask you to recall this number later. If you do not recall it correctly, your data will be deemed invalid.";
    }
} //
