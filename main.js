// Get references to the necessary DOM elements
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const outputDiv = document.getElementById('outputDiv');
const mouseTracker = document.getElementById('mouseTracker');
const coordinatesDiv = document.getElementById('coordinates');

// --- Form Submission Function ---

/**
 * Handles the form submission logic: validation, output, and styling.
 */
function handleSubmit() {
    const userName = nameInput.value.trim(); // Get and trim the user's input

    if (userName) {
        // Successful Submission
        outputDiv.textContent = `Welcome, ${userName}!`;
        outputDiv.style.backgroundColor = 'green';
        outputDiv.style.color = 'white'; // Make text readable on green background
    } else {
        // Error: Empty Input
        outputDiv.textContent = 'Error: Please enter a name.';
        outputDiv.style.backgroundColor = 'white'; // Reset background if it was green
        outputDiv.style.color = 'red';
    }
}

// --- Event Listeners ---

// 1. Click Event: Handle form submission when the button is clicked.
submitButton.addEventListener('click', handleSubmit);

// 2. Mouse Event: Track mouse movement inside the designated area.
mouseTracker.addEventListener('mousemove', (event) => {
    // clientX and clientY give coordinates relative to the viewport.
    // getBoundingClientRect provides the size and position of the element relative to the viewport.
    const rect = mouseTracker.getBoundingClientRect();

    // Calculate the coordinates relative to the top-left corner of the mouseTracker div.
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);

    // Update the coordinates display
    coordinatesDiv.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});

// Reset coordinates when the mouse leaves the tracking area
mouseTracker.addEventListener('mouseleave', () => {
    coordinatesDiv.textContent = `Mouse Coordinates: X: 0, Y: 0`;
});

// 3. Keyboard Event: Trigger submission when "Enter" is pressed in the input field.
nameInput.addEventListener('keydown', (event) => {
    // Check if the pressed key is "Enter" (key code 13 or modern 'key' property)
    if (event.key === 'Enter') {
        // Prevent the default form submission behavior (if the input was part of a <form> tag)
        event.preventDefault(); 
        
        // Only trigger the submission if the input is not empty
        if (nameInput.value.trim() !== '') {
            handleSubmit();
        } else {
            // Display error if 'Enter' is pressed on an empty field
            outputDiv.textContent = 'Error: Please enter a name.';
            outputDiv.style.backgroundColor = 'white';
            outputDiv.style.color = 'red';
        }
    }
});

// Optional: Initial state for the output div
outputDiv.textContent = 'Awaiting input...';