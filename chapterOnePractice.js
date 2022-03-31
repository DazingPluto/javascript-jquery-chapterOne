//clarify some HTML and CSS terms
// not how HTML and CSS use Name/Value pairs
// HTML elements are added to the page to describe its structor and consit of an opening and closing tab
// in HTML openning tags can carrys attributews that tell us more about the element.
// CSS rules can indicate how the content should be displayed
// the CSS selector indicates which element(s) the rule is applied to.
// In CSS each decloration in decloration block has a property and a value.


// HTML IE <p class="fruit">peach</p>
// CSS IE 
//     .fruit {
//     color: pink;
//     }

// ---- QUESTIONS TO ANSWER BEFORE LEARNING JAVASCRIPT ----
// WHAT is a script?? and how do i creat one?? 
// How do computers fit in with the world around them??
// How do i write a script for a web page??

// let today = new Date();
// let hourNow = today.getHours();
// let greeting;

// if (hourNow > 18) {
//     greeting = 'Good Evening!';
// } else if ( hourNow > 12) {
//     greeting = 'Good Afternoon!';
// } else if ( hourNow > 0) {
//     greeting = 'Good Morning!';
// } else {
//     greeting = 'Welcome!';
// }

discount.write('<h3>' + greeting + '</h3>')

let today = new Date()
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'Good Evening';
} else if ( hourNow > 12) {
    greeting = 'Good Afternoon!';
}else if ( hourNow > 0) {
    greeting = 'Good Morning!';
}else {
    greeting = 'Welcome!';
}
