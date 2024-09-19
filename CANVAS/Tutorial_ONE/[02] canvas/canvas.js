var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext("2d");


function Circle(x, y, dx, dy){
    this.x = Math.random() * innerWidth;
    this.y = Math.random() * innerHeight;
    this.dx = (Math.random() - 0.5) *10;
    this.dy = (Math.random() - 0.5) *10;
    this.radius = Math.random() * 30;

    this.draw = function(){
        c.beginPath();
        c.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = '#4169e1';
        c.stroke();
    }
    this.update = function(){

        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x +=this.dx;
        this.y +=this.dy;

        this.draw();
        
    }
}


var circle = new Circle();

function animate(){

    requestAnimationFrame(animate);
    c.clearRect( 0, 0, innerWidth, innerHeight);
    var circleArray = [];
    // circle.update();
    
    for(var i = 0; i < 100; i++){

        this.x = Math.random() * innerWidth;
        this.y = Math.random() * innerHeight;
        this.dx = (Math.random() - 0.5) *10;
        this.dy = (Math.random() - 0.5) *10;
        this.radius = Math.random() * 30;
        
        circleArray.push(new Circle())

    }
}

animate();

































