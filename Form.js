class Form {

  constructor() {
    this.input = createInput("Name");
    this.answer = createInput("Type Answer");
    this.button = createButton('Submit');
    this.title = createElement('h1');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2= createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }
  hide(){
    this.button.hide();
    this.answer.hide();
    this.input.hide();
    this.title.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option.hide();
  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.question.html("Which bacteria changes atmosphere nitrogen into usable form(nitrite,nitrate)")
    this.question.position(displayWidth/2 - 350,140);
    this.option1.html("penicillium");
    this.option1.position(displayWidth/2 - 350,180);
    this.option2.html("amoeba");
    this.option2.position(displayWidth/2 - 350,220);
    this.option3.html("rhizobium");                                                                         
    this.option3.position(displayWidth/2 - 350,260);
    this.option4.html("spiral bactria");
    this.option4.position(displayWidth/2 - 350,300);
    
    this.input.position(displayWidth/2 - 200 , 400 );
    this.answer.position(displayWidth/2 - 50 , 400 );
    this.button.position(displayWidth/2 + 30 , 500);
    
    this.button.mousePressed(()=>{
    this.button.hide();
    this.answer.hide();
    this.input.hide();
    this.title.hide();
      player.name = this.input.value();
      player.answer = this.answer.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
     
    });
  
  }
}
