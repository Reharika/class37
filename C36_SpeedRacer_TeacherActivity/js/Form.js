class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");//h1-h6 
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  setElementsPosition(){
    this.input.position(width/2-110,height/2-50);
    this.playButton.position(width/2-90,height/2);
    this.greeting.position(width/2-300,height/2-100);
    this.titleImg.position(120,100);
  }
  setElementsStyle(){
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.titleImg.class("gameTitle");
  }
 display(){
   this.setElementsPosition();
   this.setElementsStyle();
   this.handleMousePressed();
 }
 handleMousePressed(){
  this.playButton.mousePressed(()=>{
    this.playButton.hide();
    this.input.hide();
    var message=`HELLO ${this.input.value()}</br>WAIT FOR ANOTHER PLAYER TO JOIN.....`
    this.greeting.html(message);
    playerCount += 1;
    player.name = this.input.value();
    player.index =playerCount;
    player.addPlayer();
    player.updateCount(playerCount);//update the playercount in database
  });
 }
}
