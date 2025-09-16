//Even number Finder
//start at 1 and check each digit up to 50
//print out all even numbers
let num =1;
while (num<=50){
    if(num%2===0){
        console.log(num);
    };
    num++;
}

//PIN Validator
//Start with prompt to enter correct PIN
//continue loop until correct PIN is entered
const pin=1234;
let input;
do{
    input= prompt("Enter PIN:");
if(input!==pin);{
    alert("Incorrect, Please Try Again")
};
}while(input!==pin);
alert("Correct");

//Multiplication Table with Skips
//Ask for user input from 1-10
//Print out result, skipping multiples of 5
let number= Number(prompt("Enter a number:"));
for(let i=1;i<=10; i++){
    let product= number*i;
    if(product%5===0){
        continue;
    };
    console.log('${number} x ${i} = ${product}');
};

//Positive-Negative Number
//Ask user for input
//Compare and print result of positive, negative or 0
let userInput= Number(prompt("Enter a positive, negative or zero number:"));
if(userInput<0){
    console.log('${userInput) is positive.');
}else if(userInput===0){
    console.log('${userInput is zero.');
}else{
    console.log('${userInput} is negative.');
};

//Month Finder
//Take user input number 1-12
//Output the Name corresponding with the numbered month
let monthInput= Number(prompt("Enter a number from 1 to 12: "));
switch (monthInput){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Input.");
        break;
}