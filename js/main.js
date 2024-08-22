// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    initializeCarousel(); // Initialize the image carousel
    setupNavFunctions();  // Set up the side navigation functions
});

// Function to set up navigation functions for opening and closing the side navigation
function setupNavFunctions() {
    // Function to open the side navigation by setting its width to 250px
    window.openNav = function() {
        document.getElementById("mySidenav").style.width = "250px";
    };
    
    // Function to close the side navigation by setting its width to 0
    window.closeNav = function() {
        document.getElementById("mySidenav").style.width = "0";
    };
}

// Function to initialize the image carousel
function initializeCarousel() {
    var myIndex = 0; // Initialize the index for the current slide
    carousel(); // Start the carousel

    // Function to control the carousel behavior
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides"); // Get all elements with class "mySlides"
        
        // Loop through all slides and hide them
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        
        myIndex++; // Increment the index to show the next slide
        
        // If the index exceeds the number of slides, reset it to the first slide
        if (myIndex > x.length) { 
            myIndex = 1; 
        }
        
        x[myIndex - 1].style.display = "block";  // Display the current slide
        
        setTimeout(carousel, 4000); // Set a timer to change the slide every 4 seconds
    }
}
