//? abstraction, the 3rd pillar of OOP

/**
 * !Note:
 * 1. eikane 2 ta jinish kaj kore, 1st "idea define" kora (using interface and abstract class) and 2nd "implementation" korbo (using "implements" and "extends");
 */

//--------------------------------------------------------------
//*  using interface

// idea
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

// implementation
class MusicPlayer implements MediaPlayer {
  play() {
    console.log("Playing music....");
  }
  pause() {
    console.log("Music paused... ");
  }
  stop() {
    console.log(`Music stopped`);
  }
}

const aminPlayer = new MusicPlayer();
aminPlayer.play(); // output: Playing music....

//--------------------------------------------------------------
//*  using abstraction class

// idea
abstract class MediaPlayer1 {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}


// implementation 
class AlaminPlayer extends MediaPlayer1 {
  play(): void {
    console.log(`Playing music...`);
  }
  pause(): void {
    console.log("Music is paused !");
  }
  stop(): void {
    console.log("Music is stopped !");
  }
}

const aminPlayer1 = new AlaminPlayer();
aminPlayer1.pause(); // output: Music is paused !
