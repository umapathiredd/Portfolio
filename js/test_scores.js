var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};

function displayResults() {
    // Calculate the average and highest score
    var total = 0;
    var highest = scores[0];
    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
        if (scores[i] > highest) {
            highest = scores[i];
			highestName = names[i];
        }
    }

    var average = total / scores.length;

    // Display the results in the "results" div
    var resultsDiv = $("results");
    resultsDiv.innerHTML = "<h2>Results</h2>";
    resultsDiv.innerHTML += "<p>Average Score: " + average + "</p>";
    resultsDiv.innerHTML += "<p style ='margin-top: 10px'>Highest Score: " + highestName + " with a score of "+ highest + " </p>";
}

function displayScores() {
    // Display names and scores in the "scores_table" table
    var table = $("scores_table");
    table.innerHTML = "<h2>Scores</h2>"; // Adding the h2 heading
    table.innerHTML += "<table><tr><th style='text-align: left;'>Name</th><th style='text-align: left;'>Score</th></tr>"; // Aligning table headings to the left

    for (var i = 0; i < names.length; i++) {
        table.innerHTML += "<tr><td style='text-align: left;'>" + names[i] + "</td><td style='text-align: left;'>" + scores[i] + "</td></tr>"; // Aligning text to the left
    }

    table.innerHTML += "</table>";
}




function addScore() {
    // Get the name and score from the input fields
    var nameInput = $("name");
    var scoreInput = $("score");
    var name = nameInput.value;
    var score = parseInt(scoreInput.value);

    // Check if both name and score are provided
    if (name.trim() === "" || isNaN(score)) {
        if (name.trim() === "") {
            // Display the error message next to the name input
            $("name").insertAdjacentHTML('afterend', '<span class="error"> Name cannot be empty</span>');
        }
        if (isNaN(score)) {
            alert("Please enter a valid score.");
        }
        return; // Exit the function without adding data
    } else {
        // Clear the error message if both name and score are provided
        var errorSpan = $("name").nextElementSibling;
        if (errorSpan && errorSpan.classList.contains("error")) {
            errorSpan.remove();
        }
    }

    // Add the name and score to the arrays
    names.push(name);
    scores.push(score);

    // Clear the input fields
    nameInput.value = "";
    scoreInput.value = "";
}
