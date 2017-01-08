function isPalindrome(str){
  var i,len=str.length;
  for(i=0;i<len/2;i++){
    if(str[i]!==str[len-i-1])
      return false;
  }
  return true;
}

isPalindrome('dad')
isPalindrome('tomato')


//or
function checkPalindrome(str){
  return str==str.split('').reverse().join('');
}
