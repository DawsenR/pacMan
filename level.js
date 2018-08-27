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
    this.createWalls();
    this.createDots();
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
    this.walls.push(new Wall(this.center-85, 660+this.padTop,175,25));

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
    var x = 50;
    var y = 90;
    for(var i = 0; i<9; i++){
      this.dots.push(new Dot(x,y));
      x = x+25;
    }
    x = 325;
    for(var i = 0; i<9; i++){
      this.dots.push(new Dot(x,y));
      x = x+25;
    }
    x = 600;
    for(var i = 0; i<9; i++){
      this.dots.push(new Dot(x,y));
      x = x+25;
    }
    x = 50;
    y = 160;
    for(var i = 0; i<31; i++){
      this.dots.push(new Dot(x,y));
      x = x+25;
    }

    // this.dots.push(new Dot(55,90));
    // this.dots.push(new Dot(80,90));
    // this.dots.push(new Dot(105,90));
    // this.dots.push(new Dot(130,90));
    // this.dots.push(new Dot(155,90));
  }

  drawDots(){
    for(var i = 0;i<this.dots.length;i++){
      this.dots[i].drawDot();
    }
  }

  levelUpdate(){
    this.drawWalls();
    this.drawDots();
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
