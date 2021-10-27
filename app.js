// 1.
const currentDay = [
    'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Satuday',
]
switch(currentDay) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday')  ;
        break;
    case 2:
        console.log('Tuesday') ;
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thusday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;                 
}
console.log(currentDay[0]);
console.log(currentDay[1]);
console.log(currentDay[2]);
console.log(currentDay[3]);
console.log(currentDay[4]);
console.log(currentDay[5]);
console.log(currentDay[6]);

// 2.
for (i=0; i<100; i++){
    console.log(i);
}
 
// 3.
i=0;
while (i<50) {
    console.log(i);
    i++;
}

// 4.
do {
     i++;
     console.log(i);
} while (i<150);

// 5. 
numbers=[];
for( i=0; i<10000; i++){
    console.log(i * i);   
}
numbers.push(i * i);

// 6. მეორე უდიდესი რიცხვის პოვნის ეს მეთოდიც ვნახე
// let numArray=[ 10, 9, 9, 8, 8, 11, 8, 0 ,9, 1]
// numArray.sort (function(a, b) {
//     return b - a;
// });
// console.log(numArray[1]);

let largest=0;
let secondLargest=0;
let numArray=[ 10, 9, 9, 8, 8, 11, 8, 0 ,9, 1]
for(let i=0; i< numArray.length; i++){
    if (numArray[i]>largest ){
        secondLargest=largest;
        largest=numArray[i];
    } else if ( numArray[i]>secondLargest){
        secondLargest=numArray[i];
    }  
}
console.log(secondLargest);

let largestNum=0;
let secondLargestNum=0;
let numberArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
for(let i=0; i< numberArray.length; i++){
    if (numberArray[i]>largestNum ){
        secondLargestNum=largestNum;
        largestNum=numberArray[i];
    } else if ( numberArray[i]>secondLargestNum){
        secondLargestNUm=numberArray[i];
    }
    
}
console.log(secondLargestNum);

let largestNumber=0;
let secondLargestNumber=0;
let numArr=[2, 3, 6, 6, 5]
for(let i=0; i< numArr.length; i++){
    if (numArr[i]>largestNumber ){
        secondLargestNumber=largestNumber;
        largestNumber=numArr[i];
    } else if ( numArr[i]>secondLargestNumber){
        secondLargestNumber=numArr[i];
    }  
}
console.log(secondLargestNumber);

