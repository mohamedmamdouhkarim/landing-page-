

const test1= performance.now()

//i used queryselector to bring meun items under one variable so i can style them with one variable//
const x=document.querySelector(".navbarlist")

// i will use insertAdjacentHTML for every menu item because ever item is unique than other and have its own id//
const c="<a href=#section1 id=hello  class=your-active-class  data-nav=section 1> <img src=images/egypt.png height=20px width=20px> Egypt </a>"
x.insertAdjacentHTML("afterbegin", c);


const h="<a href=#section2 id=nadine   class=your-active-class data-nav=section 2 > <img src=images/italy.png height=20px width=20px> Italy </a>"
x.insertAdjacentHTML("afterbegin", h)


const l="<a href=#section3 id=layla  class=your-active-class data-nav=section 3 >  <img src=images/usa.png height=20px width=20px>  USA </a>"
x.insertAdjacentHTML("afterbegin",l)


const k="<a href=#section4 id=dina   class=your-active-class data-nav=section 4 > <img src=images/France.png height=20px width=20px> France </a>"
x.insertAdjacentHTML("afterbegin",k)


const u="<a href=# id=totop > Top </a>"
x.insertAdjacentHTML("afterbegin",u);



const test2= performance.now ()


 console.log(test2-test1+'Milliseconds')









/**

 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
