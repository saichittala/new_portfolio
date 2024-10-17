// Simple data for cards
const cardsData = [
    { title: "Ricoz", type: "Branding", image: "img/sample.jpg" },
    { title: "Petzy", type: "CaseStudy", image: "img/sample2.jpg" },
    { title: "MyDeziner", type: "DesignTOOL", image: "img/sample3.jpg" },
    { title: "HomeGymr", type: "Checkout", image: "img/sample4.jpg" }
];

// Container where cards will be inserted
const container = document.getElementById('cards-container');

// Create cards dynamically
cardsData.forEach(card => {
    // Create a card div
    const cardDiv = document.createElement('div');
    cardDiv.className = 'main-card';
    cardDiv.style.backgroundImage = `url(${card.image})`;

    // Insert content inside the card
    cardDiv.innerHTML = `
        <div class="sub-card">
            <div class="main-heading">${card.title}</div>
            <div class="heading-type">${card.type}</div>
        </div>
    `;

    // Add the card to the container
    container.appendChild(cardDiv);
});