var index = 0;

document.onkeypress= function(event) {
    
       if(event.keyCode == 99) {
       	//alert(event.keyCode);
       	var points = document.getElementsByName("checkpoint");

       		points[index].scrollIntoView();

       		index++;

       		if(index > points.length - 1) {
       			index = 0;
       		}

       		console.log(index);

       }

};

var selection;

  if(window.getSelection) 
    selection = window.getSelection();
  else if(typeof document.selection!="undefined")
    selection = document.selection;

  var range = selection.getRangeAt(0);

  if(range && !selection.isCollapsed)
  {
    if(selection.anchorNode.parentNode == selection.focusNode.parentNode)
    {
      var span = document.createElement('span');
      span.className = 'Point';
      span.style.backgroundColor = "yellow";
      span.setAttribute("name", "checkpoint");
      range.surroundContents(span);
    }
  }