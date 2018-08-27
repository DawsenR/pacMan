class PacMan{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.color = color(252,250,83);
  }

  drawPac(){
    stroke(this.color);
    fill(this.color);
    ellipse(this.x,this.y,30);
  }
}
