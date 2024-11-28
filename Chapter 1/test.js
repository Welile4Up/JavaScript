alert("Hi there!"); //Show an alert message to the user

let name = prompt("What's your name?").trim(); //Get the name and trim any extra spaces

if (name) {     //Check if the user entered a name
    let randomNumber = Math.floor(Math.random() * 100) + 1; //Generate a random number between 1 and 100

    alert("Hello, " + name + "! Your random number is: " + randomNumber); //Show an alert with the greeting and the random number

    console.log("User's name: " + name);
    console.log("Random number: " + randomNumber); 
} else{
    alert ("No name entered."); //Alert the user if no name was entered
}