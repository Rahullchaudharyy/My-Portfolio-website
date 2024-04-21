
const menuButton = document.querySelector('.ri-menu-line');
const sidebar = document.querySelector('.Sidebar');
const closeButton = document.querySelector('.ri-close-fill');
const body = document.querySelectorAll('body')

menuButton.addEventListener('click', function() {
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
});

closeButton.addEventListener('click', function() {
    sidebar.style.display = 'none';
});

const navLinks = document.querySelectorAll('#nav-info a');
const sidebarLinks = document.querySelectorAll('.Sidebar a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        sidebar.style.display = 'none';
    });
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        sidebar.style.display = 'none';
    });
});




function redirectToURL(url) {
    window.location.href = url;
}

function toggleDarkMode() {
    const body = document.body;
    const nav = document.querySelector('#Nav-bar')
    const pic = document.querySelector('.right')
    body.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    sidebar.classList.toggle('dark-mode');
    pic.innerHTML = ' <img src="./Images/19362653-removebg-preview-transformed.png" alt="">'
    sidebar.style.backgroundColor = 'black'
    sidebarLinks.style.color = 'white'
    
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);





    const darkbtn =  document.querySelector('.dark-mode-toggle')
    darkbtn.innerHTML = '<i class="ri-sun-line"></i>' ;






}

const storedDarkMode = localStorage.getItem('darkMode');
if (storedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    document.querySelector('#Nav-bar').classList.add('dark-mode');
    document.querySelector('.sidebar').classList.add('dark-mode');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.style.color = 'white';
    });
}



// Text to be displayed with typing animation
const nameText = "I'm Rahul";
const roleText = "Front-end Developer";

// Get the heading elements
const nameHeading = document.getElementById('typing-name');
const roleHeading = document.getElementById('typing-role');

// Function to display text with typing animation
function typeText(element, text) {
    let index = 0;
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            // Display one character at a time
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval); // Stop the typing animation
        }
    }, 100); // Adjust typing speed (milliseconds per character)
}

// Start the typing animation for the name and role
typeText(nameHeading, nameText);
setTimeout(() => {
    typeText(roleHeading, roleText);
}, nameText.length * 100); // Start role typing animation after name typing completes






// =====================================================================================================



