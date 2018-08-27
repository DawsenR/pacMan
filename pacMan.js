class PacMan{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.radius = 30;
    this.collision = false;
    this.color = color(252,250,83);
  }

  drawPac(){
    stroke(this.color);
    fill(this.color);
    ellipse(this.x,this.y,this.radius);
  }

  detectWalls(){
    
  }
}
