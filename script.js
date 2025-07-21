var zx=document.getElementById('c');  
var body= document.getElementById("Body");
const links= document.querySelectorAll("#c ul li");
links.forEach(link => {
   link.addEventListener('click', function() {
      zx.style.transition = "none";
      zx.style.opacity = 0;
      zx.classList.remove("left-0");
      body.classList.toggle("overflow-hidden");
      body.style.position = '';
      body.style.width = '';

      setTimeout(() => {
    zx.style.transition = "all 1.2s";
    zx.style.opacity = 1; // Reset opacity style to allow CSS default when showing nav again
  }, 2000);
   }
     
   )
})





xcross=document.getElementById('x-cross');
onv= document.getElementById('mm');
xxxxxx= document.getElementById('c');
Body= document.getElementById("Body");
onv.addEventListener('click', function() {
    
    xxxxxx.classList.toggle("left-0");
    Body.classList.toggle("overflow-hidden");
    Body.style.position = 'fixed';
    Body.style.width = '100%';

});


xcross.addEventListener('click', function() {

Body.classList.toggle("overflow-hidden");
xxxxxx.classList.toggle("left-0");
Body.style.position = '';
Body.style.width = '';

});


const btn = document.getElementById('cv-button');
btn.addEventListener('animationend', () => {
  btn.classList.add('fully-visible');
});


let showMoreButton= document.getElementById('showMoreButton');

showMoreButton.addEventListener('click', function() {
    var showMoreButtonText =document.getElementById('showMoreButtonText');
    var hidden= document.getElementById('hiddenElements');
    var upArrows= document.getElementById('upArrows');
    var downArrows= document.getElementById('downArrows');
    hidden.classList.toggle('show');
    

    if(showMoreButtonText.innerHTML=== "Show More") {
        showMoreButtonText.innerHTML= 'Show Less';
        downArrows.classList.add('d-none');
        upArrows.classList.add('d-block');
        upArrows.classList.remove('d-none');
    }
    else {
        showMoreButtonText.innerHTML= 'Show More';
        downArrows.classList.add('d-block');
        downArrows.classList.remove('d-none');
        upArrows.classList.add('d-none');
    }
} );

//generic scroll function here
function ScrollAnimation(element, Yposition, animation) {

    document.addEventListener('scroll', function() {
         
             if(window.scrollY > Yposition) {
                element.classList.add(animation);
      
             }  
         });

}

var about_me= document.getElementById('about-me-section');

ScrollAnimation(about_me,230,'about-me-animation');

  
     document.addEventListener('scroll', function () {
    var button_animation = document.querySelectorAll('.button-trigger');
  
    if (window.scrollY > 1150) {
      button_animation.forEach((el, index )=> {
        if (!el.classList.contains('fully-visible')) {
  
          el.style.animationDelay = `${index * 0.2}s`;
          el.classList.add('current-tech-animation');
  
          el.addEventListener(
            'animationend',
            function () {
              el.classList.remove('current-tech-animation');
              el.classList.remove('element-hidden');
              el.classList.add('fully-visible');
            },
            { once: true } 
          );
        }
      });
    }
  });
  
      
      var elem= document.getElementById('firstRow');
      ScrollAnimation(elem,1600,'fade');


      var secondRow= document.getElementById('secondRow');
      ScrollAnimation(secondRow,2100,'fade');

      var thirdRow= document.getElementById('thirdRow');
      ScrollAnimation(thirdRow,2500,'fade');
  

      var connect_section= document.getElementById('connect-section');
      ScrollAnimation(connect_section,3050,'about-me-animation');

 
// end of scroll functions in JS

   let dayOrNight="night";
   bodyElement= document.getElementById('Body');
   const mobileMenu = document.getElementById('c');
   dayAndNightElemments=document.querySelectorAll('.nightIcon');
   const lampSound= new Audio('light-switch.mp3');
   dayAndNightElemments.forEach(dayNite => {
   dayNite.addEventListener('click',() =>
        
  {
          dayNite.classList.toggle('fa-moon');
          dayNite.classList.toggle('fa-sun');
          bodyElement.classList.toggle('day');
          mobileMenu.style.transition="none";

          if(sound===true) {
            lampSound.play();
          } 
          
          if(dayOrNight==="night") {
            dayOrNight="day";
            console.log(dayOrNight);
          }
          else {
            dayOrNight="night";
            console.log(dayOrNight);

          }
          setTimeout(() => {
            mobileMenu.style.transition = "";
          }, 200);
      })
      
  }); 
  
  
  
  let sound=true;
  
  const soundIcons= document.querySelectorAll(".soundIcon");    
  const sound1 = new Audio('mouse-click.mp3'); // path to your sound file
  const sound2 = new Audio('setting-pencil-down.mp3');
  
  soundIcons.forEach(soundIcon => {
  
  soundIcon.addEventListener('click', () => {
  if (sound===true){
      sound=false;
      sound2.play();
      soundIcon.classList.toggle('fa-volume-up');
      soundIcon.classList.toggle('fa-volume-down');
      console.log(sound);
  }
  else{
      sound=true;
      sound1.play();
      soundIcon.classList.toggle('fa-volume-up');
      soundIcon.classList.toggle('fa-volume-down');
      console.log(sound);
  }
     
  });
  });
  
  const cvButton= document.getElementById('cv-button');;    
  
    cvButton.addEventListener('click', () => {
      if (sound===true) {
        
          sound1.play();
      }
  }); 

  
  const footerLinks= document.querySelectorAll('footer ul li');
  
  footerLinks.forEach(footerLink => {
    
    footerLink.addEventListener('click', () => {
        if (sound===true) {
          
            sound1.play();
        }
    
    }); 
    });
    
    const previous_project_links= document.querySelectorAll('#previous-projects a');

    previous_project_links.forEach(previous_project_link=> {
    
        previous_project_link.addEventListener('click', () => {
            if (sound===true) {
              
                sound1.play();
            }
        
        }); 
        });

  const fixedNavbarElemments= document.querySelectorAll('#fixed a');
  
  fixedNavbarElemments.forEach(fixedNavbarElemment => {
    
    fixedNavbarElemment.addEventListener('click', () => {
        if (sound===true) {
          
            sound1.play();
        }
    
    }); 
    });


  const elements= document.querySelectorAll("button");    
  
  elements.forEach(el => {
    
  el.addEventListener('click', () => {
      if (sound===true) {
        
          sound1.play();
      }
  
  }); 
  });
  
  
  const nav_elements= document.querySelectorAll("nav ul li");    
  
  nav_elements.forEach(nav_el => {
    
  nav_el.addEventListener('click', (e) => {
      if (sound===true && !e.target.matches('.nightIcon')) {
         
          sound1.play();
          
      }
  
  }); 
  });
