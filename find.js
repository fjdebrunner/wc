var centers = ctrs;

function myFun(){
      var ans;
      if(document.getElementById("choice").checked == true){
         
         ans = document.getElementById("choice").value;
      }

      else{

         ans = document.getElementById("choice1").value;
      }
      cont(ans);

 }   
 
 
 
 function getCenters(centers, a1){
   var toRet = [];
      for(var i in centers){
            if(centers[i].tags[a1] >= 0){
               toRet.push(i);
              
            }
            
      }

      return toRet;
   }


   function cont(holder){

      var text = "";
      var impCtrs = getCenters(centers, holder); 
      for(i = 0; i < impCtrs.length; i++){

         text = text + centers[impCtrs[i]].name + "<br>" +
               centers[impCtrs[i]].description + "<br>" +
               centers[impCtrs[i]].phonenumber + "<br>" +
               centers[impCtrs[i]].address + "<br>" + "<br>";
      }
         document.getElementById('demo').innerHTML = text;
   }
