window.addEventListener('scroll',function(){
    const top =document.getElementById('top');
    const nav=document.querySelector("nav");
    nav.classList.toggle("stiky",window.scrollY>0);
    if(window.scrollY>=600){
        // top.style.transition="display .5s;";
        // top.style.display="block";
        top.style.visibility="visible";
    }
    else{
        // top.style.transition="display .5s;";
        // top.style.display="none";
        top.style.visibility="hidden";
        
    }
    
});
function montoggle(){
    const mnuetoggle=document.querySelector(".mnuetoggle");
    const navgation=document.querySelector(".links");
    mnuetoggle.classList.toggle("active");
    navgation.classList.toggle("active");
};
top.onclick=function(){
    scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    })
}
