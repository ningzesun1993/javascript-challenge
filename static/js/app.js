// from data.js
var tableData = data;
// YOUR CODE HERE!
console.log("Hello world")
let table_data = data;
let tbody = d3.select("tbody");
let date_input = 0;
const date_click = d3.select("#datetime");
const date_all = data.map(data => data.datetime)
console.log(date_all.includes("1/1/2010"))
function maketable(data){
    data.forEach((UFO) => {
        const row = tbody.append("tr");
        for (key in UFO){
            const cell = tbody.append("td");
            cell.text(UFO[key]);
        }
    });
}
maketable(data)
date_click.on("change", function() {
    date_input = d3.event.target.value;
    var table = document.getElementById ("ufo-table");
    table.insertAdjacentText.reload();
    if (date_all.includes(date_input)){
        const new_date = data.map(function(datas){
            let datetime_inside = datas.datetime;
            if (datetime_inside === date_input) {
                return datas
            }
        })
        maketable(new_date)
    }
    else{
        maketable(data)
    }
});
console.log(date_input)





