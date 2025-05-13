// Sample data structure for competitions, challenges, and calls to action
const data = {
    competitions: [
        {
            id: 1,
            title: "AI Video Creation Competition",
            date: "2024-04-15",
            description: "International competition for creating short videos using AI",
            tags: ["Video", "AI", "Competition"],
            prize: "$10,000",
            deadline: "2024-05-15"
        },
        {
            id: 2,
            title: "AI Image Generation Challenge",
            date: "2024-04-01",
            description: "Create a series of artistic images using AI",
            tags: ["Images", "AI", "Art"],
            prize: "$5,000",
            deadline: "2024-04-30"
        }
    ],
    challenges: [
        {
            id: 1,
            title: "AI Animation Challenge",
            date: "2024-04-10",
            description: "Create a short animation using AI tools",
            tags: ["Animation", "AI", "Challenge"],
            duration: "30 days"
        }
    ],
    calls: [
        {
            id: 1,
            title: "AI Project Call",
            date: "2024-04-05",
            description: "Looking for artists to work on a new AI project",
            tags: ["Project", "AI", "Opportunity"],
            type: "Collaboration"
        }
    ]
};

// Function to create a card element
function createCard(item, type) {
    const card = document.createElement('div');
    card.className = 'card';
    
    let content = `
        <h3>${item.title}</h3>
        <div class="date">Date: ${formatDate(item.date)}</div>
        <div class="description">${item.description}</div>
        <div class="tags">
    `;
    
    item.tags.forEach(tag => {
        content += `<span class="tag">${tag}</span>`;
    });
    
    content += '</div>';
    
    if (type === 'competition') {
        content += `
            <div class="prize">Prize: ${item.prize}</div>
            <div class="deadline">Deadline: ${formatDate(item.deadline)}</div>
        `;
    } else if (type === 'challenge') {
        content += `<div class="duration">Duration: ${item.duration}</div>`;
    } else if (type === 'call') {
        content += `<div class="type">Type: ${item.type}</div>`;
    }
    
    card.innerHTML = content;
    return card;
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to populate containers with cards
function populateContainers() {
    const competitionsContainer = document.getElementById('competitions-container');
    const challengesContainer = document.getElementById('challenges-container');
    const callsContainer = document.getElementById('calls-container');
    
    // Populate competitions
    data.competitions.forEach(competition => {
        competitionsContainer.appendChild(createCard(competition, 'competition'));
    });
    
    // Populate challenges
    data.challenges.forEach(challenge => {
        challengesContainer.appendChild(createCard(challenge, 'challenge'));
    });
    
    // Populate calls
    data.calls.forEach(call => {
        callsContainer.appendChild(createCard(call, 'call'));
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    populateContainers();
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 