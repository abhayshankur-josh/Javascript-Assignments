/*
● Go to youtube. Open any video. Add a button to the page using JS. On click of the button,
the video playback speed should change to 10x
*/

// Create a button element
const button = document.createElement('button');
button.innerText = "Set Speed to 10x"; 
button.style.position = "fixed";
button.style.top = "150px";
button.style.right = "20px";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.backgroundColor = "#FF0000";
button.style.color = "#FFFFFF";
button.style.border = "none";
button.style.borderRadius = "5px";

// Append the button to the body
document.body.appendChild(button);

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Get the video element on the page
    const video = document.querySelector('video');
    
    if (video) {
        // Change the playback speed of the video to 10x
        video.playbackRate = 10;
        console.log("Playback speed set to 10x");
    } else {
        console.log("Video element not found.");
    }
});

