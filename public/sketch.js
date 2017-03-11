var socket;

function setup() {
    createCanvas(400,400);
    background(51);
    socket = io.connect('http://localhost:3000');
    socket.on('mouse',newDrawing)
}

function newDrawing(data){
    noStroke();
    fill(255,0,100);
    ellipse(data.x,data.y,25,25);
    
}

function mouseDragged(){
    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);
    
    noStroke();
    fill(255);
    ellipse(mouseX,mouseY,25,25);
    print(data);
}

function draw() {

}