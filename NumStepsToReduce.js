var numberOfSteps  = function(num) {

    function recurse(count){
        //console.log('num: ', num, ' count: ', count)
        if(num === 0){
            return count;
        }
        
        if (num%2 === 0){
            num = num /2;
        } else {
            num = num - 1;
        }  
        count++
        return recurse(count)
    }
    return recurse(0)
};

console.log('Answer:', numberOfSteps(14))

//SOLVED