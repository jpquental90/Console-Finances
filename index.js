var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

//1. The total number of months included in the dataset.

let totalMonths = finances.length;


//2. The net total amount of Profit/Losses over the entire period.

let totalProfit = 0;

for (let i = 0; i < finances.length; i++) {
    totalProfit += finances[i][1];
}
//The formula above iterates through all the second elements of each sub-array and adds them together


//3. The average of the changes in Profit/Losses over the entire period.

let totalChange = 0;
let change = 0;

for (let i = 0; i < totalMonths - 1; i++) { //We have to do '-1' to ensure that totalMonths[i + 1] is always a valid index within the bounds of the array
  let currentProfit = finances[i][1]; //This is each second element in the array
  let nextProfit = finances[i + 1][1]; //The second element of each next sub-array
  change = nextProfit - currentProfit; //The profit difference between each month
  totalChange += change; //The differences between each month added together
}

let averageChange = totalChange/(totalMonths - 1); //The average of the differences
averageChange = parseFloat(averageChange.toFixed(2)); //Reducing number to only include two decimal numbers


//4. The greatest increase in Profit/Losses (date and amount) over the entire period.

let maxIncrease = 0;
let maxIncreaseDate = '';

for (let i = 0; i < totalMonths - 1; i++) { //A similar type of loop can be used here; the first few steps are the same, but include an 'if' statement
  let currentProfit = finances[i][1];
  let nextProfit = finances[i + 1][1];
  change = nextProfit - currentProfit;

  if (change > maxIncrease) {
    maxIncrease = change; //All values are iterated and whenever a higher value appears it is assigned to the variable 'maxIncrease', until there is no other higher value remaining
    maxIncreaseDate = finances[i + 1][0]; //The date linked to the maximum increase in profit
  }
}


//5. The greatest decrease in Profit/Losses (date and amount) over the entire period.

let maxDecrease = 0;
let maxDecreaseDate = '';

for (let i = 0; i < totalMonths - 1; i++) {
  let currentProfit = finances[i][1];
  let nextProfit = finances[i + 1][1];
  change = nextProfit - currentProfit;

  if (change < maxDecrease) { //A similar logic to the formula above can be followed here, except we use a '<' sign instead
    maxDecrease = change;
    maxDecreaseDate = finances[i + 1][0];
  }
}


//6. Print the analysis to the console

console.log(
  'Financial Analysis' +
  '\n----------------' +
  '\nTotal Months: ' + totalMonths +
  '\nTotal: $' + totalProfit +
  '\nAverage Change: ' + averageChange +
  '\nGreatest Increase in Profits/Losses: ' + maxIncreaseDate + ' ($' + maxIncrease + ')' +
  '\nGreatest Decrease in Profits/Losses: ' + maxDecreaseDate + ' ($' + maxDecrease + ')');