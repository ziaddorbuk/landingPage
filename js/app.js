/**
 * 
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
const sections= Array.from(document.querySelectorAll('section'));
const list =document.getElementById('navbar__list');
let counter=sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



function isViewed(section){
    let position = section.getBoundingClientRect();
    return (position.top>=0);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
//create navBar
function newItem(){
    for(section of sections){
        sectionName = section.getAttribute('data-nav');
        link = section.getAttribute('id');
        item = document.createElement('li');
        item.innerHTML=`<a class='menu__link'href='#${link}'>${sectionName}</a>`;
        list.appendChild(item);
    }
}
// Add class 'active' to section when near top of viewport
function activeSection(){
    for(section of sections){
        if(isViewed(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
            else {
                section.classList.remove('your-active-class');
            }
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Set sections as active
document.addEventListener('scroll',activeSection);

// Build menu 
newItem();

