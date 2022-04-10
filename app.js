// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

// 01----------------------------------------------------------------------------------------------

let courseTitle;
let coursePrice;
let courseGoals;

courseTitle = "100 Days of Web Development";
coursePrice = 100;
courseGoals = [
  "Learn Front-end Development",
  "Learn Back-end Development",
  "Learn Web Services",
];

// 02------------------------------------------------------------------------------------------------

alert(courseTitle);
alert(coursePrice);
alert(courseGoals);

// 03-------------------------------------------------------------------------------------------------

let course = {
  title: "100 Days of Web Development",
  price: 100,
  goals: [
    "Learn Front-end Development",
    "Learn Back-end Development",
    "Learn Web Services",
  ],
  // We can add an array inside an object like this.
};
// We could even have objects inside objects.

alert(course.title);
alert(course.price);
alert(course.goals);

// 04---------------------------------------------------------------------------------------------------------------

alert(course.goals[1]);
// We can access a value of an array which sits inside an object like this.
alert(courseGoals[1]);

// 05-my-solution-----------------------------------------------------------------------------------------------------

let customCommand;
let customCommandTwo;
let customCommandThree;
let myCousins = ["Yashodha", "Geethma", "Janith", "Janeesha", "Shameen"];

function customFunction(customList, customIdentifier) {
  return customList[customIdentifier];
}
// We write this function to replicate what the 65th line of code does.
// But this is more flexible.
// Which means that we can pass "any" array name and "any" identifier number and get it's result by using this function.

customCommand = customFunction(courseGoals, 2);
customCommandTwo = customFunction(courseGoals, 1);
customCommandThree = customFunction(myCousins, 2);

// 05-real-solution----------------------------------------------------------------------------------------------------

function getListItem(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}

let firstGoal = getListItem(courseGoals, 0);

// 06-------------------------------------------------------------------------------------------------------------------

alert(customCommand);
alert(customCommandTwo);
alert(customCommandThree);
alert(firstGoal);
