var cost;
var costNum;
var totalCost;
var tipTemp;
var custTip;
var custTipPerc;
var tipPerc;

function calcTip() {    
    cost = document.getElementById("mealCost").value;
    costNum = parseFloat(cost);
    if (document.querySelector('input[id="percCust"]:checked')) { // Checks for custom tip  first
        if (document.getElementById("custTip")=="") { // If custom tip field is blank, displays an alert
            alert('Please enter a Custom Tip number.');
        } 
        else {
            if (document.querySelector('input[id="custAmt"]:checked')) { 
                tipTemp = document.getElementById("custTip").value; // If custom tip amount, converts the input value to a variable
                custTip = parseFloat(tipTemp); // Converts variable to a number
                totalCost = costNum + custTip; // Total cost is calculated
            }
            else if (document.querySelector('input[id="custPerc"]:checked')) {
                tipTemp = document.getElementById("custTip").value/100; // If custom tip percentage, converts the input value to a percentage variable
                custTipPerc = parseFloat(tipTemp); // Converts percentage variable to a number
                custTip = custTipPerc * costNum; // The tip is calculated by multiplying the cost and the tip percentage
                totalCost = costNum + custTip; // Total cost is calculated
            }
            else { // If the custom tip option is selected, but neither the amount or percentage option is selected, this alert will notify the user to select one
                alert('If selecting the custom tip option, please select either Amount or Percentage.')
            }
        }
    }
    else if (document.querySelector('input[name="perc"]:checked')) { // If the custom tip option isn't selected, this will check for the value of the percentage option chosen
        tipPerc = document.querySelector('input[name="perc"]:checked').value;
        totalCost = tipPerc * costNum; // Total cost is calculated
    }
    else { // If neither the custom tip or a tip percentage is selected, this will prompt the user to select one of the options
        alert('Please select either a tip percentage, or a custom tip amount.');
    }
    document.getElementById("total").innerHTML = "$" + totalCost.toFixed(2); // converts to 2 decimal places    
}

function clearFields() { // Function clears the tip form
    document.getElementById("tipForm").reset(); // Resets form
    document.getElementById("total").innerHTML = ""; // Clears "total" area
}