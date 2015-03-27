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
