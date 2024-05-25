// Lab 13 - FizzBuzz Experiment with Loops
// Author: Segolen Plihon
// Date: 05/24/24

// Function to perform the FizzBuzz logic
function fizzBuzzBoom(maxNums, factorObj) {
    let leftColumnEl = $("#left-column");
    let rightColumnEl = $("#right-column");
    leftColumnEl.html(""); // Clear previous output
    rightColumnEl.html(""); // Clear previous output

    for (let num = 1; num <= maxNums; num++) {
        let outputStr = "";
        for (let factor in factorObj) {
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }

        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }

        // Create a new div element for each output item
        let itemEl = $("<div class='output-item'></div>");
        itemEl.html(num.toString() + outputStr);

        // Split numbers between two columns
        if (num <= maxNums / 2) {
            leftColumnEl.append(itemEl);
        } else {
            rightColumnEl.append(itemEl);
        }
    }
}

function reportError(str) {
    $("#output").html("<div class='error'>" + str + "</div>");
}

document.getElementById("submit").addEventListener("click", function() {
    let max = document.getElementById("max").value;
    if (!max) {
        reportError("You must provide a maximum");
        return;
    }

    let factors = {};
    for (let i = 0; i < 4; i++) {
        let num = document.getElementById("num" + i).value;
        let text = document.getElementById("text" + i).value;
        if (num && text) {
            factors[num] = text;
        }
    }

    fizzBuzzBoom(max, factors);
});
