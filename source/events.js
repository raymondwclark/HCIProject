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

//'use strict';

//when mouse up, send message to bg.js with this position
document.addEventListener('mouseup', function (mousePos) {
    if (mousePos.button == 2) {
        var p = {clientX: mousePos.pageX, clientY: mousePos.pageY};
        var msg = {text: 'example', point: p, from: 'mouseup'};
        chrome.runtime.sendMessage(msg, function(response) {});
    }
});


/*
function getClosestElement(x, y) {
    var elements, el, offset, dist, i, minDist, closestEl;

    elements = $("body *");
    closestEl = elements.eq(i);
    offset = closestEl.offset();
    offset.left += el.outerWidth()/2; // center of object
    offset.top += el.outerHeight()/2; // middle of object
    minDist = Math.sqrt((offset.left - x)*(offset.left - x) + (offset.top - y)*(offset.top - y));

    for (var i=0; i < elements.length; i++) {
        el = elements.eq(i);
        offset = el.offset();
        offset.left += el.outerWidth()/2; // center of object
        offset.top += el.outerHeight()/2; // middle of object
        dist = Math.sqrt((offset.left - x)*(offset.left - x) + (offset.top - y)*(offset.top - y));
        if (dist < minDist) {
            minDist = dist;
            closestEl = el;
        }
    }

    return closestEl;
}
*/
/*
window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("scream");
   ctx.drawImage(img, 10, 10);
}
*/
/*
closestToOffset: function(offset) {
    var el = null, elOffset, x = offset.left, y = offset.top, distance, dx, dy, minDistance;
    this.each(function() {
        elOffset = $(this).offset();

        if (
        (x >= elOffset.left)  && (x <= elOffset.right) &&
        (y >= elOffset.top)   && (y <= elOffset.bottom)
        ) {
            el = $(this);
            return false;
        }

        var offsets = [[elOffset.left, elOffset.top], [elOffset.right, elOffset.top], [elOffset.left, elOffset.bottom], [elOffset.right, elOffset.bottom]];
        for (off in offsets) {
            dx = offsets[off][0] - x;
            dy = offsets[off][1] - y;
            distance = Math.sqrt((dx*dx) + (dy*dy));
            if (minDistance === undefined || distance < minDistance) {
                minDistance = distance;
                el = $(this);
            }
        }
    });
    return el;
}

$('div').closestToOffset({left: 20, top: 20});
*/

// run this block of code whent he page has loaded
$(document).ready( function () {

    //loop through contents of chrome.storage
/*
    for (var key in localStorage){
        console.log(key + ":\t" + localStorage[key]);
    }
*/
    var findNearest = function() {

    };

    var thisURL = window.location.href;

    chrome.storage.sync.get('checkpoints', function (result) {

        if(result.checkpoints == null)
        {
            /* error */

            return;
        }
        else
        {
            var checkpoints = result.checkpoints;
    
            for(i = 0; i < checkpoints.length; i++)
            {  
                // if the saved URL matches the current URL
                // add a checkpoint at the element closest to the stored x,y location
                if(checkpoints[i].pageURL == thisURL)
                {
                    var point = {x: checkpoints[i].x, y: checkpoints[i].y};

                    var $closestToPoint = $.nearest(point);

                    //var imgURL = chrome.extension.getURL("icon1.png");
                    var newCheckpoint = new Image();
                    newCheckpoint.className = "checkpoint";
                    newCheckpoint.src = chrome.extension.getURL("icon1.png");

                    //('<img class="checkpoint" src='+imgURL+' />');
                    // add the image to the first (closest point) in the found
                    // closest elements on the page

                    //var closestPoint = $closestToPoint[$closestToPoint.length-1];
                    //console.log($closestPoint);

                    // appendsthe point to teh last element in the closests objects array
                    // This seems to always be the one that was actually closest to the 
                    // original parent element of the checkpoint
                    $($closestToPoint[$closestToPoint.length-1]).prepend(newCheckpoint);

                    //console.log($closestToPoint);

                }
             
            }
  
            
            //console.log(result.checkpoints);
            //console.log('added new checkpoint at x= ' + left + ' y= ' + top );
            //console.log('page URL is ' + checkpoints[0].pageURL);
            //console.log('x for element 0 is' + checkpoints[0].x);
            
        }

   });     


//window.onload = function() {
    // Create a canvas that extends the entire screen
    // and it will draw right over the other html elements, like buttons, etc
/*
    var canvas = document.createElement("canvas");
    canvas.setAttribute("width", 19);
    canvas.setAttribute("height", 19);
    canvas.setAttribute("style", "position:absolute; top:30px; left:30px; z-index:3");
    document.body.appendChild(canvas);

    var ctx = canvas.getContext("2d");
    //ctx.fillRect(10,10,1,1);
    //ctx.fillRect(10,10,10,10);

    //create the image to be drawn
    var newCheckpoint = new Image();
    newCheckpoint.className = "checkpoint";
    newCheckpoint.src = chrome.extension.getURL("icon1.png");

    ctx.drawImage(newCheckpoint, 0, 0, 19, 19);
*/

/*
    var img = $("<img />")
    img.attr({ src: chrome.extension.getURL("icon1.png"), class: 'checkpoint'});
    img.css({top: 100, left: 100})
    //img.html(point);
    $("#canvas").append(img);
*/
    
});

