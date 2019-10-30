// from data.js
var tableData = data;
// YOUR CODE HERE!
// initialize the data from data.js
let table_data = data;

// the function to make the whole table
function maketable(data){
    // find the table
    let table = document.getElementById('ufo-table');
    // find the tag: tr
    let rowtable = table.getElementsByTagName('tr');
    // get the length of the row
    let rowCount = rowtable.length; 
    // use the delete method to delete all existed rows as a refreshment
    for (let x = rowCount - 1; x > 0; x--){
        table.deleteRow(x);
    }
    // loop the data to make the new table
    data.forEach((UFO) => {
        var tableRef = table.getElementsByTagName('tbody')[0];
        let newRow = tableRef.insertRow(tableRef.rows.length);
        let content = ""
        for (key in UFO){
            content = content + '<td>' + UFO[key] + '</td>'
        }
        newRow.innerHTML = content
    })
}
// initialize the table
maketable(data)
// initialize the date_input, if there is no input just print out everything.
let date_input = 0;
// select the input
const date_click = d3.select("#datetime");
// make a date list to check whether the date of input is legal
const date_all = data.map(data => data.datetime)
// main input part
date_click.on("change", function() {
    // get the input value
    date_input = d3.event.target.value;
    // check if the input value is legal
    if (date_all.includes(date_input)){
        // get all the data from input date
        const new_date = data.map(function(datas){
            let datetime_inside = datas.datetime;
            if (datetime_inside === date_input) {
                return datas;
            }
        })
        maketable(new_date);
    }
    // if not, print everything
    else{
        maketable(data);
    }
});





