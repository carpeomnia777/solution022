//write a function that determines if a number is a "narcissistic number" meaning that the length in which the sum of its digits to the power of length is equal to the original number.
// ex. 1^3 + 5^3 + 3^3 = 153


function isNarcissistic(n) {
    let compNum = 0; //initializes the future container for our sum holder
    let arrNum = Array.from(String(n), Number); // converts number to string then breaks the number up into an array based on the digits, then converts back to number
    let lSum = arrNum.length; // set a variable that is the length of the array aka the amount of digits
    
    for (let i = 0; i < lSum; i++) { //for loop to iterate thru the array for the purpose of adding
        let powNum = Math.pow(arrNum[i], lSum); // set variable that is equal to the exponent of array contents and array length
        
        compNum += powNum
        
    }

    if( compNum == n ){ //conditional that compares and give a true falsey based on if it equals the intial number
        return true;
    }
    else{
        return false;
    }
}

//first, figure out he number of digits in the number.
         //set number to string then enter into an array that gives back .length
         //set loop that grabs each number and adds the power of whatever the length is and converts back to a number.
         //set conditional that checks to see if the new number is equal to n (the original number) if no return false.