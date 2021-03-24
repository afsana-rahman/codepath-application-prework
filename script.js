// Global constants
const nextClueWaitTime = 1000;
// Global variables
var pattern = [2, 5, 4, 3, 2, 1, 2, 4];
var progress = 0;
var guessCounter = 0;
var gamePlaying = false;
var clueHoldTime = 600;
var cluePauseTime = 333;
var tonePlaying = false;
var volume = 0.5;
var strikes = 0;

function startGame() {
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  createPattern();
  strikes = 0;
  clueHoldTime = 520;
  cluePauseTime = 333;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function createPattern() {
  for(let i = 0; i < 7; i++) {
    pattern[i] = Math.round(Math.random() * 5);
    if(pattern[i] == 0) {
      pattern[i] = 1;
    }
  }
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for(let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime;
  }
  clueHoldTime -= 40
  cluePauseTime -= 40;
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) return;
  
  if(btn == pattern[guessCounter]) {
    if(guessCounter == progress) {
      if(progress == pattern.length-1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if(strikes < 2){
      strikes++;
      clueHoldTime += 40;
      cluePauseTime += 40;
      alert("Wrong button! Try again.");
      playClueSequence();
    } else {
      loseGame();
    }
  }
}

function loseGame() {
  stopGame();
  alert("You lost! Game over.");
}

function winGame() {
  stopGame();
  alert("You won! Game over.");
}

// Sound Synthesis Functions
const freqMap = {
  1: 300,
  2: 350,
  3: 400,
  4: 450,
  5: 500
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)