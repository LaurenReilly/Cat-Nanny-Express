# Cat-Nanny-Express
A SUPREMELY FUN game where you play as a pet Nanny who tries to figure out what the cat or dog needs to be able to go home happy!

## Description

Enter a username on the sign in page and press the button. You'll then go to the game page where a 60 second timer will begin. From here you can either click on the Cat/Dog icons to begin playing or use the keyboard (W for cat and E for dog). An image of the animal of your choice will appear but you don't have to wait for it to appear to begin taking care of it, some animals are just a little shy! 
---
The animal will come to you with randomly generated secret stats for feeding/grooming/playing. It is up to you to figure out what the animal needs to fill its status bar and go home to its parents in a better state than it arrived. Click on the icons or use the keyboard to feed (A), groom (S), and play (D) with the animal. If you go too far in any category your score will go down by one, taking care of animals is a precise art! When you've maxed out that pet's score bar it will go home and you will be awarded 100 points! 
---
If you still have time on the clock you can choose another pet to care for. See how many pets you can successfully take care of in 60 seconds. Your goal is to try and achieve a high Nanny Level and get your name on the leader board!

## API's used

- We used the Google Fonts API to import the custom fonts we used across our site. (https://fonts.google.com/)
- The Cat API generates all of our random cat images. (https://aws.random.cat/meow)
- The Dog API generates all of our random dog images. (https://random.dog/woof.json)
- All of our user data is stored in and retrieved from Firebase. (https://firebase.google.com/)

## Authors

- **Stephenna Corry**
    Created the Sign In page with a banned words list and character limit for the username input.
- **Lauren Reilly**
    Created the Game Page and designed the game mechanics.
- **Ashley Souvannaraj**
    Created the Game Over page and implemented the Firebase to display the top five scores.

---    

###### Bug List
The response time from the Cat and Dog API can vary. Sometimes you will have a cat image popping up after you've already taken care of that pet. We have placeholder text that will display if an image doesn't load but unfortunately cannot cancel the AJAX request once it has been sent. 