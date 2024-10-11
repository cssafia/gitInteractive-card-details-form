// Get Inputs Value 
const cardName = document.getElementById("name");
const cardNumber = document.getElementById("numberCard");
const expContainer = document.querySelector(".exp-date");
const expMonth = document.querySelector("#exp-date");
const expYear = document.querySelector(".exp-date input[type='text']:nth-child(2)");
const cvc = document.getElementById("cvc");
const cardContainer = document.querySelector('.card'); // Select the single card container

function check() {
    // Clear previous comments
    clearComments();

    let valid = true; // Flag to track overall validity

    // Validate inputs
    if (!cardName.value.trim()) {
        addComment(cardName, 'The name is wrong');
        valid = false;
    }
    
    if (!/^\d+$/.test(cardNumber.value) ) {  // Check if card number is numeric
        addComment(cardNumber, 'Wrong format, numbers only');
        valid = false;
    }

    if (expYear.value === '' || expMonth.value === '') {
        addComment(expContainer, "Can't be blank");
        valid = false;
    }

    if (!cvc.value.trim() || isNaN(cvc.value) || cvc.value.length !== 3) {
        addComment(cvc, 'CVC must be 3 digits');
        valid = false;
    }

    if (valid) {
        thanks();
    }
}

function addComment(ele, text) { 
    const comment = document.createElement("p");
    comment.textContent = text;
    comment.style.color = "red"; // Optional: Change text color for visibility
    comment.style.fontSize='0.75rem';

    // Insert the comment after the element
    ele.parentNode.insertBefore(comment, ele.nextSibling);
}

function clearComments() {
    const comments = cardContainer.querySelectorAll("p"); // Select all paragraphs inside the card
    comments.forEach(comment => comment.remove()); // Remove them
}

function thanks() {
    // Clear existing content in the card container
    cardContainer.innerHTML = ''; // Clear all existing content
    cardContainer.classList.add('done');
    
    const title = document.createElement("h1");
    title.textContent = 'THANK YOU';

    const child = document.createElement("p");
    child.textContent = 'Your reservation is done';
    
    const btn =document.createElement('button');
    btn.textContent='CONTUNUE';
    btn.classList.add('btn');

    // Create an image element and append it
    const img = document.createElement("img");
    img.src = 'images/icon-complete.svg'; // Set the source of the image
    img.alt = "Reservation Complete"; // Add alt text for accessibility
    
    cardContainer.appendChild(img); // Append the image to the container
    cardContainer.appendChild(title); // Append the thank 
    cardContainer.appendChild(child); // Append the thank you message
    cardContainer.appendChild(btn);
}

function setupConfirmButton() {
    const confirmButton = document.querySelector(".confirm-btn");
    
    // Add event listener to the confirm button
    confirmButton.addEventListener("click", check);
}

// Set up the confirm button when the window loads
window.onload = setupConfirmButton;