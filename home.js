function multi() {
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);

    if (isNaN(x) || isNaN(y) || x < 2 || x > 10 || y < 2 || y > 10) {
        alert("Please enter numbers between 2 and 10");
        document.getElementById("output").innerHTML = ""; // Clear table if invalid
        return;
    }

    var output = "<table>";

    for (var i = x; i <= y; i++) {
        output += "<tr>";
        for (var j = x; j <= y; j++) {
            output += "<td>" + (i * j) + "</td>";
        }
        output += "</tr>";
    }

    output += "</table>";
    document.getElementById("output").innerHTML = output;
}