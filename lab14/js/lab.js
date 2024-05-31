$(document).ready(function() {
    // Loop through each image in the debugging section
    $('#debugging img').each(function(index) {
        debugger; // Pause execution to inspect each image
        
        // Add event listeners for image load and error events
        $(this).on('load', function() {
            console.log('Image ' + (index + 1) + ' loaded successfully: ' + $(this).attr('src'));
        }).on('error', function() {
            console.error('Error loading image ' + (index + 1) + ': ' + $(this).attr('src'));
        });
    });
});
