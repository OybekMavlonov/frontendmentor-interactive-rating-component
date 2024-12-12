const container = document.getElementById('button-container');

let selectedRating
let selectedButton

// Loop to create buttons
for (let i = 1; i <= 5; i++) {
    const button = document.createElement('button');

    // Add Tailwind classes
    button.className = `sm:w-12 w-10 sm:h-12 h-8 bg-blue-750 rounded-full shadow-2xl flex items-center justify-center text-grey text-sm sm:text-base text-center font-bold font-overpass hover:bg-orange hover:text-blue-900`;

    // Set the text content to the number
    button.textContent = i;

    button.addEventListener('click', () => {
        // Update the selected value
        selectedRating = i;

        // Reset the previously selected button's color, if any
        if (selectedButton) {
            selectedButton.classList.remove('bg-white', 'text-blue-900');
            selectedButton.classList.add('bg-blue-750', 'text-grey');
        }

        // Change the clicked button's color
        button.classList.remove('bg-blue-750', 'text-grey');
        button.classList.add('bg-white', 'text-blue-900');

        // Set the selected button reference
        selectedButton = button;
    });

    // Append the button to the container
    container.appendChild(button);
}

// Get references to the cards and the button
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const submitBtn = document.getElementById("submit-btn");
const yourSelection = document.getElementById("you-selected");

// Add click event listener to the submit button
submitBtn.addEventListener("click", () => {
    // Hide the first card and show the second card
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
    yourSelection.textContent = `You selected ${selectedRating} out of 5`
});