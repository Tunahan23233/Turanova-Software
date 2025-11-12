        // Sayfa içi bağlantılar için smooth scroll (isteğe bağlı)
    const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.substring(1);
            const section = document.getElementById(id);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    })
})