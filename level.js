class Level{
  constructor(){
    this.width = windowWidth;
    this.height = windowHeight;
    this.center = windowWidth/2;
    this.left = 0;
    this.right = windowWidth;
    this.padTop = 55;
    this.bottom = windowHeight;
    this.padLeft = 10;
    this.padRight = 10;
    this.walls = new Array();
    this.dots = new Array();
    this.ghosts = new Array();
    this.pac = new PacMan(420,520);
    this.createWalls();
    this.createDots();
    this.createGhosts();
  }

  createWalls(){
    this.walls.push(new Wall(this.left+this.padLeft,this.padTop,this.width-2*this.padLeft,10));

    this.walls.push(new Wall(this.left+this.padLeft,this.padTop,10,130));
    this.walls.push(new Wall(this.right-this.padRight-10,this.padTop,10,130));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/3),this.padTop,25,85));
    this.walls.push(new Wall(((((this.width-2*this.padLeft)-this.left+this.padLeft)/3)*2),this.padTop,25,85));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8),this.padTop+60,90,25));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)*6.30,this.padTop+60,90,25));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)*3.5,this.padTop+60,130,25));

    this.walls.push(new Wall(this.left+this.padLeft,130+this.padTop,75,10));
    this.walls.push(new Wall(this.right-this.padRight-75,130+this.padTop,75,10));

    this.walls.push(new Wall(this.padLeft+75,130+this.padTop,10,45));
    this.walls.push(new Wall(this.right-2*this.padRight-75,130+this.padTop,10,45));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/3)-30,130+this.padTop,110,50));
    this.walls.push(new Wall(((((this.width-2*this.padLeft)-this.left+this.padLeft)/3)*2)-60,130+this.padTop,110,50));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)+65,130+this.padTop,25,135));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)*6.30,130+this.padTop,25,135));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)*4,130+this.padTop,25,135));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)+65,335+this.padTop,25,100));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)*6.30,335+this.padTop,25,100));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)+65,245+this.padTop,100,25));
    this.walls.push(new Wall(this.center-90, 245+this.padTop,190,25));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)*6.30-75,245+this.padTop,100,25));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)+65,335+this.padTop,100,25));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)*6.30-75,335+this.padTop,100,25));


    this.walls.push(new Wall(-5,175+this.padTop,this.padLeft*2+75+5,10));
    this.walls.push(new Wall(this.right-2*this.padRight-75,175+this.padTop,this.padLeft*2+75+5,10));

    this.walls.push(new Wall(-5,245+this.padTop,this.padLeft*2+75+5,10));
    this.walls.push(new Wall(this.right-2*this.padRight-75,245+this.padTop,this.padLeft*2+75+5,10));

    this.walls.push(new Wall(this.padLeft+75,245+this.padTop,10,180));
    this.walls.push(new Wall(this.right-2*this.padRight-75,245+this.padTop,10,180));

    this.walls.push(new Wall(-5,425+this.padTop,this.padLeft*2+75+5,10));
    this.walls.push(new Wall(this.right-2*this.padRight-75,425+this.padTop,this.padLeft*2+75+5,10));

    this.walls.push(new Wall(-5,495+this.padTop,this.padLeft*2+75+5,10));
    this.walls.push(new Wall(this.right-2*this.padRight-75,495+this.padTop,this.padLeft*2+75+5,10));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)+65,495+this.padTop,175,25));
    this.walls.push(new Wall(((((this.width-2*this.padLeft)-this.left+this.padLeft)/3)*2)-50,495+this.padTop,175,25));
    this.walls.push(new Wall(((((this.width-2*this.padLeft)-this.left+this.padLeft)/3)*2)-50+87-12,420+this.padTop,25,75));
    this.walls.push(new Wall(((((this.width-2*this.padLeft)-this.left+this.padLeft)/3)*2)-50+87-12, 640+this.padTop,25,65));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/3)-30,640+this.padTop,25,65));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)+65+87,420+this.padTop,25,75));

    this.walls.push(new Wall(this.padLeft+75+5,495+this.padTop,10,80));
    this.walls.push(new Wall(this.right-2*this.padRight-75,495+this.padTop,10,80));
    this.walls.push(new Wall(this.center-12,495+this.padTop,25,80));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)+65,575+this.padTop,100,25));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)*6.30-75,575+this.padTop,100,25));

    this.walls.push(new Wall(this.left+this.padLeft,575+this.padTop,90,10));
    this.walls.push(new Wall(this.right-this.padRight-85,575+this.padTop,90,10));
    this.walls.push(new Wall(this.center-85,575+this.padTop,175,25));
    this.walls.push(new Wall(this.center-85, 640+this.padTop,175,65));

    this.walls.push(new Wall(this.left+this.padLeft,575+this.padTop,10,175));
    this.walls.push(new Wall(this.right-this.padRight-5,575+this.padTop,10,175));

     this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)-this.padLeft*3+5,640+this.padTop,100,65));
    this.walls.push(new Wall((((this.width-2*this.padLeft)-this.left+this.padLeft)/8)*6.30+15, 640+this.padTop,100,65));

    this.walls.push(new Wall(this.center-80+5,this.height/2+25,160,10));
    this.walls.push(new Wall(this.center-80+5,this.height/2-60,10,90));
    this.walls.push(new Wall(this.center+70+5,this.height/2-60,10,90));
    this.walls.push(new Wall(this.center-80+5,this.height/2-60,50,10));
    this.walls.push(new Wall(this.center+30+5,this.height/2-60,50,10));

    this.walls.push(new Wall(this.left+this.padLeft,750+this.padTop, this.width-this.padLeft-5,10));



  }

  drawWalls(){
    for(var i = 0;i<this.walls.length;i++){
      this.walls[i].drawWall();
    }
  }

  createDots(){
    var x = 60;
    var y = 90;
    for(var i = 0; i<8; i++){
      this.dots.push(new Dot(x,y));
      x = x+25;
    }

    x = 335;
    for(var i = 0; i<9; i++){
      this.dots.push(new Dot(x,y));
      x = x+25;
    }
    x = 610;
    for(var i = 0; i<8; i++){
      this.dots.push(new Dot(x,y));
      x = x+25;
    }
    x = 60;
    y = 160;
    for(var i = 0; i<30; i++){
      this.dots.push(new Dot(x,y));
      if(i==3){
        for(var j = 0; j< 19; j++){
          y+=25.5;
          this.dots.push(new Dot(x,y))
        }
        y = 160;
      }
      if(i==26){
        for(var j =0; j<19;j++){
          y+=25.5;
          this.dots.push(new Dot(x,y));
        }
        y = 160;
      }
      x = x+25;
    }
    this.dots.push(new Dot(60,124,18));
    this.dots.push(new Dot(235,124));
    this.dots.push(new Dot(335,124));
    this.dots.push(new Dot(535,124));
    this.dots.push(new Dot(610,124));
    this.dots.push(new Dot(785,124,18));

    var x = 60;
    var y = 670;
    for(var i = 0; i<30;i++){
      this.dots.push(new Dot(x,y));
      x += 25;
    }
    x = 60;
    y = 780;

    this.dots.push(new Dot(x,y-25.5,18));
    this.dots.push(new Dot(x,y-51));
    this.dots.push(new Dot(x,y-76.5));

    for(var i = 0; i<30;i++){
      this.dots.push(new Dot(x,y));
      x += 25;
    }
    this.dots.push(new Dot(x-25,y-25.5,18));
    this.dots.push(new Dot(x-25,y-51));
    this.dots.push(new Dot(x-25,y-76.5));


  }

  drawDots(){
    for(var i = 0;i<this.dots.length;i++){
      this.dots[i].drawDot();
    }
  }

  createGhosts(){
    this.ghosts.push(new Ghost(370,425));
    this.ghosts.push(new Ghost(400,425));
    this.ghosts.push(new Ghost(430,425));
    this.ghosts.push(new Ghost(460,425));
  }

  drawGhosts(){
    for(var i = 0;i<this.ghosts.length; i++){
      this.ghosts[i].drawGhost();
    }
  }




  levelUpdate(){
     this.drawWalls();
     this.drawDots();
     this.drawGhosts();
     this.pac.drawPac();
     this.pac.detectWalls();
     if(!this.pac.collision){
       keyPressed();
     }

  }

}

