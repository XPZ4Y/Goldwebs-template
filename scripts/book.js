		const rawText = document.getElementById('raw-markdown').textContent;
        const target = document.getElementById('render-target');
        const tocList = document.getElementById('toc-list');
        const tocPanel = document.getElementById('toc-panel');
        const backdrop = document.getElementById('menu-backdrop');
        const menuBtn = document.getElementById('mobile-menu-btn');

        // Configure Marked options if needed
        marked.setOptions({
            headerIds: false, // We handle IDs manually
        });

        target.innerHTML = marked.parse(rawText);

        // Generate TOC and Anchor Links
        const headers = target.querySelectorAll('h1, h2, h3');
        headers.forEach((header, i) => {
            // Create safe ID
            const safeId = header.textContent
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            
            header.id = safeId || `section-${i}`;
            
            // TOC Item
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${header.id}`;
            link.textContent = header.textContent;
            
            // Indent based on hierarchy
            if (header.tagName === 'H2') link.style.paddingLeft = '15px';
            if (header.tagName === 'H3') link.classList.add('indent-h3');
            
            link.addEventListener('click', (e) => {
                // Smooth scroll handling
                if (window.innerWidth <= 768) closeMenu();
                
                // Active state handling
                document.querySelectorAll('#toc-list a').forEach(a => a.classList.remove('active-link'));
                link.classList.add('active-link');
            });
            
            li.appendChild(link);
            tocList.appendChild(li);
        });

        // Intersection Observer for Active TOC scrolling
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    document.querySelectorAll('#toc-list a').forEach(a => {
                        a.classList.toggle('active-link', a.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { rootMargin: '-10% 0px -80% 0px' }); // Trigger when header is near top

        headers.forEach(h => observer.observe(h));

        // Mobile Menu Logic
        function toggleMenu() {
            const isActive = tocPanel.classList.contains('active');
            if (isActive) closeMenu(); else openMenu();
        }
        function openMenu() {
            tocPanel.classList.add('active');
            backdrop.classList.add('active');
            menuBtn.textContent = '✕';
        }
        function closeMenu() {
            tocPanel.classList.remove('active');
            backdrop.classList.remove('active');
            menuBtn.textContent = '☰';
        }
        menuBtn.addEventListener('click', toggleMenu);
        backdrop.addEventListener('click', closeMenu);