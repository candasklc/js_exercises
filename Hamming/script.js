let firstInput = prompt("Write Something.");
let secondInput = prompt("Write Another.");


function compare(){
    if(firstInput===secondInput){
        document.getElementById("demo").innerHTML = "Inputs are same.";
    }else if(firstInput.length!=secondInput.length){
        document.getElementById("demo").innerHTML = "Length of inputs must be same.";
    }else{
        let distance = 0;

        for (let i = 0; i < firstInput.length; i++) {
            if (firstInput[i] !== secondInput[i]){
                distance++;
            };

        }
        document.getElementById("demo").innerHTML = distance;

    }
}
compare();