/** @format */

function welcome(firstName, lastName) {
  let fullName = firstName + " " + lastName;

  function displayFullName() {
    alert("Welcome " + fullName + "!");
  }

  displayFullName(); // Call displayFullName here to show the welcome message
}

welcome("Holberton", "School");
