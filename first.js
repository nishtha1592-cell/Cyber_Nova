// 1. Select the "Mode" button
// Note: Make sure your HTML button has id="mode-toggle"
const modeBtn = document.getElementById('mode-toggle');

// 2. Track if we are currently in "Light Mode"
let isLightMode = false;

// 3. Listen for the click
modeBtn.addEventListener('click', () => {
    if (isLightMode === false) {
        // --- SWITCH TO LIGHT MODE ---
        document.body.style.backgroundColor = "#ffffff"; // White background
        document.body.style.color = "#000000";           // Black text
        
        // Optional: Update button text
        modeBtn.textContent = "Dark Mode";
        isLightMode = true;
    } else {
        // --- SWITCH BACK TO DEFAULT (DARK) ---
        // Clearing the style properties lets the original CSS take over
        document.body.style.backgroundColor = ""; 
        document.body.style.color = "";
        
        // Optional: Update button text
        modeBtn.textContent = "Light Mode";
        isLightMode = false;
    }
});


