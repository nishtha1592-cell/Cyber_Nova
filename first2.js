// Selecting the elements from your HTML
const checkerForm = document.querySelector('.checker-form');
const urlInput = document.querySelector('input[placeholder="Enter URL link"]');

// Create a div to display the result below the form
const resultDisplay = document.createElement('div');
resultDisplay.style.marginTop = '20px';
resultDisplay.style.fontWeight = 'bold';
resultDisplay.style.textAlign = 'center';
checkerForm.appendChild(resultDisplay);

checkerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh
    
    const url = urlInput.value.trim().toLowerCase();
    
    if (!url) {
        resultDisplay.textContent = "Please enter a URL first! ⌨️";
        resultDisplay.style.color = "#ffa500";
        return;
    }

    // Safety Logic
    const isHttps = url.startsWith('https://');
    const hasSuspiciousSigns = url.includes('@') || url.split('-').length > 3;
    const isVeryLong = url.length > 100;
    
    // Final Verdict
    if (isHttps && !hasSuspiciousSigns && !isVeryLong) {
        resultDisplay.innerHTML = `This link looks safe! ✅`;
        resultDisplay.style.color = "#2ecc71"; // Green
    } else {
        resultDisplay.innerHTML = `This link might be harmful! ⚠️`;
        resultDisplay.style.color = "#e74c3c"; // Red
    }
});