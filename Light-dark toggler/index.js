function effects_dark(obj){
    obj.addEventListener("mouseover",()=>{
       obj.classList.add("shadow");
    });


    obj.addEventListener("mouseout",()=>{
       obj.classList.remove("shadow");
  });
 }

 var flag=1;
 document.querySelector(".btn").addEventListener("click",()=>{
  var button=document.querySelector("button");
  if(button.innerHTML==="Dark"){
  button.innerHTML="Light";
  flag=0;
  }
  
 else{
 button.innerHTML="Dark";
 flag=1;
 }
 document.querySelector("h1").classList.toggle("paras-after");
 document.querySelector(".rectangle").classList.toggle("rectspan-after");
 document.querySelector("button").classList.toggle("rectspan-after");
 
    for(var i=0;i<4;i++){
       document.querySelectorAll("p")[i].classList.toggle("paras-after");
       document.querySelectorAll("h2")[i].classList.toggle("paras-after");

       document.querySelectorAll(".boxes")[i].classList.toggle("boxes-after");
       if(flag===0){
       console.log("flag is "+flag);
       effects_dark(document.querySelectorAll(".boxes")[i]);
       }

       else{
        console.log("nothing");
       }
    }

    for(var i=0;i<7;i++){
       document.querySelectorAll("a")[i].classList.toggle("a-after");
    }
    var bodyclass=document.querySelector("body");
    bodyclass.classList.toggle("body-after");
    
 });