
 
var scrollPos = 0;
window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos){
    // SUBIR
    document.getElementById("header").style.transform="translateY(0px)";
    document.getElementById("blog-nav").style.top="75px";
    document.getElementById("header").style.transition=".5s";
    document.getElementById("blog-nav").style.transition=".5s";
    document.getElementById("header").style.transitionDelay="1s";
    document.getElementById("blog-nav").style.transitionDelay="1s";
   
  }
    
  else{
    // BAJAR
    document.getElementById("header").style.transform="translateY(-75px)";
    document.getElementById("blog-nav").style.top="0px";
    document.getElementById("header").style.transition=".5s";
    document.getElementById("blog-nav").style.transition=".5s";
    document.getElementById("header").style.transitionDelay="1s";
    document.getElementById("blog-nav").style.transitionDelay="1s";
   
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
  
});