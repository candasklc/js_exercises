var currentAge = prompt("Please enter your age.");

var retirementAge = prompt("Please enter the age at which you want to retire.");

var remainingYears = retirementAge - currentAge;

var currentYear = new Date().getFullYear();

if((currentAge<=0)||(retirementAge<currentAge)){
    alert("So funny.");
}else{

    alert("You have " + remainingYears + " years left to retire.\nIt is "+ currentYear +", so you will retire in " + (currentYear + remainingYears));
    
}