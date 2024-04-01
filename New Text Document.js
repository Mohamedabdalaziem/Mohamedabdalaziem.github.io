// Assuming this JavaScript code is executed in a web environment where you have access to the DOM

// Function to handle the status update
function updateStatus(status) {
    // Assuming AJAX is used to send the status to the server
    // You can replace this with any other method to send data to the server
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "update_status.php?status=" + status, true);
    xhr.send();

    // Assuming status.txt is updated on the server-side
    // and the server responds with the appropriate HTML page
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Redirect to the appropriate page based on the status
                if (status === 'on') {
                    window.location.href = "on.html";
                } else if (status === 'off') {
                    window.location.href = "off.html";
                }
            } else {
                console.error('Failed to update status');
            }
        }
    };
}

// Assuming you have some UI elements to trigger status updates
document.getElementById('onButton').addEventListener('click', function () {
    updateStatus('on');
});

document.getElementById('offButton').addEventListener('click', function () {
    updateStatus('off');
});
