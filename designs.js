//parameters to use
//using the getElement to bring out the functionality of the parameter

let sizePicker = document.getElementById('sizePicker');
let pixelCanvas = document.getElementById("pixelCanvas");
let submit = document.getElementById('submit');

//declaring the global variables
function createGrid(event) {
	//call to prevent Default from running while running code
	event.preventDefault();
	clearGrid();
	let height =  document.getElementById('inputHeight');
	let width = document.getElementById('inputWidth');
	makeGrid(height, width);
}

//function command to makeGrid
/**
 * @desc create a grid of squares 
 * @param int $width - number of squares representing the width of the grid
 * @param int $height - number of squares representing the height of the grid
 */
function makeGrid(height, width) {
	//for loops used to createGrid
	for (let j = 1; j <= height.value; j++) {
		const tr = document.createElement('tr');
		tr.setAttribute('id', 'table' + j);
		pixelCanvas.appendChild(tr);
		for (let k = 1; k <= width.value; k++) {
			const td = document.createElement('td');
			document.getElementById('table' + j).appendChild(td);

		}
	}

}
//add event listener to listen for the submit call
submit.addEventListener('click', createGrid);

//function call to clear existing grid
function clearGrid() {
	while (pixelCanvas.firstChild) {
		pixelCanvas.removeChild(pixelCanvas.firstChild);
	}
}

//to add color to the Grid
//add eventListener to the pixelCanvas to listen for the addColor command
pixelCanvas.addEventListener("click", function addColor(evt) {
	console.log(evt.target);
	let sizeColor = document.getElementById('colorPicker').value;
	console.log(sizeColor);
	if (evt.target.nodeName === "TD") {
		evt.target.style.backgroundColor = sizeColor;
	}

});
