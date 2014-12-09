3.  function times() {
    var count = 0;
    function plus() {
    counter+=1;
    }
    plus();    
    console.log(count); 
     }; 
    times() //- vuvodut zavzhdu 1 raz
    
    OR:
    
//- cia pracue krasche:
   function counter() {
   var times = 0;
   return function plus() {
      return ++times;
   }
   return times
                      }; 
    var count = counter(); - // scho treba dopusatu var ne sama dodymalasia, dopomoglu
    count() - // rahyie sama sebe, counter mae dostup do times i do danuh vnytrishnioi function, jaksho vudalutu var count=counter() - zhodna z dvoh ne prazuvatyme (ja tak zrozumila)
 
//OR:
     var times = 0;
     function count() {
     return times += 1;
      }; 
count()- //te same, ale 1 function. i prazuie ok. ALE my zmojemo zminutu times, ne vyklykaiychu count, a v poperednjiomy nijak.
 


//test4 branch
 

 


    
    
   