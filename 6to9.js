document.write("Result:<br>The Value of a is 10 <br><br> .......................................... <br><br> The Value of ++a is : 11 <br> Now the value of a is : 11 <br><br> The Value of a++ is : 11 <br> Now the value of a is : 12 <br><br> The Value of --a is : 11 <br> Now the value of a is : 11 <br><br> The Value of a-- is : 11 <br> Now the value of a is : 10 <br><br>")



// 2


var a = 2, b = 1;
var result = --a - --b + ++b + b--;

console.log("a: " + a); // Output: a: 0
console.log("b: " + b); // Output: b: 1
console.log("result: " + result); // Output: result: 2


// 3


// Prompt the user to enter their name
var userName = prompt("Enter your name:");

// Greet the user
alert("Hello, " + userName + "! Welcome to our website!");




// 4

        // CHAPTER No.6\
// QUS1
x++;


// QUES2
x--;


// QUES3
var x = 50;
var y = x++;

// At this point, y is equal to the initial value of x, which is 50.
// x is then incremented by 1.
// So, x is now equal to 51.


var y = 50;
var z = --y;

// The value of y is decremented by 1 before it is assigned to z.
// So, y is now equal to 49.
// The value of z is equal to the decremented value of y, which is 49.




var newNum = num--;




var originalValue = variable++;



// Assign a number value to a variable
var num = 5;

// Increment the variable
num++;

// Display the new value in an alert
alert("The new value is: " + num);




// CHAPTER NO .07 

// 1.
var calculatedNum1 = 2 + (2 * 6);
// The value of calculatedNum1 is 14


var calculatedNum2 = (2 + 2) * 6;
// The value of calculatedNum2 is 24


var calculatedNum3 = (2 + 2) * (4 + 2);
// The value of calculatedNum3 is 24


var calculatedNum4 = ((2 + 2) * 4) + 2;
// The value of calculatedNum4 is 18


var cost = (2 + 2) * 4 + 10;
// The value of cost is 26


var units = 2 + 2 * 4 + 10;
// The value of units is 20


var pressure = 4 / (2 * 4);
// The value of pressure is 0.5



// CHAPTER NO 08

var num = "2" + "2";
// The value of num is "22"


var message = "Hello," + "Dolly";
// The value of message is "Hello,Dolly"
alert(message);
// This will display an alert box with the message "Hello,Dolly"


alert("33" + 3);
// The message displays in the alert box is "333"


alert("Pakistan " + "Zindabad");
// This will display an alert box with the message "Pakistan Zindabad"

var concatenation = "String" + 10;
// This will assign the value "String10" to the variable concatenation


var string1 = "Hello";
var string2 = "World";
var concatenatedString = string1 + string2;
// This will concatenate the strings "Hello" and "World" and assign the result to concatenatedString


// Chapter 9 (Prompts)

var firstName = prompt("Enter first name");
// This will prompt the user to enter their first name and assign the response to the variable firstName


var country = prompt("Country?", "China");
// This will prompt the user with the message "Country?" and provide "China" as the default answer, assigning the user's response to the variable country


var yourName = prompt("Enter Your Name");
// The message string should be enclosed in quotes.


var userInput = prompt("Please enter your email address", "example@example.com");
// This prompt will ask the user for their email address with "example@example.com" as the default input.


var question1 = "What is your favorite color?";
var defaultResponse1 = "Blue";
var userResponse1 = prompt(question1, defaultResponse1);
// This will prompt the user with the question "What is your favorite color?" and "Blue" as the default response, and assign the user's response to userResponse1.


var message = "What is your favorite food?";
var defaultResponse = "Pizza";
var userResponse = prompt(message, defaultResponse);
// This will prompt the user with the question "What is your favorite food?" and "Pizza" as the default response, and assign the user's response to userResponse.
alert("Your favorite food is: " + userResponse);
// This will display an alert with the user's response.
