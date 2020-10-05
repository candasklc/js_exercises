let currentAge = prompt("Please enter your age.");

let retirementAge = prompt("Please enter the age at which you want to retire.");

let remainingYears = retirementAge - currentAge;

let currentYear = new Date().getFullYear();

if((currentAge<=0)||(retirementAge<currentAge)){
    document.getElementById("demo").innerHTML = "So funny.";
}else{
    document.getElementById("demo").innerHTML = "You have " + remainingYears + " years left to retire.\nIt is "+ currentYear +", so you will retire in " + (currentYear + remainingYears);
}