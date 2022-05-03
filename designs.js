// Select size input
// to enable submit button to respond to makerid call
const sizePicker = document.getElementById('submit')
const form = document.createElement('form')
let sizeHeight = document.getElementById('inputHeight').value;
    let sizeWidth = document.getElementById('inputWidth').value;
    let rowSize = document.getElementById('rowsize').value;
    let columnSize = document.getElementById('columnsize').value;
// to allow for the submit button to collect the values (grid sizes)and also activate the make grid function
submit.addEventListener('click', function() {
    
    //makegrid function call: to respond by creating a grid
});

//make grid function with parameters of height, width, rowsize and columnsize
function makeGrid(sizeHeight, sizeWidth, rowSize, columnSize) {

    let tablep = document.getElementById('pixelCanvas');
    // to clear the table of any available row and column
    while (tablep.hasChildNodes()) {
        tablep.removeChild(tablep.firstChild)
    }

    //for loop to make grid by function parameters for table rows and column
    for (let i = 0; i <= rowSize ; i++) {
        let tableRow = document.createElement('tr');
    for (let k = 0; k <= columnSize ; k++) {

            let tableData = document.createElement('td');
            //css style to set width of cell
            tableData.style.width = sizeWidth + "px";
            tableData.style.height = sizeHeight + "px";
            tableRow.appendChild(tableData);
            // Event listener to input color to the cell
            tableData.addEventListener("click", function() {
                let sizeColor = document.getElementById('colorPicker').value;
                tableData.style.backgroundColor = sizeColor;
           
            });

        }
        //appending rows and cell to the table
        tablep.appendChild(tableRow);
        tablep.appendChild(tablecolumn);

    }