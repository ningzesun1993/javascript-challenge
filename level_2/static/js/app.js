// from data.js
var tableData = data;
// YOUR CODE HERE!
let table_data = data;


const date_all = data.map(data => data.datetime)
const city_all = data.map(data => data.city)
const state_all = data.map(data => data.state)
const country_all = data.map(data => data.country)
const shape_all = data.map(data => data.shape)
const filter_list = [date_all, city_all, state_all, country_all, shape_all]
const filter_all = ['date/time', 'city', 'state', 'country', 'shape'];
const place_holder = ['input a date', 'input a city', 'input a state', 'input country', 'input a shape']
let total_info = {
                  select_1: {filter: -1, input: 0}, 
                  select_2: {filter: -1, input: 0},
                  select_3: {filter: -1, input: 0},
                  select_4: {filter: -1, input: 0},
                  select_5: {filter: -1, input: 0}
                }
function maketable(info){
    let table = document.getElementById('ufo-table');
    let rowtable = table.getElementsByTagName('tr');
    let rowCount = rowtable.length; 
    for (let x = rowCount - 1; x > 0; x--){
        table.deleteRow(x);
    }
    let new_data = table_data;
    for (let key in info){
        let index = info[key];
        console.log(key)
        index = index.filter;
        let input = info[key];
        input = input.input
        if (input.includes(filter_list[index])){
            new_data = new_data.map(function(datas){
                let datetime_inside = datas.filter_list[index];
                if (datetime_inside === input) {
                    return datas;
                }
            })
        }
    }
    new_data.forEach((UFO) => {
        var tableRef = table.getElementsByTagName('tbody')[0];
        let newRow = tableRef.insertRow(tableRef.rows.length);
        let content = ""
        for (key in UFO){
            content = content + '<td>' + UFO[key] + '</td>'
        }
        newRow.innerHTML = content
    })
}

maketable(total_info)



select_all.forEach((ele) => {
    option_added(ele)
})

function option_added(val){
    let i = -1;
    option_all.forEach((ele) => {
        let select1 = document.getElementById(val);
        let option = document.createElement('option');
        option.text = ele;
        option.value = i;
        i = i + 1;
        select1.add(option);
    })
}

function checkvalue1()
{
    const select_value = document.getElementById('select1').value;
    document.getElementById('input1').placeholder = place_holder[select_value];
    total_info.select_1.filter = select_value
}

function checkvalue2()
{
    const select_value = document.getElementById('select2').value;
    document.getElementById('input2').placeholder = place_holder[select_value];
    total_info.select_2.filter = select_value
}

function checkvalue3()
{
    const select_value = document.getElementById('select3').value;
    document.getElementById('input3').placeholder = place_holder[select_value];
    total_info.select_3.filter = select_value
}

function checkvalue4()
{
    const select_value = document.getElementById('select4').value;
    document.getElementById('input4').placeholder = place_holder[select_value];
    total_info.select_4.filter = select_value
}

function checkvalue5()
{
    const select_value = document.getElementById('select5').value;
    document.getElementById('input5').placeholder = place_holder[select_value];
    total_info.select_5.filter = select_value
}

const input_click_1 = d3.select("#input1");
const input_click_2 = d3.select("#input2");
const input_click_3 = d3.select("#input3");
const input_click_4 = d3.select("#input4");
const input_click_5 = d3.select("#input5");


input_click_1.on("change", function() {
    // get the input value
    total_info.select_1.input = d3.event.target.value;

});



