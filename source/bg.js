'use strict';

// run this block of code whent he page has loaded
/*
$(document).ready( function () {
    // Create a canvas that extends the entire screen
    // and it will draw right over the other html elements, like buttons, etc
    var canvas = document.createElement("canvas");
    canvas.setAttribute("width", window.innerWidth);
    canvas.setAttribute("height", window.innerHeight);
    canvas.setAttribute("style", "position: absolute; x:0; y:0;");
    document.body.appendChild(canvas);

    var ctx = canvas.getContext("2d");
    //ctx.fillRect(10,10,1,1);

    //create the image to be drawn
    var newCheckpoint = new Image();
    newCheckpoint.className = "checkpoint";
    newCheckpoint.src = chrome.extension.getURL("icon1.png");

    ctx.drawImage(newCheckpoint, 100, 100, 19, 19);
/*
    img = $("<img />")
    img.attr({ src: chrome.extension.getURL("icon1.png"), class: 'checkpoint'});
    img.css({top: checkpoints[i].y, left: checkpionts[i].x})
    img.html(point);
    $("#canvas").append(img);
    */
//}

/*
window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 50, 10, 150, 180);
}
*/

// OLD CODE USED TO GET MOUSE POSITION ON RIGHT CLICK

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

// END OF RIGHT CLICK CODE



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

