#Ping-Pong Code Review

###Functionality and Rules

This program takes an integer as input from the user, then creates an array of integers up to that number. The contents of that array are modified based on the following rules:
  1. All numbers divisible by 3 are replaced by the string "Ping..."
  2. All numbers divisible by 5 are replaced by the string "...Pong!"
  3. All numbers divisible by 15 are replaced by the string "Ping Pong!"

Users may reset the program to blank, and enter another number.

If the users chooses to enter another number without pressing the reset button, the program will simply repopulate the array and print the new array in place of the old array without resetting.

Program implements an integer limit of 10,000, for the purpose of managing array size.  If the user enters a higher number, they will be prompted for a lower one.

###Specs

This Program:

1. Takes input and creates an array of integer values up to the number entered.
    Example Input: 2
    Example Output:[1,2]

2. Searches through that array, checking if a number is divisible by 3, then replaces those numbers with "Ping...".
    Example Input: [3]
    Example Output:[1,2,"ping"]

3. Searches through the array checking if a number is divisible by 5, then replaces it with "...Pong".
    Example Input: [5]
    Example Output:[1,2,3,4"pong"]

4. Searches through the array checking if a number is divisible by 15, then replaces it with "Ping Pong!".
    Example Input: [15]
    Example Output:[1,2,"Ping...", 4, "...Pong!", "Ping...", 7, 8, "Ping...", "...Pong!", 11, "Ping...", 13, 14, "Ping Pong!"]

5. Prints the results to the page.
    Example Input:[10]
    Example Output: [1,2,"Ping...", 4, "...Pong!", "Ping...", 7, 8, "Ping...", "...Pong!"]


###Languages and Tools Used

Back-end logic written in JavaScript, UI logic written with jQuery.  A basic HTML/CSS page is used for display.

###Known bugs

Input which is not a number (NaN) does not deploy the relevant error message; though it does not impact the program negatively either.  Nothing occurs.

###Link:

The above link will open the live site, hosted on GitHub Pages: https://tristanmeinke.github.io/codeReview3-PingPong/
