# Crystal Collector Game

### Overview

Crystal Collector is an interactive game for web browsers. The app dynamically updates the HTML pages using the jQuery library.

1. The player will have to guess the answer with numbers.

2. Here's how the game works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##### Game design notes

* The random number shown at the start of the game is between 19 - 120.

* Each crystal should has a random hidden value between 1 - 12.


##### View Project
http://adamkojak.com/week-4-game/
