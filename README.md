# Light-Memory-Game

# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Idiris Muumin** 


## Required Functionality

The following **required** functionality is complete:

* [✔️] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [✔️] "Start" button toggles between "Start" and "Stop" when clicked. 
* [✔️] Game buttons each light up and play a sound when clicked. 
* [✔️] Computer plays back sequence of clues including sound and visual cue for each button
* [✔️] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [✔️] User wins the game after guessing a complete pattern
* [✔️] User loses the game after an incorrect guess

Additional functionality:
* [✔️] Decreased the played sequence including sound and visual by 1/10
* [✔️] Decrease the response time by the computer by 50%
* [✔️] Increased the sound cue by 100%

  
  
## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
   - freecodecamp
   - Dr. Angela Yu (udemy course)
  

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The most difficult part of the game involved user responses. The sequence of clues shown by the game and tracking the inputs was something I struggled with as I managed game progression. The logic required nested conditional statements that carefully considered every case.

The framework for how I approached this problem is the following: My first step was to examine my current code (mostly the JavaScript part as it deals with the pattern). For my second step, I had to use some online resources to fill any known or unknown knowledge gaps. Next, I wrote out how I thought the process would be in a detailed flowchart, making sure to include the parameters in the guess function. In the end, I was able to change the start of the given guess function and had to use the rest as no other approach worked. Throughout this process, I learned that using pseudocode is a useful strategy to think of different solutions. And also, without going into too much detail, another thing that I had to keep in mind were the event handlers in the HTML tags, which were, although simple to understand, not something I usually do, so I had to be careful. I was then able to slowly rewrite my flowchart and come up with a working solution.

My last and probably most important problem I encountered was continuing code after a prolonged period of time without any documentation. Having to pick up where you left off without any comments or documentation is inefficient, as way too much time is spent making sure you know what the next step is and what is going on. I guess my professor was right; all those assignments that needed us to document everything were important.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Some questions I had after completing my submission and still do because I can't find a detailed answer anywhere are: How exactly do HTML, CSS, and Javascript work? There are many articles that mention that the three work together to create the bulk of the frontend and are crucial in web development; however, no article discusses how they are able to interact to form websites. Another question I have is: how far can you go with those three languages? I came to the realization that complex websites such as Youtube.com, Amazon.com, or Github.com could, with time, be completed in these three languages. However, I do realize there is a backend portion, and so another one of my questions is: at what point does it become backend, and how important or what is the percentage of frontend and backend in a website? As I create more projects and get more immersed in different languages, I hope to answer all my questions.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

With a bit more time, I would consider making the permanent pattern into a random one. Creating this portion of the game would both make the game more exciting and further help me understand all that is going on. Another part I would add are pictures of different vehicles and the different beeping sounds for the honk sound. With these additions, the game would be more amusing and more interactive. The last part I would add to my project with more time is a timer. A timer, along with a new pattern each time, will liven up the game and make it way more interactive.

## Video Walkthrough 

Add your screen recordings for specified implemented features here:
![losing screen recording](https://drive.google.com/file/d/1OH2eH2n6d_UvBfY17wqHgb-45sHUw8q6/view?usp=drive_link)

[Winning screen recording]
## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/03ba788b0e3a4a7099b325a2a7ae9e7d?sid=8bcea86c-32d7-43b6-a12b-95718ad9909c)


## License

    Copyright [Idiris Muumin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
