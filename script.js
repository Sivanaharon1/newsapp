// Sample data structure for competitions, challenges, and calls to action
const data = {
    news: [
        {
            id: 1,
            title: "May 2025 Artist Funding Opportunities",
            date: "2025-05-01",
            description: "Major funding opportunities announced for AI artists and creators, with grants totaling over $1 million available for innovative projects.",
            source: "AI Art News",
            url: "https://aiartnews.com/2025/05/01/may-2025-artist-funding-opportunities/"
        },
        {
            id: 2,
            title: "AI Film Festival 2025 Opens Submissions",
            date: "2025-05-05",
            description: "The annual AI Film Festival announces its call for submissions, featuring new categories for AI-assisted filmmaking and virtual production.",
            source: "AI Film Network",
            url: "https://aifilmnetwork.com/2025/05/05/ai-film-festival-2025-submissions/"
        },
        {
            id: 3,
            title: "MetaDisruption AI International Festival",
            date: "2025-05-10",
            description: "Global festival showcasing the intersection of AI, art, and design, featuring workshops, exhibitions, and networking opportunities.",
            source: "MetaDisruption",
            url: "https://metadisruption.com/2025/05/10/ai-festival-2025/"
        },
        {
            id: 4,
            title: "Krea AI Launches New Creative Platform",
            date: "2025-05-15",
            description: "Krea AI introduces its next-generation creative platform, offering advanced tools for AI-assisted art and design with enhanced collaboration features.",
            source: "Krea AI",
            url: "https://krea.ai/2025/05/15/new-platform-launch/"
        }
    ],
    competitions: [
        {
            id: 1,
            title: "AI Skills Fest Challenge",
            date: "2024-05-01",
            description: "Microsoft's global AI challenge focusing on practical AI skills and real-world applications. Open to developers and AI enthusiasts worldwide.",
            tags: ["AI", "Skills", "Microsoft", "Challenge"],
            prize: "$10,000",
            deadline: "2024-06-30",
            platform: "Microsoft Learn",
            location: "Online"
        },
        {
            id: 2,
            title: "Gen48 AI Film Festival",
            date: "2024-05-15",
            description: "Runway's annual AI film festival showcasing the best in AI-generated and AI-assisted filmmaking. Open to filmmakers using AI tools in their creative process.",
            tags: ["Film", "AI", "Festival", "Runway"],
            prize: "$25,000",
            deadline: "2024-06-15",
            platform: "Runway",
            location: "Global"
        },
        {
            id: 3,
            title: "ARC Prize Challenge",
            date: "2024-05-20",
            description: "Open competition to develop AI systems that can solve ARC (Abstraction and Reasoning Corpus) tasks, pushing the boundaries of AI reasoning.",
            tags: ["AI", "Research", "Competition"],
            prize: "$100,000",
            deadline: "2024-06-20",
            platform: "ARC Prize",
            location: "Online"
        }
    ],
    challenges: [
        {
            id: 1,
            title: "AI Good Global Challenge",
            date: "2024-05-10",
            description: "Three parallel competitions focusing on AI for social good, including healthcare, education, and environmental sustainability.",
            tags: ["AI", "Social Good", "Healthcare", "Education"],
            duration: "45 days",
            platform: "AI Good",
            location: "Global"
        },
        {
            id: 2,
            title: "Krea AI Creative Challenge",
            date: "2024-05-25",
            description: "Monthly creative challenge using Krea AI's latest image generation technology. Theme: 'Future of Human-AI Collaboration'",
            tags: ["AI", "Art", "Krea", "Creative"],
            duration: "30 days",
            platform: "Krea AI",
            location: "Online"
        }
    ],
    calls: [
        {
            id: 1,
            title: "Artificial Muse Residency",
            date: "2024-05-15",
            description: "Artist residency program in Vancouver focusing on AI and art. Seeking artists working at the intersection of artificial intelligence and creative expression.",
            tags: ["Residency", "AI", "Art", "Vancouver"],
            type: "Residency",
            platform: "France Canada Culture",
            location: "Vancouver, Canada"
        },
        {
            id: 2,
            title: "Runway Creative Partners Program",
            date: "2024-05-20",
            description: "Open call for creative professionals to join Runway's partner program. Looking for filmmakers, artists, and creators using AI in their work.",
            tags: ["Partnership", "AI", "Creative", "Runway"],
            type: "Partnership",
            platform: "Runway",
            location: "Remote"
        }
    ]
};

let currentNewsIndex = 0;

function createNewsItem(news) {
    const newsItem = document.createElement('div');
    newsItem.className = 'news-item';
    newsItem.innerHTML = `
        <h3>${news.title}</h3>
        <div class="news-meta">
            <span>${formatDate(news.date)}</span>
            <span>${news.source}</span>
        </div>
        <p class="description">${news.description}</p>
        <a href="${news.url}" target="_blank" rel="noopener noreferrer">Read more →</a>
    `;
    return newsItem;
}

