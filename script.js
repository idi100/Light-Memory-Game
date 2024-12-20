
//Global Variables
let pattern = [2, 2, 4, 1, 1, 2, 3, 4, 2, 1, 2, 3];
let progress = 0;
let gamePlaying = false;
let tonePlaying = false;
let volume = 1.0;
let clueHoldTime = 100;
let guessCounter = 0;

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const startBtn = document.getElementById("startBtn") 
const stopBtn = document.getElementById("stopBtn")



//Functions
function startGame() {
  //function body
  progress = 0;
  gamePlaying = true;

  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //function body
  gamePlaying = false;

  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time


  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){ 
  stopGame();
  alert("😳 OOPS. You lost... Try again" );
}

function winGame() {
  stopGame();
  alert("😀 YOU WIN!!!"); 
}

function guess(btn){
  console.log("user guessed: " + btn);

  if(gamePlaying === false){
    return;
  }

  if(pattern[guessCounter] == btn){
      //Guess was correct!
      if(guessCounter == progress){
        if(progress == pattern.length - 1){
          //GAME OVER: WIN!
          winGame();
        }else{
          //Pattern correct. Add next segment
          progress++;
          playClueSequence();
        }
      }else{
        //so far so good... check the next guess
        guessCounter++;
      }
    }else{
      //Guess was incorrect
      //GAME OVER: LOSE!
      loseGame();
    }
  }    

// Sound Synthesis Functions for Steps 6-8
// Sound Synthesis Functions
const freqMap = {
  1: 300,
  2: 250,
  3: 200,
  4: 100
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len);
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true;
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext 
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

