export default function sketch(p) {
  var song;
  var amp;
  var button;

  var volhistory = [];

  p.setup = function() {
    p.createCanvas(400, 400, p.WEBGL);
    button = p.createButton("toggle");
    button.mousePressed(p.toggleSong);
    this.song.play();
    this.amp = new p.p5.Amplitude();
  };

  p.preload = function() {
    this.song = p.loadSound(require("./18.wav"));
  };

  p.toggleSong = function() {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  };

  p.draw = function() {
    p.background(0);

    var vol = p.amp.getLevel();
    volhistory.push(vol);
    p.stroke(255);
    p.noFill();
    p.push();

    var currentY = p.map(vol, 0, 1, p.height, 0);
    p.translate(0, p.height / 2 - currentY);
    p.beginShape();
    for (var i = 0; i < volhistory.length; i++) {
      var y = p.map(volhistory[i], 0, 1, p.height, 0);
      p.vertex(i, y);
    }
    p.endShape();
    p.pop();
    if (volhistory.length > p.width - 50) {
      volhistory.splice(0, 1);
    }

    p.stroke(255, 0, 0);
    p.line(volhistory.length, 0, volhistory.length, p.height);
  };
}
