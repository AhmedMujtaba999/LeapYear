//program to check whether the year is a leap year or Not
function Isleap(year){
 if(year%4==0){
     if(year%100==0){
         if(year %400==0){
           console.log("Leap year");  
          }
         else{
             console.log(" Not Leap year");
         }
     }
     else{
       console.log("Leap year");
     }
 }
 else{
     console.log("Not Leap Year");
    }
}

//taking inputs 
var year= prompt("enter the year");
Isleap(year);

