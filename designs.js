// Select size input
var height, width, color;

const submit = document.getElementById('#sizePicker')

// add eventlistener to the submit button
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    Height = document.getElementById('#inputHeight').value;
    Width = document.getElementById('#inputWidth').value;
    //parameters for creating grids
    makeGrid (Height, Width);

// function call to makeGrids
function makeGrid(sizeHeight, sizeWidth) {
    tablep= document.getElementById('#pixelCanvas');
 // for loop for making grids       
 for (var i = 1; i<= sizeHeight; i++) {
     $ ('#pixelCanvas').append('<tr id=table' + i + '></tr>');
     for (var k = 1; k<= sizeWidth; k++) {
         $('table' +i).append('<td></td>');
     }
    }
        };
//clear table of availabe data
while (tablep.hasChildNodes()) {
    tablep.removeChild(tablep.firstChild)
};
//event listener to input colors to grid
Color = document.getElementById('#colorPicker').val();
td.addEventListener("click") (function addcolor() {
  if ($(colorfill).attr('style')) {
      $(colorfill).removeAttr('style')
    }
      else{
          $(colorfill).attr('style','background-color:' + Color);
      }
});
});
