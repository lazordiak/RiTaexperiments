var clicks = 0;
var lettersToShow = 0;
var intro = ". . .\nHi. :)\nWant to read a poem?\nJust click.";
var lexicon;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //i want it painted BLACK
  background(0);

}

function draw() {

  console.log(clicks);

  if (clicks == 0) {

    if (lettersToShow < intro.length) {

      frameRate(7);

      fill(255);
      textSize(40);
      textFont('Helvetica');
      text(intro.substring(0,lettersToShow),windowWidth/2,windowHeight/3);

      lettersToShow += 1

    }

    else {

      fill(255);
      textSize(40);
      textFont('Helvetica');
      text(intro,windowWidth/2,windowHeight/3);

    }

  }

  else if (clicks == 1) {
    fill(255);
    textSize(40);
    textFont('Helvetica');
    text("Roses are red",windowWidth/2,100);
    fill(255);
    textSize(40);
    textFont('Helvetica');
    text("Violets are blue",windowWidth/2,150);
    fill(255);
    textSize(40);
    textFont('Helvetica');
    text("I wrote this poem",windowWidth/2,200);
    fill(255);
    textSize(40);
    textFont('Helvetica');
    text("Just for you",windowWidth/2,250);
    fill(255);
    textSize(40);
    textFont('Helvetica');
    text("Need more?? Click again!",windowWidth/2,300);
  }

  else {

    frameRate(0.5);
    background(0);

    word1 = RiTa.randomWord("JJ");
    word2 = RiTa.randomWord("JJ");

    fill(255);
    textSize(40);
    textFont('Helvetica');
    text("Roses are "+word1,windowWidth/2,100);
    fill(255);
    textSize(40);
    textFont('Helvetica');
    text("Violets are "+word2,windowWidth/2,150);
    fill(255);
    textSize(40);
    textFont('Helvetica');
    text("These words are random",windowWidth/2,200);
    fill(255);
    textSize(40);
    textFont('Helvetica');
    text("So it probably won't rhyme well.",windowWidth/2,250);
  }

}

function mouseClicked() {
  background(0);
  clicks += 1
}
