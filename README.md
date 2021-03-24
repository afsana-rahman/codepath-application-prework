# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Afsana Rahman**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/wild-marmalade-cymbal

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Add more body text
- [x] Align text differently
- [x] Change border colors of all buttons
- [x] "Start" and "Stop" buttons change color when hovered over

## GIF Demonstration

- Winning the game: https://cdn.glitch.com/373bb310-8edc-4453-b01d-25e8a9d3e922%2FSimonSays_Winning.gif?v=1616550380890
- Losing the game (with strikes): https://cdn.glitch.com/373bb310-8edc-4453-b01d-25e8a9d3e922%2FSimonSays_Losing.gif?v=1616550854249

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
- For text alignment (used on body text): https://www.w3schools.com/css/css_align.asp
- For hover (used on start/stop button): https://www.w3schools.com/cssref/sel_hover.asp
- For Math.round() (used for implementing random pattern): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
- A specific challenge that I encountered was that when implementing the strikes, the time would continue to decrease per turn instead of staying the same.
   Every time the player would get a turn wrong, the pattern would play back much faster, instead of staying the same speed as intended.
   At first, I added time to the clueHoldTime and cluePauseTime per playClueSequence() to see if this would negate the speed, but the pattern still seemed to play rather quickly.
   Several times, I tried changing the times that I would add and take away in the playClueSequence() and guess() functions (where I implemented the "strikes" feature).
   Neither adjustments worked the way I intended them to. I tried all types of ranges of numbers.
   I eventually realized that my runtime error was that I had been taking away from the clueHoldTime and cluePauseTime _within_ the for loop of playClueSequence(), instead of outside of it.
   The previous implementation I had was taking away time for every button that was played back, instead of every _turn_ that was played back.
   Once I put the decrements for the time outside of the loop, the game worked as intended.
   Finding and overcoming this bug required testing the game in several different ways. It required me to attempt to play the game to completion to see if there was an odd pattern in that case,
   and then test games where there would be one, two, or three strikes. This was to ensure the game worked properly in all cases.
   The debugging process could've been much faster if I had the pattern array set, so I could memorize the pattern and time the differences accordingly on the same turns.
   I was lucky enough to find my bug by reading over the playClueSequence() method very carefully.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

- Does a team of developers consist of each member working with one specific file (one works predominantly with the HTML/CSS, another member works with the JavaScript, etc.)?
- Would the "back-end" of this project be the JavaScript code, or would there be other code imported that serves another purpose?
- How do more advanced programming languages interact with HTML/CSS/JS? For example, how could a Java program be imported into this project, and how could it be implemented into the site itself?
- In a team of developers, would there typically be someone to design what the website would look like, someone to write the actual code, and then someone else to debug it?
  - Do these roles typically overlap?
- Are there ever developers who are hired for the sake of debugging, or writing programs to ensure that the main program works? Almost like writing an autograder?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
- As well as implementing the other optional features, I would've loved to introduce different levels of difficulty, as well as a leaderboard.

- Regarding level of difficulty:
  - Instead of a single start button, there would be three buttons: easy, medium, difficult. The player would be able to choose their level of difficulty.
    - "Easy" mode would consist of four colored buttons to choose from, with unlimited time to repeat the given pattern
    - "Medium" mode would consist of five colored buttons to choose from, with unlimited time to repeat the given pattern
    - "Hard" mode would consist of five colored buttons to choose from, with a time limit to repeat the given pattern
  - The stop button feature would remain the same.
- Regarding a leaderboard:
  - Design the game so that the pattern array has an unlimited length
  - Scores will be kept based on how many buttons of the given pattern the player can repeat before failure
  - Scores would be presented from highest to lowest, only showing the top 10 scores, and replacing scores accordingly if a new score is higher than one on the leaderboard

## License

    Copyright Afsana Rahman

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
