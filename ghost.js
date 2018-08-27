class Ghost{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.color= color(random(50,255),random(50,255),random(50,255));
  }

  drawGhost(){
    fill(this.color);
    stroke(this.color);
    rect(this.x,this.y,20,20);
  }
}
