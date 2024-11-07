const calculateBtn = document.getElementById("priceBtn");
const orderNowBtn = document.getElementById("orderNowButton");
let makeAnOrder = document.getElementById("makeAnOrder");
const menu = ["Vegetarian Pizza", "Hawaiian Pizza", "Pepperoni Pizza"];
let chosenPizza = "";
let amountOfPizza = 0;

calculateBtn.addEventListener("click", function () {
  let amount = document.getElementById("chooseAmount").value;
  amount = parseInt(amount);
  const pizza = document.getElementById("choosePizza").value;
  chosenPizza = pizza;
  amountOfPizza = amount;
  let isOnMenu = false;
  for (let i = 0; i < menu.length; i++) {
    if (pizza === menu[i]) {
      isOnMenu = true;
    }
  }
  if (isOnMenu && amount > 0) {
    const pizzaPrice = 80;
    const displayPrice = document.getElementById("displayPrice");
    const price = amount * pizzaPrice;
    displayPrice.textContent = `Your total price is ${price} kr`;
    displayPrice.classList.remove("hideButton");
    orderNowBtn.classList.remove("hideButton");
    makeAnOrder.classList.add("hideButton");
  } else if (!isOnMenu) {
    makeAnOrder.textContent = "Please select a Pizza!";
    orderNowBtn.classList.add("hideButton");
    makeAnOrder.classList.remove("hideButton");
    displayPrice.classList.add("hideButton");
  } else {
    makeAnOrder.textContent = "Please select amount!";
    orderNowBtn.classList.add("hideButton");
    makeAnOrder.classList.remove("hideButton");
    displayPrice.classList.add("hideButton");
  }
});

orderNowBtn.addEventListener("click", function () {
  let cookTime = "";
  if (amountOfPizza <= 2) {
    cookTime = "10 minutes!";
  } else if (amountOfPizza > 2 && amountOfPizza <= 5) {
    cookTime = "15 minutes!";
  } else {
    cookTime = "20 minutes!";
  }
  const container = document.querySelector(".container");
  const hiddenUntilOrdered = document.querySelector(".hiddenUntilOrdered");
  const thankYouForOrdering = document.querySelector("#thankYouForOrdering");
  const backgroundCircle = document.querySelector(".backgroundCircle");
  thankYouForOrdering.textContent = `Thank You for ordering! Your ${amountOfPizza} ${chosenPizza} will be ready in ${cookTime} `;
  container.classList.add("hideButton");
  hiddenUntilOrdered.classList.remove("hideButton");
  thankYouForOrdering.classList.remove("hideButton");
  backgroundCircle.classList.remove("hideButton");
});
