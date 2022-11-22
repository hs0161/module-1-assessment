///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/
let allAcres = fujiAcres.concat(galaAcres, pinkAcres);
let totalAcres = 0;

for (let i = 0; i < allAcres.length; i++){
    totalAcres += allAcres[i]
} console.log(totalAcres);

/* I created the first variable, allAcres to create a new array to list out all 3 arrays together using concat(). Then, I created another variable, totalAcres, so that I can loop allAcres and get the sum of the elements in allAcres together to get the number 63.



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres = totalAcres / 7;
console.log(averageDailyAcres);

/* I created a variable averageDailyAcres by using the variable totalAcres and dividing it by 7 to get the average of number acres picked per day.



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0){
    acresLeft = acresLeft - averageDailyAcres;
    days++; 
} console.log(days);


// I created a while-loop to make it where as long as acresLeft is greater than zero then it will run the loop. As it's iterating through, I subtracted the averageDailyAcres from the acresLeft and then added 1 to the days by using the ++ at the end. I just realized that I literally repeated the directions, not sure how else to really explain why I wrote what I wrote.



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/


let fujiTons = []
for (let i = 0; i < fujiAcres.length; i++){
    fujiTons[i] = fujiAcres[i] * 6.5;
} console.log(fujiTons);


let galaTons = []
for (let i = 0; i < galaAcres.length; i++){
    galaTons[i] = galaAcres[i] * 6.5;
} console.log(galaTons);


let pinkTons = []
for (let i = 0; i < pinkAcres.length; i++){
    pinkTons[i] = pinkAcres[i] * 6.5;
} console.log(pinkTons);

//Although I didn't use the hint, I was able to get the number (checked by doing the math myself). I created an empty variable for the tons. Then with a for-loop, after each iteration, I multiplied 6.5 to each acre to get the total tons from each variety of apples. 

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let fujiPounds = 0;
let sumFujiPounds = 0;
for (let i = 0; i < fujiTons.length; i++){
    sumFujiPounds += fujiTons[i];
    fujiPounds = sumFujiPounds * 2000;
} console.log(fujiPounds);

let galaPounds = 0;
let sumGalaPounds = 0;
for (let i = 0; i < galaTons.length; i++){
    sumGalaPounds += galaTons[i];
    galaPounds = sumGalaPounds * 2000;
} console.log(galaPounds);


let pinkPounds = 0;
let sumPinkPounds = 0;
for (let i = 0; i < pinkTons.length; i++){
    sumPinkPounds += pinkTons[i];
    pinkPounds = sumPinkPounds * 2000;
} console.log(pinkPounds);

// Here, I created a new variable sumFijiPounds to help me create the for-loop to iterate through and multiple 2000 to the total pounds. 


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/


let fujiProfit = fujiPounds * fujiPrice;
console.log(fujiProfit);

let galaProfit = galaPounds * galaPrice;
console.log(galaProfit);

let pinkProfit = pinkPounds * pinkPrice;
console.log(pinkProfit);

//For number 6, I multiplied the price by the pounds for each variety to come up with the profit of each variety of apples.


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit);

// Here, I created the variable totalProfit and had it to equal the sum of the profits from all apples.