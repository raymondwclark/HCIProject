'use strict';
//global var for store cursor position
var gPos = null;



//receiving message
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
if (msg.from == 'mouseup') {
    //storing position
    gPos = msg.point;
}
})

// onclick callback function.
function OnClick(info, tab, text, mousePos) {
    if (info.menuItemId == idConsole) {
        if (gPos != null) {

            alert('Position X: ' + gPos.clientX + '\nPosition Y: ' + gPos.clientY );
            //console.log('Position X: ' + gPos.clientX + '\nPosition Y: ' + gPos.clientY );
        }
    }
}

//on click sample callback with more params
var idConsole = chrome.contextMenus.create({
    title: 'Cursor Position',
    // enable this line to have the context menu show up only on selected text
    //contexts: ["selection"],
    onclick: function(info, tab) {
        OnClick(info, tab, '%s', gPos);
        }
})
/*
$(document).click( function(event) {
    //var image = document.createElement("img");
    //image.src = chrome.extension.getURL("logo.jpg");
    $event.target.append('<img  id="theImg" src="logo.png"/>');
    //$(document).show().css( {position:"absolute", top:event.pageY, left: event.pageX});
});
*/

// GET this section to work right
/*
var image = document.createElement("img");
image.src = chrome.extension.getURL("logo.jpg");
image.insertAfter(this);
*/
//var viewport = document.getElementById('viewport');

/*
$(document).mousedown(function(event) {
    switch (event.which) {
        case 1:
            alert('Left Mouse button pressed.');
            break;
        case 2:
            alert('Middle Mouse button pressed.');
            break;
        case 3:
            alert('Right Mouse button pressed.');
            break;
        default:
            alert('You have a strange Mouse!');
    }
});
*/

