class Button {


  constructor( labelB,  xpos,  ypos,  widthB,  heightB,round=0, ts=18,st,bg=null) {
    this.label = labelB;
    this.x = xpos;
    this.y = ypos;
    this.w = widthB;
    this.h = heightB;
    this.ts = ts;
    this.bg = bg;
    this.round = round;
    this.st = st;
  }

   Draw() {
     smooth();
    if(this.MouseIsOver()== true){  fill(255);strokeWeight(1.5);
    stroke(20,180,20);} else{fill(255,255,255);strokeWeight(1);stroke(20,150,20);}
   if(this.st == 0){noStroke();}
    rectMode(CORNER)
    rect(this.x-1,this.y-1,this.w+1,this.h+1,5);

    // image(b_img,this.x,this.y,this.w,this.h);
  //  rect(this.x,this.y,this.w,this.h,5);

    textAlign(CENTER, CENTER);strokeWeight(1)
    if(this.MouseIsOver()== true){noStroke();fill(20,60,200);  textSize(this.ts+2);}
    else {noStroke();fill(185,70,0);  textSize(this.ts);}
    text(this.label, this.x + (this.w / 2), this.y + (this.h / 2));


   // println(MouseIsOver());
  }

   MouseIsOver() {
    if (mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y && mouseY < (this.y + this.h)) {

      return true;
    }
    return false;
  }
}