class Wall{
  constructor(x,y,width,height, thickness = 4, radius = 8){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.thickness = thickness;
      this.radius = radius;

  }

  drawWall(){
    stroke(0, 27, 205);
    fill(0, 27, 205);
    strokeCap(ROUND);
    strokeWeight(4);
    rect(this.x,this.y,this.width,this.height,this.radius);
  }
}

class Dot{
  constructor(x,y,size = 3){
    this.x = x;
    this.y = y;
    this.size = size;
  }

  drawDot(){
    stroke(255);
    fill(255);
    ellipse(this.x,this.y,this.size,this.size);
  }

}


function keyPressed(){

    if(keyCode === UP_ARROW){
      level.pac.y -=5;
    }

    if(keyCode === DOWN_ARROW){
      level.pac.y+=5;
    }
    if(keyCode === RIGHT_ARROW){
      level.pac.x+= 5;
    }
    if(keyCode === LEFT_ARROW){
      level.pac.x-=5;
    }

  // if(keyCode === UP_ARROW){
  //   level.pac.y -=5;
  // }
  // if(keyCode === DOWN_ARROW){
  //   level.pac.y+=5;
  // }
  // if(keyCode === RIGHT_ARROW){
  //   level.pac.x+= 5;
  // }
  // if(keyCode === LEFT_ARROW){
  //   level.pac.x-=5;
  // }

}
