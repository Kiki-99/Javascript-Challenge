// from data.js
var tableData = data;
console.log(tableData);
var tbody = d3.select("tbody");

function renderTable(sourceData) {
    sourceData.forEach(data => {
        var row = tbody.append("tr");
        Object.values(data).forEach(value =>{
    var cell = row.append("td");
    cell.text(value);
    });
    });
}



function handlefilter() {
    d3.event.preventDefult();

    
}
// YOUR CODE HERE!
