// Sample data for courses
const courses = [
    // Programming Languages
    {
        title: "Python for Everybody",
        provider: "University of Michigan",
        description: "Learn Python programming from basics to advanced concepts",
        image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: "Free",
        rating: 4.8,
        students: 2500000,
        duration: "8 weeks",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/python"
    },
    {
        title: "Java Programming Masterclass",
        provider: "Oracle",
        description: "Master Java programming from fundamentals to advanced topics",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: "Free",
        rating: 4.7,
        students: 1800000,
        duration: "12 weeks",
        platform: "edX",
        url: "https://www.edx.org/learn/java"
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        provider: "freeCodeCamp",
        description: "Learn JavaScript fundamentals and problem-solving",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: "Free",
        rating: 4.9,
        students: 1500000,
        duration: "6 weeks",
        platform: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
    },
    // Web Development
    {
        title: "HTML & CSS Masterclass",
        provider: "W3Schools",
        description: "Master modern HTML5 and CSS3 for web development",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: "Free",
        rating: 4.8,
        students: 2000000,
        duration: "4 weeks",
        platform: "W3Schools",
        url: "https://www.w3schools.com/html/"
    },
    {
        title: "MongoDB University",
        provider: "MongoDB",
        description: "Learn MongoDB database development and administration",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: "Free",
        rating: 4.7,
        students: 800000,
        duration: "10 weeks",
        platform: "MongoDB University",
        url: "https://university.mongodb.com/"
    },
    // DevOps & Tools
    {
        title: "Git & GitHub Masterclass",
        provider: "GitHub",
        description: "Master version control with Git and GitHub",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: "Free",
        rating: 4.9,
        students: 1200000,
        duration: "4 weeks",
        platform: "GitHub Learning Lab",
        url: "https://lab.github.com/"
    },
    // Cloud & Infrastructure
    {
        title: "AWS Cloud Practitioner",
        provider: "Amazon Web Services",
        description: "Learn AWS cloud fundamentals and services",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: "Free",
        rating: 4.8,
        students: 900000,
        duration: "8 weeks",
        platform: "AWS Training",
        url: "https://aws.amazon.com/training/learn-about/cloud-practitioner/"
    },
    // Data Science
    {
        title: "Data Science with Python",
        provider: "IBM",
        description: "Learn data analysis, visualization, and machine learning with Python",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: "Free",
        rating: 4.7,
        students: 1500000,
        duration: "12 weeks",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/data-science-python"
    },
    // Cybersecurity
    {
        title: "Introduction to Cybersecurity",
        provider: "Cisco",
        description: "Learn cybersecurity fundamentals and best practices",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: "Free",
        rating: 4.8,
        students: 700000,
        duration: "6 weeks",
        platform: "Cisco Networking Academy",
        url: "https://www.netacad.com/courses/security/introduction-cybersecurity"
    }
];

// Sample data for internships
const internships = [
    {
        title: "Software Engineering Intern",
        company: "Google",
        description: "Work on real projects and learn from industry experts",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        location: "Mountain View, CA",
        duration: "3 months",
        stipend: "$8,000/month",
        url: "https://careers.google.com/jobs/results/software-engineering-intern"
    },
    {
        title: "Data Science Intern",
        company: "Microsoft",
        description: "Apply machine learning and data analysis to solve real-world problems",
        image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        location: "Redmond, WA",
        duration: "6 months",
        stipend: "$7,500/month",
        url: "https://careers.microsoft.com/students/us/en/internships"
    },
    {
        title: "Frontend Development Intern",
        company: "Meta",
        description: "Build user interfaces and web applications",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        location: "Menlo Park, CA",
        duration: "4 months",
        stipend: "$8,500/month",
        url: "https://www.metacareers.com/students-and-grads/"
    },
    {
        title: "DevOps Engineering Intern",
        company: "Amazon",
        description: "Work on cloud infrastructure and automation",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        location: "Seattle, WA",
        duration: "3 months",
        stipend: "$8,200/month",
        url: "https://www.amazon.jobs/en/teams/internships-for-students"
    }
];

// Sample data for interview resources
const resources = [
    {
        question: "What is the difference between let, const, and var in JavaScript?",
        answer: "let and const are block-scoped, while var is function-scoped. const cannot be reassigned, while let and var can be. var declarations are hoisted, while let and const are not.",
        difficulty: "easy",
        category: "JavaScript",
        url: "https://leetcode.com/problems/javascript-basics"
    },
    {
        question: "Explain the concept of closures in JavaScript",
        answer: "A closure is the combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from its outer scope even after the outer function has returned.",
        difficulty: "medium",
        category: "JavaScript",
        url: "https://leetcode.com/problems/javascript-closures"
    },
    {
        question: "What is the difference between REST and GraphQL?",
        answer: "REST is an architectural style that uses HTTP methods to perform CRUD operations, while GraphQL is a query language that allows clients to request specific data. GraphQL provides more flexibility and reduces over-fetching of data.",
        difficulty: "hard",
        category: "Web Development",
        url: "https://leetcode.com/problems/api-design"
    },
    {
        question: "Explain Python decorators and their use cases",
        answer: "Decorators are functions that modify the behavior of other functions. They are used for logging, timing, access control, and caching. They use the @ syntax and can be chained.",
        difficulty: "medium",
        category: "Python",
        url: "https://leetcode.com/problems/python-decorators"
    },
    {
        question: "What is MongoDB and how does it differ from SQL databases?",
        answer: "MongoDB is a NoSQL database that stores data in JSON-like documents. Unlike SQL databases, it's schema-less, horizontally scalable, and better suited for unstructured data.",
        difficulty: "medium",
        category: "Database",
        url: "https://leetcode.com/problems/mongodb-basics"
    }
];

