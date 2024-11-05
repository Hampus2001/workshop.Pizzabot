const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
let isInMenu = true;
const pizzaPrice = 80;

//Calculate total price
function totalCost(quantity) {
  const price = pizzaPrice * quantity;
  return price;
}

//Checking order to menu function
function checkOrderName(order) {
  if (order !== vegetarian && order !== hawaiian && order !== pepperoni) {
    alert("Sorry, we don't have that pizza on our menu.");
    isInMenu = false;
  }
}

//Cooking time function
function cookTime(quantity) {
  if (quantity <= 2) {
    alert("The pizzas will take 10 minutes.");
  } else if (quantity > 2 && quantity < 6) {
    alert("The pizzas will take 15 minutes.");
  } else {
    alert("The pizzas will take 20 minutes.");
  }
}
//End task function
function endTask() {
  isInMenu = false;
}

//START TASK

//Greeting
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

//Order
const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);
//Checking order to menu
checkOrderName(orderName);

while (isInMenu) {
  //Quantity
  const orderQuantity = prompt(`How many of ${orderName} do you want?`);

  //Calculating total price
  const orderTotal = totalCost(orderQuantity);

  //Calculating cooking time
  cookTime(orderQuantity);

  //Displaying order
  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr`
  );
  //END TASK
  endTask();
}
console.log(orderTime);
