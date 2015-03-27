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


$(document).click(function(event) { 
    // Check for left button
    if (event.button == 0) {
        //alert("clicked");
        // THIS WORKS (adds the test text to the clicked object)
        $(event.target).append('<p>Test</p>');
        //$(event.target).append("<img src= logo.png");
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
