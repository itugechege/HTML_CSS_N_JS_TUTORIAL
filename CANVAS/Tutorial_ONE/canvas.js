var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext("2d");

//Cube Matrix
c.fillStyle = "#323429";
c.fillRect(320, 320, 150, 150);
c.fillRect(320, 480, 150, 150);
c.fillRect(320, 640, 150, 150);
c.fillStyle = "#AF8C69";
c.fillRect(480, 320, 150, 150);
c.fillRect(480, 480, 150, 150);
c.fillRect(480, 640, 150, 150);
c.fillStyle = "#323429";
c.fillRect(640, 320, 150, 150);
c.fillRect(640, 480, 150, 150);
c.fillRect(640, 640, 150, 150);

for(var i = 320; i < 641; i+=160){
    c.fillRect(320, 320, 150, 150);
}

//First border.
c.beginPath();
c.moveTo(310,310);
c.lineTo(310,800);
c.lineTo(800,800);
c.lineTo(800,310);
c.lineTo(310,310);
c.strokeStyle = "#9D7D67";
c.stroke();

//Second border.
c.beginPath();
c.moveTo(300,300);
c.lineTo(300,810);
c.lineTo(810,810);
c.lineTo(810,300);
c.lineTo(300,300);
c.strokeStyle = "#372A24";
c.stroke();

//Third border.
c.beginPath();
c.moveTo(290,290);
c.lineTo(290,820);
c.lineTo(820,820);
c.lineTo(820,290);
c.lineTo(290,290);
c.strokeStyle = "#372A24";
c.stroke();

//fourth border
c.beginPath();
c.moveTo(280,280);
c.lineTo(280,830);
c.lineTo(830,830);
c.lineTo(830,280);
c.lineTo(280,280);
c.strokeStyle = "#9D7D67";
c.stroke();

//  //Arch / Circle
// c.beginPath();
// c.arc(245, 305, 30, 0, Math.PI*2,false);
// c.strokeStyle = "#B7A9A0";
// c.stroke();


    var j = 395;
   while(j < 716){
    for (var i = 0; i < 45; i++) {
        c.beginPath();
        c.arc(395, j, 30+i, 0, Math.PI*2,false);
        c.strokeStyle = "#D4B18F";
        c.stroke();
    }
    
    for (var i = 0; i < 45; i++) {
    c.beginPath();
    c.arc(555, j, 30+i, 0, Math.PI*2,false);
    c.strokeStyle = "#323429";
    c.stroke();
    }
    
    for (var i = 0; i < 45; i++) {
        c.beginPath();
        c.arc(715, j, 30+i, 0, Math.PI*2,false);
        c.strokeStyle = "#D4B18F";
        c.stroke();
    }
    j = j+160;
   }
       

    


 
 




// console.log(canvas);