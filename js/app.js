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
        li.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectionName} </a>`;
        // onclick='funcClick(sectionLink)
        console.log(li);
        list.appendChild(li);
        i++;
    }  
     
}
/************ calling main functions ************/
// call render fucntion that creates the nav bar
render();
/************ events ************/
/************ scroll event ************/
document.addEventListener("scroll", function(){
    if(!isNaN(delay)){ 
        clearTimeout(delay); 
    }
    delay = setTimeout(checkVisibleSection, 100);
});

//---Check the visible section
function checkVisibleSection(){

    var minor   = window.innerHeight,
        section = null;

    //---Select the section closest to the top
    [].forEach.call(sections, function(item){

        var offset  = item.getBoundingClientRect();

        if(Math.abs(offset.top) < minor){

            minor   = Math.abs(offset.top);

            section = item;

        }

    });

    //---If the section exists
    if(section){
        if(!section.classList.contains("your-active-class")){
            //---Remove all active classes
            sections.forEach(sec => {
                sec.classList.remove('your-active-class');  
            });
            //---Add the active class
            section.classList.add('your-active-class');
            
        }

    }

}
var nav         = document.getElementById("navigation"),
    sections    = document.querySelectorAll(".section"),
    delay       = null;
/************ nav bar on click event ************/
/* ________ smooth scrolling using JQUERY ________ */
//on click function that overrides the defult scrolling behavior
$('.navbar__menu a').on('click',function(e){
    if(this.hash!==''){
        e.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop:$(hash).offset().top
        },800);
    }
});

