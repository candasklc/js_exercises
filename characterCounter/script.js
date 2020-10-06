var charactersToCount = prompt("Enter some text to make characters counted in it.")

document.getElementById("demo").innerHTML = "'" + charactersToCount + "'";
document.getElementById("demo2").innerHTML = "Contains " + charactersToCount.length + " characters.";
