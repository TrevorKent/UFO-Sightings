// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {
    // remove existing data
    tbody.html("");
    // loop through each object and append value in the row
    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        // loop through each value in row and to td
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("tr");
            cell.text(val);
        });
    });
}

function handleClick() {
    // Prevent form from refreshing page
    d3.event.preventDefault();
    // Collect date/time from filter
    var date = d3.select("#datetime").property("value");
    let filterData = tableData;
    // confirm date exists and then filter
    if (date) {
        filterData = filterData.filter(row => row.datetime === date);
    };
    buildTable(filterData);
};

// Event listner
d3.selectALL("#filter-btn").on("click", handleClick);

// Build table upon page reload
buildTable(tableData);