function fizzBuzz(n){
  let returnArr = [];
  
  for(let i = 0; i<n;i++){
      let num = i+1;

      returnArr[i] = '';
      if (num % 3 === 0){ returnArr[i] += 'Fizz' } 
      if (num % 5 === 0){ returnArr[i] += 'Buzz'}
      if(returnArr[i] === '') { returnArr[i] = `${num}`}
      
  }
  return returnArr;
}

console.log(fizzBuzz(15))

//working and solved