/** @format */

// 1. Create the user object
// 2. Created attributes representing info about user

const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer",
};

// 3. Create the 'logWelcomeUser' function
function logWelcomeUser(welcomeString) {
  console.log(
    `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`
  );
}
// ${this.firstName} & ${this.occupation} are used to access the firstName & occupation properties of the user.

// 4. Create the bindLogWelcomeUser variable:
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Calling the function with the string 'Welcome'
bindLogWelcomeUser("Welcome");
