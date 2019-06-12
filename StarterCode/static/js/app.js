// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function createTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        var row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

function handleClick() {
    // Prevent form from refreshing page
    d3.event.preventDefault();
    // Collect date/time from filter
    var date = d3.select("#datetime").property("value");
    var filteredData = tableData;
    // confirm date exists and then filter
    //console.log(date)

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);

    }
    createTable(filteredData);


}

// Rebuild table uisng filtered data
//createTable(filteredData);


// Event listner
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table upon page reload
createTable(tableData);