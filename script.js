(function(){
    "use strict";
    const images=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    const currentImage=document.querySelector("img");
    let currentID=currentImage.getAttribute("src")[5]-1;
    const next=document.getElementById("next");
    next.onclick=nextPhoto;
    
    function nextPhoto(){
        
       currentID++;
       if(currentID>images.length-1){ currentID=0;}
       currentImage.setAttribute("src",images[currentID]);
    }

    const previous=document.querySelector("#previous");
    previous.addEventListener("click",previousPhoto);
    function previousPhoto(){
        currentID--;
        if(currentID<0){ currentID=images.length-1;}
        currentImage.setAttribute("src",images[currentID]);
    }

})();

