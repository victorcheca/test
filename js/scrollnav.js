
 
var scrollPos = 0;
window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos){
    // SUBIR
    document.getElementById("header").style.transform="translateY(0px)";
    document.getElementById("blog-nav").style.top="75px";
    document.getElementById("header").style.transition=".9s";
    document.getElementById("blog-nav").style.transition=".9s";
   
  }
    
  else{
    // BAJAR
    document.getElementById("header").style.transform="translateY(-75px)";
    document.getElementById("header").style.transition=".9s";
    document.getElementById("blog-nav").style.top="0px";
    document.getElementById("blog-nav").style.transition=".9s";
   
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
  
});