function cutSticks(lengths) {
    
    function getsumOfArrayElements (array) {
        var sum = array.reduce(function(prev, cur) {
            return prev + cur;
    });
        console.log('SUM', sum);
        return sum;
    }
    function findMinValue(array) {
        console.log('findMinValue', Math.min.apply(null, array.filter(Boolean)));
        return Math.min.apply(null, array.filter(Boolean));  
    };
    function cutByMinValue(array) {
        var minValue = findMinValue(lengths);
        var cutArr = array.map( function(value) { 
            return Math.max(0,(value-minValue));
        });
        return cutArr;
    };
    
    do {
        console.log('lengths > Input', lengths);
        var minValue = findMinValue(lengths);
        console.log('minValue', minValue);
        lengths = cutByMinValue(lengths);
        console.log('lengths > 2', lengths);
        console.log('getsumOfArrayElements', getsumOfArrayElements(lengths));
        console.log('Return val', getsumOfArrayElements(lengths));
        return getsumOfArrayElements(lengths);
    } while (getsumOfArrayElements(lengths) !== 0);
}

