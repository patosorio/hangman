# Hangman Game

English Hangman Game with three different parts of speech: Nouns, adjective or verbs. The aim of the game is to discover all letters the word has within 10 chances. 
 
## UX

The UX process implemented in this site is a simple page with the hangman game and the contact page for bugs report or contact.

The main page is a simple layout where you can see your scores and game status at any time. 

As a Hangman player, I'd like to see the word letters number, the history of letters already checked, points left and hangman img is a plus.

Sketch -- Assets / pdf

## Features

Header - For both pages the header has a linked logo to index.html and messages button for contact.
Game area - Choose a game between noun, adjective and verbs, once the word has been requested to the wordnik API the game starts and you can see the length of the word and an empty input to insert a letter. 
Scores area - Where you can see the letters history for checked letters, the number of chances you have left. 

### Existing Features


### Features Left to Implement
- Another feature I'd like to add is:
Login sessions to save the user data.
General overview of users ranking.
Friends battles 

Redesign CSS 

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- Javascript main game programming
- HTML structure
- CSS styles

- Wornik API: https://www.wordnik.com/


## Testing


1. Game:

    To test the game I open the terminal and once the word has been requested (NOUN, ADJ OR VERB) I type: 'word' to see the requested word:
    - First I add all correct letters to see the history is working correctly and num attemps still always 10. Once we win I check the alert is correctly displayed.
    - Then I add wrong letters to check the letters history, num attemps and hangman img behaviour. 
    - I try to play with non game choosed or letter to advise user that a game is needed and a letter too.


2. Contact form:
    1. Go to the "Contact Us" page from icon link 
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with all inputs valid and verify that a success message appears.

I
## Deployment

The site is deployed in github pages. 

## Credits

### Content


### Media
- The photos used in this site were designed in illustrator by me. 

### Acknowledgements


