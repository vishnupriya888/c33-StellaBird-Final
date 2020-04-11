class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,65,65);
    this.image = loadImage("images/bird3.png");
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}