/*
$("#Content").rightClick( function(e) { 
    var x = e.pageX; 
    var y = e.pageY;
    var imgURL = chrome.extension.getURL("icon1.png");
    $("<img class='checkpoint' style='top: " + y + "px; left: " + x  + "px;' src= '"+imgURL+"' ></ img>").insertAfter(this); 
});
*/

/*
// run this code once the page has loaded
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if(changeInfo.status == "complete")
    {
        chrome.storage.sync.get('checkpoints', function (result) {
            var thisURL = document.URL;
            for(i = 0; i < checkpoints.length; i++)
            {
                console.log(i);
                // place these points at this URL
                if(checkpoints[i].pageURL == thisURL)
                {
                    // make sure there isn't already a checkpoint at the x,y location
                    var elem = document.elementFromPoint(checkpoints[i].x, checkpoints[i].y); // x, y
                    if(!elem && elem.className != "ceckpoint")
                    {
                        img = $("<img />")
                        img.attr({ src: chrome.extension.getURL("icon1.png"), class: 'checkpoint'});
                        img.css({top: checkpoints[i].y, left: checkpionts[i].x})
                        img.html(point);
                        $("#canvas").append(img);
                    }
                    
                    
                }
            }
        });
    }
        

});
*/

// check for key press, use status to combine with mouseclick
var savePressed = false;
// used to track if delete checkpoint key is pressed
var delPressed = false;
var index = 0;

