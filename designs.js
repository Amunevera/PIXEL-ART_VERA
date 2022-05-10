var height, width;

let submit = document.getElementById('#submit');
$(document).ready(function() {
sizePicker =document.addEventListener('submit', function event() {
 //    
    height=$('#inputHeight').val();
    width=$('#inputWidth').val();
    MakeGrid (height, width);

    sizePicker = function(event) {
        event.preventDefault();
        clearGrid();
        makeGrid();
    };
    
}
)}
)

//call function to create grid
function MakeGrid(height, width) {
    for(var i=1; i<=height; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for(var k=1; k<=width; k++) {
            $('#table' + i).append('<td></td>');
        }
    }
};

//function call to clear existing grid
function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
};

 //to add color to cell
 let color = document.getElementById('#colorPicker');
pixelCanvas= document.addEventListener('click', function addColor() {
    color= $('#colorPicker').val();
        if($(this).attr("style")) {
            $(this).removeAttr("style")
        } else {
            $(this).attr("style", 'background-color:' + color);
        }
});