function showNewsItem(index) {
    const newsContent = document.getElementById('news-content');
    const newsItems = newsContent.getElementsByClassName('news-item');
    
    // Remove active class from all items
    Array.from(newsItems).forEach(item => item.classList.remove('active'));
    
    // Add active class to current item
    newsItems[index].classList.add('active');
}

function nextNews() {
    currentNewsIndex = (currentNewsIndex + 1) % data.news.length;
    showNewsItem(currentNewsIndex);
}

function prevNews() {
    currentNewsIndex = (currentNewsIndex - 1 + data.news.length) % data.news.length;
    showNewsItem(currentNewsIndex);
}

function populateNews() {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    data.news.forEach(news => {
        const card = document.createElement('div');
        card.className = 'card';
        let countdownHTML = '';
        if (new Date(news.date) > new Date()) {
            countdownHTML = `<div class="countdown" data-date="${news.date}"></div>`;
        }
        card.innerHTML = `
            <h3>${news.title}</h3>
            <div class="news-meta">
                <span>${formatDate(news.date)}</span>
                <span>${news.source}</span>
            </div>
            <div class="description">${news.description}</div>
            ${countdownHTML}
            <a href="${news.url}" target="_blank" rel="noopener noreferrer" class="read-more">Read more →</a>
        `;
        newsContainer.appendChild(card);
    });
    // Start countdown timers
    startCountdowns();
}

function startCountdowns() {
    const countdowns = document.querySelectorAll('.countdown');
    countdowns.forEach(el => {
        const date = el.getAttribute('data-date');
        function update() {
            el.textContent = 'Countdown: ' + getCountdownString(date);
        }
        update();
        setInterval(update, 1000);
    });
}

// Function to create a card element
function createCard(item, type) {
    const card = document.createElement('div');
    card.className = 'card';
    
    let content = `
        <h3>${item.title}</h3>
        <div class="date">Date: ${formatDate(item.date)}</div>
        <div class="description">${item.description}</div>
        <div class="platform-location">
            <div class="platform"><i class="fas fa-globe"></i> Platform: ${item.platform}</div>
            <div class="location"><i class="fas fa-map-marker-alt"></i> Location: ${item.location}</div>
        </div>
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
    
    populateNews();
}

// Dark mode toggle
function setupDarkModeToggle() {
    const btn = document.getElementById('dark-mode-toggle');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = btn.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Countdown helper
function getCountdownString(targetDate) {
    const now = new Date();
    const end = new Date(targetDate);
    const diff = end - now;
    if (diff <= 0) return 'Started!';
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// --- Daily Goal Generator ---
const dailyGoals = [
    "Take a 5-minute mindful break.",
    "Organize your workspace.",
    "Write down three things you're grateful for.",
    "Reach out to a colleague or friend.",
    "Plan your top 3 tasks for tomorrow.",
    "Drink a glass of water.",
    "Read a short article on AI.",
    "Declutter your email inbox.",
    "Take a short walk.",
    "Reflect on today's achievements."
];

function setRandomGoal() {
    const goalText = document.getElementById('daily-goal-text');
    const randomGoal = dailyGoals[Math.floor(Math.random() * dailyGoals.length)];
    goalText.textContent = randomGoal;
}

function setupDailyGoal() {
    document.getElementById('new-goal-btn').addEventListener('click', setRandomGoal);
    setRandomGoal(); // Show a goal on load
}

// --- Sticky Notes ---
function getNotes() {
    return JSON.parse(localStorage.getItem('stickyNotes') || '[]');
}

function saveNotes(notes) {
    localStorage.setItem('stickyNotes', JSON.stringify(notes));
}

function renderNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';
    const notes = getNotes();
    notes.forEach((note, idx) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'sticky-note';
        noteDiv.innerHTML = `
            <textarea>${note}</textarea>
            <button class="delete-note-btn" title="Delete">🗑️</button>
        `;
        // Edit note
        noteDiv.querySelector('textarea').addEventListener('input', (e) => {
            notes[idx] = e.target.value;
            saveNotes(notes);
        });
        // Delete note
        noteDiv.querySelector('.delete-note-btn').addEventListener('click', () => {
            notes.splice(idx, 1);
            saveNotes(notes);
            renderNotes();
        });
        notesContainer.appendChild(noteDiv);
    });
}

function setupStickyNotes() {
    document.getElementById('add-note-btn').addEventListener('click', () => {
        const notes = getNotes();
        notes.push('');
        saveNotes(notes);
        renderNotes();
    });
    renderNotes();
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    populateContainers();
    setupDarkModeToggle();
    setupDailyGoal();
    setupStickyNotes();
    
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