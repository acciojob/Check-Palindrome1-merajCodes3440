// complete the given function

function palindrome(str){
   let isPlindrome = true;
    let i=0 ; let j=str.length-1;
	while(i<=j){
		if(str[i].toLowerCase().trim()!==str[j].toLowerCase().trim()){
           isPlindrome =false;
		     return;
		}
		i++;
		j--;
   }
	console.log(isPlindrome ? true: false);
}
module.exports = palindrome
