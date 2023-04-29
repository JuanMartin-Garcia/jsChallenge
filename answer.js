//First grab the whole value from the DOM element

//Second extract each desired value from the variable "value"

//Third make the conversion of the value of currency into the corresponding USD

// Fourth create the javascript object and asign the values for each key 

//First Challenge

const element = document.querySelector('span.h-text-md[data-test="espPlanPrice"]');
const value = element.textContent.trim();
console.log(value);

findCurrency = value.match(/^\$/)
findPrice = value.match(/(?<=\$)\d+(\.\d+)?/)

if (findCurrency[0]== "$") {
	currency = "USD";
} else {
console.log("We expect a dollar sing value $")
}

const priceObj = {}

priceObj.price = findPrice[0]
priceObj.currency = currency

console.log(priceObj)

/////////////////////////////////

//Second Challenge

const signUpLinks = document.querySelectorAll('a[href="/#signup"]');

signUpLinks.forEach(function(button) {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    alert("You clicked the Sign Up Now link!");
  });
});

// The square brackets [ ] are used to access elements of an array or properties of an object in JavaScript. In the case of an anchor <a> element in the DOM, you can access its attributes using square brackets as well.
// We use forEach to access each of the signUpLinks values
// We use preventDefault to prevent default action from the event link clicked on  
 
// addEventListener() is a powerful method that allows you to add interactivity to your web pages by responding to user actions such as clicks, mouse movements, key presses, and more.

//////////////////////////////////

//Third Challenge

function topNavListeners() {
  const topNavigation = document.querySelectorAll("li[data-category-name]");
  
  topNavigation.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      
      if (document.cookie.indexOf("browserClick") === -1) {
        // Cookie has not been set
        const buttonClicked = button.innerText;
        document.cookie = `browserClick=${buttonClicked}; expires=Thu, 29 Apr 2024 12:00:00 GMT; path=/`;
      } else {
        // Cookie has been set
        const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)browserClick\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        alert(`The browserClick cookie value is ${cookieValue}`);
      }
    });
  });
}

// Create a function, we user querySelectorAll for any element with "data-category-name"
// For each of those elements, you listen to the click event related to it. Prevent Default action of link. Then check for browserClick cookie. 
// If it has not been set, create with the button.innerText value. 
