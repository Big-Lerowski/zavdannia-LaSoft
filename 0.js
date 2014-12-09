//1. fibonachi

function fib (){
 var m=[0,1];
 for(var i=2;i<12;i++){
  m[i]=m[i-2]+m[i-1];
 }
 return m;
}; fib() - //prosto 12 pershuh elementiv
 
//OR: 

var i=2;
var m=[0,1];
m.length=12;
function fib (){ 
 m[i]=m[i-2]+m[i-1];
 i++;
 if(i<m.length-1){ 
  fib ();
 }
 return m;
}; fib() - //iaksho kojnogo razy vuklukatu funkcijy, to dodaetsia po odnomy elementu z riady fibonachi.
 
//OR: 

 function fib (n){
 var m=[0,1];
 for(var i=2;i<n;i++){
  m[i]=m[i-2]+m[i-1];
     }
 return m;
                    }; 
fib(455) - //vukluche 455 elementiv z tiady fibonachi.



//test2 branch
 

 


    
    
   