const form = document.querySelector("#form")
const input = form.querySelector("#binary-number");
const output = form.querySelector(".output");


const GetValues = () => {
 var binaryNumber = input.value;
 var result = output.innerText;
 BinaryToDecimal(binaryNumber);
};

const BinaryToDecimal = (binaryNumber) => {
    result = null; 
    if(Array.from(binaryNumber).every((x) => {if(x == 0 || x == 1){return true}})){
        let numberConverted = 0;
        let index = 0;
        for(const digit of binaryNumber.split('').reverse().join('')){
            numberConverted += 2^index * Number(digit);
            index++;
        }
        result = numberConverted;
    }else{
        alert("You must digit a binary number, just 1's and 0's");
    }


};








