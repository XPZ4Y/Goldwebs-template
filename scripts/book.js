// --- VARIABLES ---
        const target = document.getElementById('render-target');
        const tocList = document.getElementById('toc-list');
        const tocPanel = document.getElementById('toc-panel');
        const backdrop = document.getElementById('menu-backdrop');
        const menuBtn = document.getElementById('mobile-menu-btn');
        const homeBtn = document.getElementById('home-btn');
        
        // Grab the embedded "Home" markdown
        const homeContent = document.getElementById('home-markdown').textContent;

        // --- CORE FUNCTIONS ---

        // 1. Render Markdown & Build ToC
        // 1. Render Markdown & Build ToC
function renderContent(markdownText) {
    // Broom away the old dust
    tocList.innerHTML = '';
    
    // Parse the fresh scribbles
    target.innerHTML = marked.parse(markdownText);
    
    // Hunt for headers to build the map
    const headers = target.querySelectorAll('h1, h2, h3');
    headers.forEach((header, i) => {
        // Create a safe ID (no spaces or weird demon runes)
        const safeId = header.textContent.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || `section-${i}`;
        header.id = safeId;

        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${header.id}`;
        link.textContent = header.textContent;
        if (header.tagName === 'H3') link.classList.add('indent-h3');
        
        // --- THE FIX IS HERE ---
        link.addEventListener('click', (e) => {
            // STOP! Don't let the browser run wild and forget the file
            e.preventDefault();
            
            // Smoothly slide to the target like a greased pig
            header.scrollIntoView({ behavior: 'smooth' });
            
            // Update the URL hash manually, keeping the current 'note' state in the pocket
            // (Uses history.state so we don't lose the filename)
            if (history.state) {
                 history.pushState(history.state, '', `#${safeId}`);
            }

            // If on mobile, slap the menu shut
            if(window.innerWidth <= 768) closeMenu();
        });

        li.appendChild(link);
        tocList.appendChild(li);
    });
    
    // Re-hook the magic portals (internal links)
    attachInternalLinks();
}

        // 2. Intercept Links to load .md files
        function attachInternalLinks() {
            const links = target.querySelectorAll('a');
            links.forEach(link => {
                const href = link.getAttribute('href');
                // If it points to a markdown file
                if (href && href.endsWith('.md')) {
                    link.addEventListener('click', async (e) => {
                        e.preventDefault();
                        await loadFile(href);
                    });
                }
            });
        }

        // 3. Fetch File & Update URL
        async function loadFile(filename) {
            try {
                // Show loading state
                target.innerHTML = '<p style="color:var(--text-muted)">Loading...</p>';
                
                const response = await fetch(filename);
                if (!response.ok) throw new Error("File not found");
                
                const text = await response.text();
                
                renderContent(text);
                
                // Update URL without reloading page
                const newUrl = `?note=${filename}`;
                history.pushState({ note: filename }, '', newUrl);
                
                // Scroll top
                target.scrollTop = 0;
                if(window.innerWidth <= 768) closeMenu();

            } catch (err) {
                target.innerHTML = `<h1>Error 404</h1><p>Could not load <code>${filename}</code>. Is the file path correct?</p>`;
            }
        }

        // 4. Load Home Directory
        function loadHome() {
            renderContent(homeContent);
            history.pushState({ note: null }, '', window.location.pathname);
        }

        // --- INIT & EVENTS ---

        // Handle Browser Back/Forward buttons
        window.addEventListener('popstate', (e) => {
            const note = e.state ? e.state.note : null;
            if (note) loadFile(note);
            else renderContent(homeContent);
        });

        // Initial Load: Check if URL has ?note=...
        const urlParams = new URLSearchParams(window.location.search);
        const initialNote = urlParams.get('note');

        if (initialNote) {
            loadFile(initialNote);
        } else {
            renderContent(homeContent);
        }

        // UI Event Listeners
        homeBtn.addEventListener('click', loadHome);
        menuBtn.addEventListener('click', toggleMenu);
        backdrop.addEventListener('click', closeMenu);

        function toggleMenu() { tocPanel.classList.contains('active') ? closeMenu() : openMenu(); }
        function openMenu() { tocPanel.classList.add('active'); backdrop.classList.add('active'); menuBtn.textContent = '✕'; }
        function closeMenu() { tocPanel.classList.remove('active'); backdrop.classList.remove('active'); menuBtn.textContent = '☰'; }