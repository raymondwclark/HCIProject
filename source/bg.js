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