// DOM Elements
const coursesContainer = document.getElementById('courses-container');
const internshipsContainer = document.getElementById('internships-container');
const resourcesContainer = document.getElementById('resources-container');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const closeBtns = document.querySelectorAll('.close');
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');
const searchInput = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');

// Initialize the page
function initializePage() {
    renderCourses();
    renderInternships();
    renderResources();
    initializeAnimations();
    setupEventListeners();
    checkAuthStatus();
}

// Render courses
function renderCourses() {
    coursesContainer.innerHTML = courses.map((course, index) => `
        <div class="card" style="--animation-order: ${index}">
            <div class="card-image">
                <img src="${course.image}" alt="${course.title}">
                <div class="card-overlay">
                    <span>${course.duration}</span>
                    <span>⭐ ${course.rating}</span>
                </div>
            </div>
            <div class="card-content">
                <h3>${course.title}</h3>
                <p class="provider">${course.provider}</p>
                <p class="description">${course.description}</p>
                <div class="card-footer">
                    <span class="price">${course.price}</span>
                    <span>👥 ${course.students.toLocaleString()} students</span>
                </div>
                <button onclick="window.open('${course.url}', '_blank')">Enroll Now</button>
            </div>
        </div>
    `).join('');
}

// Render internships
function renderInternships() {
    internshipsContainer.innerHTML = internships.map((internship, index) => `
        <div class="card" style="--animation-order: ${index}">
            <div class="card-image">
                <img src="${internship.image}" alt="${internship.title}">
                <div class="card-overlay">
                    <span>${internship.duration}</span>
                    <span>${internship.stipend}</span>
                </div>
            </div>
            <div class="card-content">
                <h3>${internship.title}</h3>
                <p class="company">${internship.company}</p>
                <p class="description">${internship.description}</p>
                <div class="internship-details">
                    <span><i class="fas fa-map-marker-alt"></i> ${internship.location}</span>
                    <span><i class="fas fa-clock"></i> ${internship.duration}</span>
                </div>
                <button onclick="window.open('${internship.url}', '_blank')">Apply Now</button>
            </div>
        </div>
    `).join('');
}

// Render interview resources
function renderResources() {
    resourcesContainer.innerHTML = resources.map((resource, index) => `
        <div class="card" style="--animation-order: ${index}">
            <div class="card-content">
                <div class="question-header">
                    <span class="difficulty ${resource.difficulty}">${resource.difficulty}</span>
                    <span class="category">${resource.category}</span>
                </div>
                <h3>${resource.question}</h3>
                <p class="description">${resource.answer}</p>
                <button onclick="window.open('${resource.url}', '_blank')">Practice Now</button>
            </div>
        </div>
    `).join('');
}

// Initialize animations
function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Modal controls
    loginBtn.addEventListener('click', () => showModal(loginModal));
    registerBtn.addEventListener('click', () => showModal(registerModal));
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal(loginModal);
        showModal(registerModal);
    });
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal(registerModal);
        showModal(loginModal);
    });
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            hideModal(loginModal);
            hideModal(registerModal);
        });
    });

    // Form submissions
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);

    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Mobile menu
    document.querySelector('.menu-btn').addEventListener('click', toggleMobileMenu);

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) hideModal(loginModal);
        if (e.target === registerModal) hideModal(registerModal);
    });

    // Smooth scrolling for navigation links
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
}

// Show modal
function showModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Hide modal
function hideModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    
    // Here you would typically make an API call to your backend
    console.log('Login attempt:', { email, password });
    
    // For demo purposes, show success message and store user info
    localStorage.setItem('user', JSON.stringify({ email }));
    alert('Login successful!');
    hideModal(loginModal);
    updateAuthUI();
}

// Handle register
function handleRegister(e) {
    e.preventDefault();
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Here you would typically make an API call to your backend
    console.log('Register attempt:', { name, email, password });
    
    // For demo purposes, show success message and store user info
    localStorage.setItem('user', JSON.stringify({ name, email }));
    alert('Registration successful!');
    hideModal(registerModal);
    updateAuthUI();
}

// Handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    if (!searchTerm) return;

    // Search through all content
    const allContent = [...courses, ...internships, ...resources];
    const results = allContent.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        (item.description && item.description.toLowerCase().includes(searchTerm)) ||
        (item.provider && item.provider.toLowerCase().includes(searchTerm)) ||
        (item.company && item.company.toLowerCase().includes(searchTerm))
    );

    // Display results (you can implement a more sophisticated results display)
    if (results.length > 0) {
        alert(`Found ${results.length} results for "${searchTerm}"`);
    } else {
        alert('No results found');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    authButtons.style.display = authButtons.style.display === 'flex' ? 'none' : 'flex';
}

// Check authentication status
function checkAuthStatus() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        updateAuthUI();
    }
}

// Update UI based on authentication status
function updateAuthUI() {
    const user = JSON.parse(localStorage.getItem('user'));
    const authButtons = document.querySelector('.auth-buttons');
    
    if (user) {
        authButtons.innerHTML = `
            <span class="user-welcome">Welcome, ${user.name || user.email}</span>
            <button class="logout-btn" onclick="handleLogout()">Logout</button>
        `;
    } else {
        authButtons.innerHTML = `
            <button class="login-btn" onclick="showModal(loginModal)">Login</button>
            <button class="register-btn" onclick="showModal(registerModal)">Register</button>
        `;
    }
}

// Handle logout
function handleLogout() {
    localStorage.removeItem('user');
    updateAuthUI();
    alert('Logged out successfully!');
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage); 