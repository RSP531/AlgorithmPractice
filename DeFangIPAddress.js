var defangIPaddr = function(address) {
  let arr = [];
  for(let i = 0; i<address.length; i++){
    console.log(address[i])
    if(address[i]=== '.'){
      arr.push('[.]')
    } else {
      arr.push(address[i])
    }
  }
  return arr.join('')
};
//solved

console.log('Answer:', defangIPaddr("255.1.1.1"))

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"