$(document).keydown(function(evt) {

    // check if the 'c' key is pressed (code 67)
    if(evt.which == 67)
    {
        savePressed = true;
    }

    //check if 'x' key is pressed
    else if(evt.which == 88)
    {
        delPressed = true;
    }

    // check if v is pressed
    else if(evt.which == 86)
    {
        // get the elements that are classed as checkpoints and make an array of them
        var points = document.getElementsByClassName("checkpoint");

        //var pointsForPage;

        //var pageURL = document.URL;
/*
        chrome.storage.sync.get(pageURL, function(points) {
            //console.log("The value returned was: " + val);
            pointsForPage = points;

        });
*/
        //scroll to the icon
        points[index].scrollIntoView();

        index++;

        if(index > points.length - 1) {
            index = 0;
        }
    }

    // if 'f' is pressed
    else if(evt.which == 70)
    {
        var points = document.getElementsByClassName("checkpoint");

        //scroll to the icon
        points[index].scrollIntoView();

        index--;

        if(index < 0) {
            index = points.length - 1;
        }
    }

    // if z is pressed
    else if(evt.which == 90)
    {
        // clears the chrome storage
        chrome.storage.sync.clear(function (){});

        // clears all the checkpoints on hte current page
        var list = document.getElementsByClassName("checkpoint");
        for(var i = list.length - 1; 0 <= i; i--)
        {
            if(list[i] && list[i].parentElement)
            {
                list[i].parentElement.removeChild(list[i]);
            }
               
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
    // the third condition makes sure that the clicked on element doesn't already have
    // a checkpoint as an attached element
    if (event.button == 0 && savePressed == true && !$(event.target).find('.checkpoint').length) {
        //alert("clicked");

        // THIS WORKS (adds the test text to the clicked object)
        //$(event.target).append('<p>Test</p>');

        //var imgURL = chrome.extension.getURL("icon1.png");
        var newCheckpoint = new Image();
        newCheckpoint.className = "checkpoint";
        newCheckpoint.src = chrome.extension.getURL("icon1.png");

        //('<img class="checkpoint" src='+imgURL+' />');
        $(event.target).prepend(newCheckpoint);

        // bounding box for the checkpoint
        // This only returns the relative position on the current window, not the page
        var rect = event.target.getBoundingClientRect();
        console.log("printing object coords");
        console.log("x=" + rect.left);
        console.log("y=" + rect.top);
        
/*
        var test = getClosestElement(221, 309);
        if(test.className === "example")
        {
            console.log("it worked");
        }
*/

        // chunk for finding the position of the created checkpoint
        // on the web page
        //var box = newCheckpoint.getBoundingClientRect();
        
        // use to get the x,y coordinates for the element that was clicked on
        var box = event.target.getBoundingClientRect();

        var body = document.body;
        var docElem = document.documentElement;

        var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

        var clientTop = docElem.clientTop || body.clientTop || 0;
        var clientLeft = docElem.clientLeft || body.clientLeft || 0;

        var top  = box.top +  scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;

        top = Math.round(top);
        left = Math.round(left);

        console.log("absolute x=" + left);
        console.log("absolute y=" + top);



        
        //points[points.length] = newCheckpoint;

        //console.log(points);

        var currentURL = window.location.href;

        // by passing an object you can define default values e.g.: []
        chrome.storage.sync.get({checkpoints: []}, function (result) {
            // the input argument is ALWAYS an object containing the queried keys
            // so we select the key we need
            var checkpoints = result.checkpoints;

            checkpoints.push({pageURL: currentURL, x: left, y: top});
            // set the new array value to the same key
            chrome.storage.sync.set({checkpoints: checkpoints}, function () {
                // you can use strings instead of objects
                // if you don't  want to define default values
                chrome.storage.sync.get('checkpoints', function (result) {
                    //console.log(result.checkpoints);
                    //console.log('added new checkpoint at x= ' + left + ' y= ' + top );
                    //console.log('page URL is ' + checkpoints[0].pageURL);
                    //console.log('x for element 0 is' + checkpoints[0].x);

                    console.log(checkpoints.length);
                });
            });
        });
/*
        var image = getClosestElement(309, 225);
        var rect = image.getBoundingClientRect();
        if(image.class == )
        {
            console.log(image);
        }
*/

        //var temp = window.location.href;
        //console.log(temp);


/*
        // make a key that relates to the current page
        var pageURL = document.URL;
        var points = [];
        points[points.length] = {point: $newCheckpoint};

        chrome.storage.sync.get(pageURL: [], function(points) {
            //console.log("The value returned was: " + val);
            pointsForPage = points.pageURL;

            pointsForPage.push(newCheckpoint);

            // save the array containing all the checkpoints to local storage
            chrome.storage.sync.set({pageURL: pointsForPage}, function() {

                // Notify that we saved.
                //console.log('checkpoints saved');

                // add the newly created checkpoint to the key for the current page
                //points.push(newCheckpoint);
            });

        });
*/

        

        //var imgURL = chrome.extension.getURL("logo.jpg");
        //$(e.target).append('<img id="theImg" src="imgURL"/>'); 
    }

    // if the delete key (currently using 'x') and the left mouse click is pressed
    else if (event.button == 0 && delPressed == true)
    {
        // if the object clicked on is a checkpoint, remove the object
        if(event.target.className == "checkpoint")
        {
            event.target.remove();
        }
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
