// Dark/Light Mode Toggle
const toggleThemeBtn = document.createElement('button');
toggleThemeBtn.textContent = '🌙 Dark Mode';
toggleThemeBtn.classList.add('btn', 'btn-secondary', 'position-fixed', 'top-0', 'end-0', 'm-3');

document.body.appendChild(toggleThemeBtn);

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleThemeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Animations (fade-in sections)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Back-to-top Button
const backToTop = document.createElement('button');
backToTop.textContent = '⬆️ Top';
backToTop.classList.add('btn', 'btn-primary', 'position-fixed', 'bottom-0', 'end-0', 'm-3', 'd-none');
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove('d-none');
    } else {
        backToTop.classList.add('d-none');
    }
});

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
