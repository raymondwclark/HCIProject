/*
// This function is called onload in the popup code
function getPageDetails(callback) { 
    // Inject the content script into the current page 
    chrome.tabs.executeScript(null, { file: 'content.js' }); 
    // Perform the callback when a message is received from the content script
    chrome.runtime.onMessage.addListener(function(message)  { 
        // Call the callback function
        callback(message); 
    }); 
};
*/

'use strict';
//when mouse up, send message to bg.js with this position
document.addEventListener('mouseup', function (mousePos) {
    if (mousePos.button == 2) {
        var p = {clientX: mousePos.pageX, clientY: mousePos.pageY};
        var msg = {text: 'example', point: p, from: 'mouseup'};
        chrome.runtime.sendMessage(msg, function(response) {});
    }
})

// check for key press, use status to combine with mouseclick
var savePressed = false;
var index = 0;

$(document).keydown(function(evt) {

    // check if the 'c' key is pressed (code 67)
    if(evt.which == 67)
    {
        savePressed = true;
    }

    // check if v is pressed
    else if(evt.which == 86)
    {
        var points = document.getElementsByClassName("checkpoint");

        //scroll to the icon
        points[index].scrollIntoView();

        index++;

        if(index > points.length - 1) {
            index = 0;
        }
    }

}).keyup(function(evt) {
    if(evt.which == 67)
    {
        savePressed = false;
    }

});

$(document).click(function(event) { 
    // Check for left button
    if (event.button == 0 && savePressed == true) {
        //alert("clicked");

        // THIS WORKS (adds the test text to the clicked object)
        //$(event.target).append('<p>Test</p>');

        var imgURL = chrome.extension.getURL("logo.png");
        $(event.target).prepend('<img class="checkpoint" src='+imgURL+' />');
        //var imgURL = chrome.extension.getURL("logo.jpg");
        //$(e.target).append('<img id="theImg" src="imgURL"/>'); 
    }
});




/*
var image = document.createElement("img");
image.src = chrome.extension.getURL("logo.jpg");

(image).rightClick( function(e) {
    var x = e.pageX;
    var y = e.pageY;
    ("<div class='pin' style='top: " + y + "px; left: " + x + "px';></div>").insertAfter(this); 

});
*/

/*

'use strict';

$(document).ready(function() {
    var createButton = function() {
        var styles = 'position: fixed; z-index: 9999; bottom: 20px; left: 20px;';
        $('body').append('<button id="markticle_button" style="' + styles + '">Mark me!</button>');
    };

    $(document).on('click', '#markticle_button', function() {
        var title = document.title;
        var url = window.location.href;
        chrome.extension.sendMessage({
            action : 'add',
            data: {
                title: title,
                url: url
            }
        });

        alert('Marked!');
    });

    createButton();
});
*/
