function FirstFactorial(num) { 
    var arr = [];
    
    for (i=num; i>0; i--) {
        arr.push(i)
    }
    num = arr.reduce(function(a,b){
        return a*b;
    });
    
    return num; 
         
}
// FirstFactorial(num)

/*
* num = 4 || output = 24
* num = 8 || output = 40320
*/
