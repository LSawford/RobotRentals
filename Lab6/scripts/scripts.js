/****************** YOUR NAME:

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let modelName = "XYZ";
let duration = 0; 



/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function recalculate() {
    // Get the calculated-cost span element
    var costLabel = document.getElementById("calculated-cost");

    // Check the value of the modelName variable
    // Assuming modelName is defined somewhere in the code
    // Assuming duration is defined somewhere in the code
    var newTotalCost = 0;

    // Perform calculations based on modelName
    switch(modelName) {
        case "XYZ":
            newTotalCost = duration * 100;
            break;
        case "CPRG":
            newTotalCost = duration * 213;
            break;
    }

    // Set the value of the calculated-cost element's innerHTML to the new total cost
    costLabel.innerHTML = newTotalCost;
}





/****************** model button logic ******************/

/*
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */

// INSERT YOUR CODE HERE

// Create a variable to represent the "Switch Model" pseudo-button
var modelButton = document.getElementById("model-button");
modelButton.addEventListener("click", changeModel);

// Create a function called changeModel()
function changeModel() {
    // Create a variable to represent the model-text span element
    var modelText = document.getElementById('model-text');

    // Check the value of the modelName variable and change it accordingly
    switch(modelName) {
        case "XYZ":
            modelName = "CPRG";
            modelText.innerHTML = "Model CPRG";
            break;
        case "CPRG":
            modelName = "XYZ";
            modelText.innerHTML = "Model XYZ";
            break;
    }

    // Recalculate the total cost after changing the model
    recalculate();
}








/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
// Assuming modelName, duration, and recalculate() function are already defined elsewhere in the code.

// Create a variable to represent the "Change Duration" pseudo-button
var durationButton = document.getElementById("duration-button");
durationButton.addEventListener("click", changeDuration);


// Create a function called changeDuration()
function changeDuration() {
    // Create a variable to represent the duration-text span element
    var durationText = document.getElementById("duration-text");

    // Prompt the user for a new duration
    var newDuration = prompt("Enter the new duration (in days):");

    // Validate if newDuration is a valid number
    if (!isNaN(parseFloat(newDuration)) && isFinite(newDuration)) {
        // Save the result of the prompt to the duration variable
        duration = parseFloat(newDuration);

        // Change the innerHTML of the duration-text span element to the new value
        durationText.innerHTML = duration;

        // Recalculate the total cost after changing the duration
        recalculate();
    } else {
        alert("Invalid input. Please enter a valid number for duration.");
    }
}

// Attach the changeDuration function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked

