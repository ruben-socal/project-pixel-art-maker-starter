// Select color input
function selectColor() {
	// event listener when color is selected from  color selction box
	$("#colorPicker").on('input', function() {
		self.boxColor = $(this).val();
	});
}


// create color change click event for each gird box
function addBoxEvents() {
	// Attach a directly bound event handler
	$( "table td" ).on( "click", function( event ) {
	    event.preventDefault();
	    $( this ).css('background-color', self.boxColor);
	});
	// default input color black;
	self.boxColor = '#000000';
}

// Select size input
function selectSize() {
	$('#sizePicker').submit(function(event) {
		 event.preventDefault();
	    // get all the inputs into an array.
	    let $inputs = $('#sizePicker :input');

	    let values = {};
	    $inputs.each(function() {
	        values[this.name] = $(this).val();
	    });

	    makeGrid(values.height, values.width);

	});
}

// Get form inputs for grid rows and cols
function makeGrid(irows, icols) {

	// Found help for grid at stock overflow link: https://stackoverflow.com/questions/34249746/creating-table-or-multi-dimensional-grid-using-javascript
	// table <table>, table row - <tr>, table header- <th> 'optional', table data - <td>
	let self = this;
	const rows=irows, cols=icols;
	let html='', boxColor='#000000';
	for(let i =0; i < rows; i++) {
	    html += '<tr>';
	    for(let h=0; h< cols; h++) {
	       html += '<td></td>';
	    }
	    html += '</tr>';
	}
	$('#pixel_canvas').empty();
	$('#pixel_canvas').append(html);
	$('table, tr, td').css({ "border": "1px solid black", "border-collapse": "collapse" });
	// default input value color black;
	$('#colorPicker').val('#000000');
	$(selectColor);
	$(addBoxEvents);

}

// When size is submitted by the user, selectSize() gets size and calls makeGrid()
$(document).ready(function(){

	$(selectSize);

});
