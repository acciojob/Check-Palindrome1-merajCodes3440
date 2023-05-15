// complete the given function

function palindrome(str){
   let isPlindrom = true;
    let i=0 ; let j=str.length-1;
	while(i<=j){
		if(str[i]!==str[j]){
           isPlindrom=false;
		     return;
		}
		i++;
		j--;
   }
	console.log(isPlindrom? "true":"false");
}
module.exports = palindrome
