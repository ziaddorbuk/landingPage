/************ define global variables ************/
let pageSetions = Array.from(document.querySelectorAll('section'));
let list = document.getElementById('navbar__list');
let i = 0;
let numOfSections = pageSetions.length;
/************ main functions ************/
 function render(){
    while(i<pageSetions.length){
        // get section name
        sectionName = pageSetions[i].getAttribute('data-nav');
        sectionLink = pageSetions[i].getAttribute('id');
        li = document.createElement('li');
        li.innerHTML = `<a class='menu__link'href='#${sectionLink}'>${sectionName}</a>`;
        list.appendChild(li);
        i++;
    }   
}
function active(){
    let i2=0;
    while(i2<numOfSections){
        if((pageSetions[i2].getBoundingClientRect().top)>=0){
            if(pageSetions[i2].classList.contains('your-active-class')){
                pageSetions[i2].classList.remove('your-active-class');
            }else if(!pageSetions[i2].classList.contains('your-active-class')){
                pageSetions[i2].classList.add('your-active-class');
            }   
        }
        i2++;
    }
}
/************ calling main functions ************/
// call render fucntion that creates the nav bar
render();
/************ events ************/
document.addEventListener('scroll',active);