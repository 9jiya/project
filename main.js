var images = [
    "Me jiya.JPG","Rajveer bro.JPG","Mom.JPG","Dad.png"
  ]
  var i = 0;
  
  function changetext() {
    
    if(i == 4)
       {
         i=0;
       };
    document.getElementById("image").src = images[i];
    i++;
    if(i == 1){
      document.getElementById("Names").innerHTML="Jiya Desai";
    }
    if(i == 2){
      document.getElementById("Names").innerHTML="Rajveer Desai";
    }
    if(i == 3){
      document.getElementById("Names").innerHTML="Reshma Desai";
    }
    if(i == 4){
        document.getElementById("Names").innerHTML="Akash Desai";
      }
  }