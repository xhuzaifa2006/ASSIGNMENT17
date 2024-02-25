        // CHAPTER NUMBER : 05

    // QUESTION NUMBER : 01



var firstNumber = prompt("Enter the first number:");

firstNumber = parseFloat(firstNumber);


var secondNumber = prompt("Enter the second number:");


secondNumber = parseFloat(secondNumber);


if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    
    var sum = firstNumber + secondNumber;

    
    alert("The sum of " + firstNumber + " and " + secondNumber + " is " + sum);
} else {
   
    alert("Please enter valid numbers.");
}

    // QUESTION NUMBER : 01 END!




    // QUESTION NUMBER : 02


var firstNumber = prompt("Enter the first number:");


firstNumber = parseFloat(firstNumber);


var secondNumber = prompt("Enter the second number:");


secondNumber = parseFloat(secondNumber);


if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    // Addition
    var sum = firstNumber + secondNumber;
    alert("Addition: " + firstNumber + " + " + secondNumber + " = " + sum);

    // Subtraction
    var difference = firstNumber - secondNumber;
    alert("Subtraction: " + firstNumber + " - " + secondNumber + " = " + difference);

    // Multiplication
    var product = firstNumber * secondNumber;
    alert("Multiplication: " + firstNumber + " * " + secondNumber + " = " + product);

    // Division
    if (secondNumber !== 0) {
        var quotient = firstNumber / secondNumber;
        alert("Division: " + firstNumber + " / " + secondNumber + " = " + quotient);
    } else {
        alert("Division by zero is not allowed.");
    }

    // Modulus
    if (secondNumber !== 0) {
        var remainder = firstNumber % secondNumber;
        alert("Modulus: " + firstNumber + " % " + secondNumber + " = " + remainder);
    } else {
        alert("Modulus by zero is not allowed.");
    }

} else {
  
    alert("Please enter valid numbers.");
}


        // QUESTION NUMBER : 02 END!


        // QUESTION NUMBER : 03

// a. Declare a variable.
var myVariable;

// b. Show the value of the variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the value of the variable in your browser like “Initial value: 5”.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of the variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of the variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of the variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
var remainder = myVariable % 3;

// l. Output: “The remainder is: 0”.
document.write("The remainder is: " + remainder);

//   QUESTION NUMBER 03 END!


//   QUESTION NUMBER 04

// Store the ticket price in a variable
var ticketPrice = 600; // PKR

// Calculate the cost of buying 5 tickets
// Store the ticket price in a variable
var ticketPrice = 600; // PKR

// Calculate the cost of buying 5 tickets
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

// Display the total cost using an alert dialog box
alert("The cost of buying 5 tickets to the movie is: " + totalCost + " PKR."); 


        //   QUESTION NUMBER 03 END!


        //   QUESTION NUMBER 04


// Prompt the user to enter a number
var number = parseInt(prompt("Enter a number for any table:"));

// Check if the entered value is a valid number
if (!isNaN(number)) {
    var table = "<h2>Multiplication Table of " + number + "</h2><br>";

    // Generate the multiplication table
    for (var i = 1; i <= 10; i++) {
        table += number + " x " + i + " = " + (number * i) + "<br>";
    }

    // Display the multiplication table on the web page
    document.write(table);
} else {
    // Display an error message if the input is not a valid number
    document.write("Please enter a valid number.");
}



//   QUESTION NUMBER 04 end!


//   QUESTION NUMBER 05 

// a. Store a Celsius temperature into a variable.
var celsiusTemperature = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
alert(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemp = 77;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
alert(fahrenheitTemp + "°F is " + celsiusTemp + "°C");



        //   QUESTION NUMBER 05 end! 

            //   QUESTION NUMBER 06


        // Store the prices of items and quantities in variables
var priceItem1 = 25; // Price of item 1
var priceItem2 = 30; // Price of item 2
var quantityItem1 = 2; // Ordered quantity of item 1
var quantityItem2 = 3; // Ordered quantity of item 2
var shippingCharges = 5; // Shipping charges

// Calculate the total cost of each item
var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;

// Calculate the total cost of all items
var subtotal = totalCostItem1 + totalCostItem2;

// Add shipping charges to the total cost
var totalCost = subtotal + shippingCharges;

// Display the receipt in the browser
document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<hr>");
document.write("<p>Subtotal: $" + subtotal + "</p>");
document.write("<p>Total Cost (including shipping charges): $" + totalCost + "</p>");

            //   QUESTION NUMBER 05 end!

            //   QUESTION NUMBER 06

// Store total marks and marks obtained by the student in variables
var totalMarks = 500; // Total marks
var marksObtained = 420; // Marks obtained by the student

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


//   QUESTION NUMBER 06 end!

//   QUESTION NUMBER 07
 
 var totalRupees = (10 * 104.80) + (25 * 28);

 
 var paragraph = document.createElement("p");
 paragraph.textContent = "Total currency in Pakistani Rupees: " + totalRupees.toFixed(2);
 document.body.appendChild(paragraph);
//   QUESTION NUMBER 07 end


// QUESTION NO 8
// Initialize a variable with some number
var number = 10;

// Perform arithmetic operations in the given sequence in a single expression
var result = ((number + 5) * 10) / 2;

// Display the result
console.log("The result of the arithmetic operations is: " + result);
// QUESTION NO 8 END!




// Function to calculate age based on birthdate
function calculateAge() {
    // Get the birthdate value from the user
    var birthdate = new Date(prompt("Enter your birthdate (YYYY-MM-DD):"));

    // Get the current date
    var currentDate = new Date();

    // Calculate the difference in years between the current date and the birthdate
    var age = currentDate.getFullYear() - birthdate.getFullYear();

    // Check if the current date hasn't reached the birthdate yet this year
    if (currentDate.getMonth() < birthdate.getMonth() ||
        (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }

    // Display the calculated age
    alert("Your age is: " + age + " years");
}

// Function to update the age every second
function updateAge() {
    calculateAge();
    // Re-run the updateAge function every second
    setTimeout(updateAge, 1000);
}

// Start the process by calling the updateAge function
updateAge();





// Store the radius of the circle in a variable
var radius = 5; // Example radius, you can change it as needed

// Calculate the circumference of the circle
var circumference = 2 * Math.PI * radius;

// Calculate the area of the circle
var area = Math.PI * Math.pow(radius, 2);

// Output the circumference and area
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));










// Store your favorite snack into a variable
var favoriteSnack = "chocolate";

// Store your current age into a variable
var currentAge = 30; // Example current age, you can change it as needed

// Store a maximum age into a variable
var maximumAge = 80; // Example maximum age, you can change it as needed

// Store an estimated amount per day (as a number)
var snacksPerDay = 2; // Example snacks per day, you can change it as needed

// Calculate the total number of snacks you would need
var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365; // Assuming 365 days in a year
var totalSnacksNeeded = daysRemaining * snacksPerDay;

// Output the result
console.log("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");
