setInterval(function(){
  			
    myFun();
              
          },5000);
    function myFun() {
        var x = document.getElementById('my1');
    var y=document.getElementById('my2');
    var z=document.getElementById('my3');
        if (x.style.display === 'block') {
            z.style.display='none';  
            x.style.display = 'none';
            y.style.display='block';
            }else if(y.style.display==='block'){
    
            y.style.display='none';
            z.style.display='block';
    
    }else{
            z.style.display = 'none';
            x.style.display='block';
            
        }
        
    
        }