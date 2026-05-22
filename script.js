
    /* =============================================
       DATA
    ============================================= */
    const skills = [
      { icon: '🎨', name: 'Graphic Design', desc: 'Crafting compelling visual identities, print materials, and brand systems with precision and purpose.', tags: ['Brand Identity', 'Print Design', 'Layout', 'Typography'] },
      { icon: '✦', name: 'Branding', desc: 'Building holistic brand systems from strategy to visual expression — logos, palettes, voice, and guidelines.', tags: ['Logo Design', 'Brand Strategy', 'Style Guides', 'Identity'] },
      { icon: '⬡', name: 'UI/UX Design', desc: 'Designing user-centered interfaces that balance aesthetic excellence with intuitive interaction design.', tags: ['Figma', 'Wireframing', 'Prototyping', 'User Research'] },
      { icon: '▶', name: 'Video Editing', desc: 'Producing cinematic edits with precise pacing, color grading, and storytelling instinct.', tags: ['Premiere Pro', 'Color Grading', 'Storytelling', 'Sound Design'] },
      { icon: '◈', name: 'Motion Graphics', desc: 'Bringing design to life through purposeful animation, title sequences, and dynamic visual narratives.', tags: ['After Effects', 'Animation', 'Motion Design', 'VFX'] },
      { icon: '◻', name: 'Web Design', desc: 'Designing and developing responsive, high-performance web experiences that convert and captivate.', tags: ['HTML/CSS/JS', 'Responsive', 'SEO', 'Performance'] },
      { icon: '✧', name: 'AI-Assisted Design', desc: 'Leveraging generative AI tools to supercharge creative workflows, concept ideation, and campaign production.', tags: ['Midjourney', 'Stable Diffusion', 'ComfyUI', 'Runway'] },
      { icon: '◑', name: 'Adobe Creative Suite', desc: 'Expert-level proficiency across the full Adobe ecosystem for design, video, and creative production.', tags: ['Photoshop', 'Illustrator', 'InDesign', 'XD'] },
      { icon: '▣', name: 'Design Tools', desc: 'Proficient in modern design and collaboration tools for efficient, scalable creative workflows.', tags: ['Figma', 'Canva', 'Notion', 'Miro'] },
    ];

    const projects = [
      // BRANDING PROJECTS
      { cat: 'Branding', title: 'Digos Solar', desc: 'Complete brand identity for a renewable energy company — logo design, solar panel branding, marketing materials, vehicle graphics, signage, social media assets, and comprehensive brand guidelines for Digos Solar.', tools: ['Illustrator', 'Photoshop', 'Figma'], thumb: 'brand', id: 1 },
      
      { cat: 'Branding', title: 'MIRPOCO', desc: 'Developed a complete corporate branding identity for MIRPOCO, a renewable energy company focused on sustainable solar power solutions in Mindanao. The project included logo design, brand color systems, company stationery, marketing materials, social media graphics, vehicle branding, outdoor signage, and a cohesive visual identity guideline that reflects innovation, sustainability, and clean energy leadership.', tools: ['Illustrator', 'Photoshop', 'Figma'], thumb: 'brand_2', id: 2 },
      
      { cat: 'Branding', title: 'Lovely Travel and Tours', desc: 'Created a vibrant and professional brand identity for Lovely Travel and Tours, designed to capture the excitement of travel and customer-friendly service. The project covered logo branding, promotional materials, social media assets, travel package graphics, ticketing and document templates, signage, and a consistent visual branding system tailored for the tourism and travel industry.', tools: ['Illustrator', 'Photoshop', 'Figma'], thumb: 'brand_3', id: 3 },

      // POSTER PROJECTS
      { cat: 'Poster', title: 'Digos Solar Product Showcase', desc: 'Promotional poster series highlighting solar lighting systems, inverters, batteries, and renewable energy products for Digos Solar. Designed for both print and social media marketing with a clean, modern layout focused on product visibility and customer engagement.', tools: ['Illustrator', 'Photoshop', 'InDesign'], thumb: 'poster', id: 4 },

      { cat: 'Poster', title: 'Digos Solar Power Solutions', desc: 'Corporate marketing poster designed to promote complete solar power solutions for residential and commercial clients. The design emphasizes sustainability, trusted solar brands, and clean energy innovation through professional visual composition and branding.', tools: ['Illustrator', 'Photoshop', 'InDesign'], thumb: 'poster_1', id: 5 },

      { cat: 'Poster', title: 'Clean Energy Installation Campaign', desc: 'Advertising poster created for Digos Solar’s installation and maintenance services, featuring informative layouts, service highlights, and promotional branding aimed at increasing customer awareness and inquiries about renewable energy solutions.', tools: ['Illustrator', 'Photoshop', 'InDesign'], thumb: 'poster_2', id: 6 },
      
      { cat: 'Poster', title: 'APCSM Enrollment Campaign', desc: 'Educational promotional banner created for Assumption Polytechnic College of Southern Mindanao, designed to present academic programs, facilities, and enrollment information through a clean and organized visual layout suitable for social media and print.', tools: ['Illustrator', 'Photoshop', 'InDesign'], thumb: 'poster_3', id: 7    },
      
      // SOCIAL MEDIA PROJECTS
      { cat: 'Social Media', title: 'APCSM Enrollment Campaign', desc: 'Educational promotional banner created for Assumption Polytechnic College of Southern Mindanao, designed to present academic programs, facilities, and enrollment information through a clean and organized visual layout suitable for social media and print.', tools: ['Canva', 'Photoshop'], thumb: 'social', id: 8 },

       { cat: 'Social Media', title: 'APCSM Holiday Announcement', desc: 'Social media announcement design developed for APCSM to communicate official holiday schedules and school advisories. The project focused on maintaining institutional branding while delivering clear and engaging informational content for students and faculty.', tools: ['Canva', 'Photoshop'], thumb: 'social_2', id: 9 },

        { cat: 'Social Media', title: 'APCSM Holy Week Advisory', desc: 'Social media announcement poster created for APCSM to inform students and faculty about Holy Week schedules and academic office advisories. Designed with a clean institutional layout while incorporating religious and seasonal visual elements for clear communication.', tools: ['Canva', 'Photoshop'], thumb: 'social_3', id: 10 },

         { cat: 'Social Media', title: 'APCSM Special Holiday Announcement', desc: 'Official announcement graphic designed for APCSM highlighting regional holiday schedules and office advisories. The project focused on maintaining school branding consistency while delivering important updates through engaging social media visuals.', tools: ['Canva', 'Photoshop'], thumb: 'social_4', id: 11 },


      // PRODUCT DESIGN PROJECTS
      { cat: 'Product Design', title: 'JK Brands – Caiavita Product Label Design', desc: 'Product packaging and label design created for Caiavita herbal supplements under JK Brands. The project included bottle mockups, branding direction, label layout, and clean product presentation tailored for health and wellness marketing.', tools: ['Photoshop', 'Runway'], thumb: 'product', id: 12},
      
      { cat: 'Product Design', title: 'JK Brands – Penta Herbs Packaging Design', desc: 'Modern supplement packaging design for Penta Herbs, developed to establish a trustworthy and professional wellness product identity. The design combines minimalist aesthetics with informative labeling and commercial-ready mockup presentation.', tools: ['Photoshop', 'Runway'], thumb: 'product_1', id: 13},
      
      { cat: 'Product Design', title: 'JK Brands – Rushin Product Branding', desc: 'Complete product visualization and packaging concept for Rushin herbal supplements, including label design, mockups, and promotional presentation. Focused on creating a clean, marketable identity suitable for digital advertising and e-commerce promotion.', tools: ['Photoshop', 'Runway'], thumb: 'product_2', id: 14},
      
         
      // VIDEO PROJECTS
            {
          cat: 'Video',
          title: 'Digos Solar Battery Backup Reel',
          desc: 'Promotional video reel created for Digos Solar focusing on reliable battery backup solutions and uninterrupted power supply. The project combined motion graphics, cinematic visuals, product highlights, and engaging storytelling optimized for social media advertising and brand awareness campaigns.',
          tools: ['Premiere Pro', 'After Effects', 'DaVinci'],
          thumb: 'video',
          video: 'vid/v1.mp4',
          id: 15
        },

  
            {
          cat: 'Video',
          title: 'Product Showcase TikTok Advertisement',
          desc: 'Short-form TikTok product advertisement featuring a stylish backpack product showcase designed for social media engagement and modern e-commerce marketing. The video focused on dynamic transitions, trend-based editing, product close-ups, and fast-paced visuals tailored for TikTok audiences.',
          tools: ['Premiere Pro', 'After Effects', 'DaVinci'],
          thumb: 'video',
          video: 'vid/v3.mp4',
          id: 16
        },

            {
          cat: 'Video',
          title: 'Product Showcase TikTok Advertisement',
          desc: 'Short-form TikTok product advertisement featuring a stylish backpack product showcase designed for social media engagement and modern e-commerce marketing. The video focused on dynamic transitions, trend-based editing, product close-ups, and fast-paced visuals tailored for TikTok audiences.',
          tools: ['Premiere Pro', 'After Effects', 'DaVinci'],
          thumb: 'video',
          video: 'vid/v2.mp4',
          id: 17
        },
       
            {
          cat: 'Video',
          title: 'Product Showcase TikTok Advertisement',
          desc: 'Short-form TikTok product advertisement featuring a stylish backpack product showcase designed for social media engagement and modern e-commerce marketing. The video focused on dynamic transitions, trend-based editing, product close-ups, and fast-paced visuals tailored for TikTok audiences.',
          tools: ['Premiere Pro', 'After Effects', 'DaVinci'],
          thumb: 'video',
          video: 'vid/v4.mp4',
          id: 18
        },
       
 ];
     
      
      // { cat: 'Web Design', title: 'Noir Architecture', desc: 'Cinematic portfolio website for a luxury architecture firm featuring parallax storytelling and immersive gallery.', tools: ['HTML/CSS', 'JS', 'Figma'], thumb: 'web', id: 7 },
   

    const filterCats = ['All', 'Branding', 'Poster', 'Social Media', 'Product Design', 'Video'];

    const experience = [
      { date: '2023 — Present', role: 'Vocational Trainer', company: 'Assumption Polytechnic College of Southern mindanao', desc: 'Teaching and mentoring students in graphic design, multimedia production, and digital technologies through hands-on training, project-based learning, and industry-focused creative activities. Responsible for developing instructional materials, guiding student projects, and integrating modern design tools and AI-assisted workflows into classroom instruction.', active: true },
      
      { date: '2021 — 2023', role: 'Senior Graphic Designer', company: 'Digital Agency', desc: 'Led the creative direction and execution of branding, social media campaigns, promotional materials, souvenir programs, flyers, brochures, and digital advertisements for various clients. Collaborated with marketing teams to produce visually engaging content that strengthened brand identity and improved audience engagement across print and digital platforms.', active: false },
      
      { date: '2018 — 2021', role: 'Junior Graphic Designer', company: 'Imageworld Digital Printing Inc.', desc: 'Created print-ready and digital design materials including tarpaulins, brochures, business cards, posters, and marketing assets for corporate and local business clients. Assisted in layout design, photo editing, production preparation, and brand identity development while gaining experience in large-format printing and commercial advertising workflows.', active: false },
    ];

    const expFeatured = [
      { role: 'Brand Identity System', company: 'Solar Panel', date: '2023', desc: 'Designed and developed visual branding and marketing materials for Digos Solar, including promotional posters, product advertisements, installation showcases, and social media campaign assets. The project focused on creating clean, modern, and impactful visuals that communicate renewable energy solutions and strengthen brand presence across digital and print platforms.', tags: ['Branding', 'Marketing', 'Social Media', 'Print Design'] },
      
      { role: 'JK Brands / APCSM', company: '', date: '2023', desc: 'Created promotional graphics, product packaging mockups, announcement materials, and social media campaigns for wellness products and educational institutions. The work combined modern visual design, branding consistency, and audience-focused layouts tailored for digital marketing and promotional communication.', tags: ['Packaging', 'Graphic Design', 'Advertising', 'Social Media'] },
    ];

    const services = [
      { icon: '◈', title: 'Branding Design', desc: 'Strategic brand identity systems built from the ground up — logo, color, typography, and comprehensive brand guidelines for lasting impact.', list: ['Logo & Identity', 'Brand Guidelines', 'Visual Systems', 'Brand Strategy'] },
      { icon: '▣', title: 'Social Media Design', desc: 'Scroll-stopping content templates, campaign visuals, and social identity systems engineered for engagement and brand consistency.', list: ['Template Systems', 'Campaign Visuals', 'Reels & Stories', 'Content Strategy'] },
      { icon: '◻', title: 'Web Design', desc: 'High-converting, visually premium websites designed and built with modern frameworks — focused on performance, aesthetics, and user experience.', list: ['UI/UX Design', 'Responsive Dev', 'Landing Pages', 'SEO Optimization'] },
      { icon: '▶', title: 'Video Editing', desc: 'Cinematic video production, corporate reels, social media videos, and documentary-style storytelling with professional color grading.', list: ['Corporate Videos', 'Social Reels', 'Color Grading', 'Motion Titles'] },
      { icon: '✧', title: 'AI Creative Direction', desc: 'Cutting-edge AI-assisted design workflows for concept ideation, campaign production, and generative content at scale — faster and more innovative.', list: ['AI Image Generation', 'Concept Ideation', 'Campaign Production', 'Workflow Automation'] },
      { icon: '✦', title: 'Content Design', desc: 'End-to-end content design for presentations, editorial layouts, infographics, and digital publications — with a strategic communication lens.', list: ['Presentations', 'Infographics', 'Editorial Layout', 'Pitch Decks'] },
    ];

    const testimonials = [
      { text: 'Working with Arlie was a great experience because of his creativity, professionalism, and ability to deliver high-quality designs that truly represented our brand. His work helped strengthen Digos Solar’s visual identity and improved how we connect with our customers online and offline.', name: 'Jeremy Brace', role: 'CEO | Digos Solar', initials: 'JB' },
      { text: 'Arlie consistently brings fresh ideas and strong attention to detail in every project he handles. His dedication to creating clean, modern, and effective designs made him a valuable creative partner for our branding and product campaigns.',  name: 'Carlos Abiera', role: 'Senior Designer | JK-Brands', initials: 'CA' },
      { text: 'Arlie demonstrated excellent creativity and reliability during his time with our team, especially in handling print and advertising materials. He is hardworking, easy to work with, and always willing to improve his craft to deliver better results.', name: 'Ariel Jesuro', role: 'Department Supervisor | Imageworld Digital Printing Inc.', initials: 'AJ' },
      { text: 'Arlie has shown passion and commitment both as a designer and educator, inspiring students through practical and creative learning experiences. His professionalism, patience, and industry knowledge make him a valuable member of the institution.', name: 'Fe Q Emuy', role: 'School head | APCSM', initials: 'KT' },
    ];

    const marqueeItems = ['Graphic Design', 'Brand Identity', 'Motion Graphics', 'Web Development', 'AI-Assisted Design', 'UI/UX', 'Video Production', 'Multimedia Design', 'Creative Direction'];

    /* =============================================
       LOADER
    ============================================= */
    const loaderEl = document.getElementById('loader');
    const loaderPct = document.getElementById('loader-pct');
    let pct = 0;
    const ticker = setInterval(() => {
      pct = Math.min(pct + Math.random() * 12, 100);
      loaderPct.textContent = String(Math.floor(pct)).padStart(3, '0');
      if (pct >= 100) {
        clearInterval(ticker);
        setTimeout(() => { loaderEl.classList.add('hidden'); }, 200);
      }
    }, 80);

    /* =============================================
       CUSTOM CURSOR
    ============================================= */
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    });

    function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('a, button, .project-card, .filter-btn, .skill-card').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    /* =============================================
       SCROLL PROGRESS
    ============================================= */
    const progressEl = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      progressEl.style.width = `${(scrolled / total) * 100}%`;
    }, { passive: true });

    /* =============================================
       NAVBAR
    ============================================= */
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);

      // Active link
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    }, { passive: true });

    /* =============================================
       MOBILE MENU
    ============================================= */
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileNav.classList.toggle('open', menuOpen);
      menuBtn.setAttribute('aria-expanded', menuOpen);
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        mobileNav.classList.remove('open');
      });
    });

    /* =============================================
       REVEAL ON SCROLL
    ============================================= */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* =============================================
       MARQUEE
    ============================================= */
    const track = document.getElementById('marqueeTrack');
    const full = [...marqueeItems, ...marqueeItems];
    track.innerHTML = full.map(t =>
      `<span class="marquee-item"><span class="marquee-dot"></span>${t}</span>`
    ).join('');

    /* =============================================
       SKILLS
    ============================================= */
    const skillsGrid = document.getElementById('skillsGrid');
    skills.forEach((s, i) => {
      const el = document.createElement('div');
      el.className = `skill-card reveal reveal-delay-${(i % 3) + 1}`;
      el.innerHTML = `
        <div class="skill-icon">${s.icon}</div>
        <div class="skill-name">${s.name}</div>
        <div class="skill-desc">${s.desc}</div>
        <div class="skill-tags">${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
      `;
      skillsGrid.appendChild(el);
      observer.observe(el);
    });

    /* =============================================
       PROJECTS
    ============================================= */
    const filterWrap = document.getElementById('projectsFilter');
    const projectsGrid = document.getElementById('projectsGrid');
    let activeFilter = 'All';

    filterCats.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `filter-btn${cat === 'All' ? ' active' : ''}`;
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        activeFilter = cat;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects();
      });
      filterWrap.appendChild(btn);
    });

    function renderProjects() {
      const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.cat === activeFilter);
      projectsGrid.innerHTML = '';
      filtered.forEach((p, i) => {
        const el = document.createElement('div');
        el.className = 'project-card reveal';
       el.innerHTML = `
  <div class="project-thumb">

    ${
      p.video
        ? `
          <video class="project-media" muted loop playsinline preload="metadata">
            <source src="${p.video}" type="video/mp4">
          </video>
        `
        : `
          <div class="project-thumb-inner thumb-${p.thumb}"></div>
        `
    }

    <div class="project-overlay">
      <div class="project-overlay-btn">View Case Study</div>
    </div>

  </div>

  <div class="project-info">
    <div class="project-cat">${p.cat}</div>
    <div class="project-title">${p.title}</div>
    <div class="project-desc">${p.desc}</div>
    <div class="project-tools">
      ${p.tools.map(t => `<span class="project-tool">${t}</span>`).join('')}
    </div>
  </div>
`;
        el.addEventListener('click', () => openModal(p));
        projectsGrid.appendChild(el);
        
        // video hover play/pause logic
        const video = el.querySelector('.project-media');

              if (video) {
                el.addEventListener('mouseenter', () => {
                  video.play();
                });

                el.addEventListener('mouseleave', () => {
                  video.pause();
                  video.currentTime = 0;
                });
              }
        observer.observe(el);
      });
    }
    renderProjects();

    function openModal(p) {
      const modal = document.getElementById('projectModal');
      const content = document.getElementById('modalContent');
      content.innerHTML = `
        <button class="modal-close" id="modalClose">×</button>
        <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">${p.cat}</div>
        <div style="font-family:var(--font-display);font-size:32px;font-weight:800;letter-spacing:-0.03em;color:var(--text);margin-bottom:16px;">${p.title}</div>
       
            <div style="aspect-ratio:16/9;background:var(--bg-3);border-radius:var(--radius-lg);margin-bottom:24px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);overflow:hidden;">

              ${
                p.video
                  ? `
                    <video 
                      class="modal-video"
                      controls
                      autoplay
                      muted
                      playsinline
                      style="width:100%;height:100%;object-fit:contain;background:#000;">
                      <source src="${p.video}" type="video/mp4">
                    </video>
                  `
                  : `
                    <div class="project-thumb-inner thumb-${p.thumb}" 
                        style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-lg);overflow:hidden;">
                      <div style="font-family:var(--font-display);font-size:80px;font-weight:800;opacity:0.1;color:var(--text);">
                        ${p.title.split(' ').map(w => w[0]).join('').slice(0,2)}
                      </div>
                    </div>
                  `
              }

            </div>



        <div style="font-size:15px;color:var(--text-muted);line-height:1.9;margin-bottom:24px;">${p.desc} This project involved comprehensive strategy, visual design, and creative execution across multiple touchpoints, resulting in measurable brand and business impact.</div>
        <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:12px;">Tools Used</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">${p.tools.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
      `;
      modal.classList.add('open');
      document.getElementById('modalClose').addEventListener('click', closeModal);
    }
    function closeModal() {
      document.getElementById('projectModal').classList.remove('open');
    }
    document.getElementById('projectModal').addEventListener('click', e => {
      if (e.target === document.getElementById('projectModal')) closeModal();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    /* =============================================
       EXPERIENCE
    ============================================= */
    const timeline = document.getElementById('timeline');
    experience.forEach(e => {
      const el = document.createElement('div');
      el.className = `timeline-item${e.active ? ' active' : ''}`;
      el.innerHTML = `
        <div class="tl-date">${e.date}</div>
        <div class="tl-role">${e.role}</div>
        <div class="tl-company">${e.company}</div>
        <div class="tl-desc">${e.desc}</div>
      `;
      timeline.appendChild(el);
    });

    const featuredWrap = document.getElementById('expFeatured');
    expFeatured.forEach(e => {
      const el = document.createElement('div');
      el.className = 'exp-card';
      el.innerHTML = `
        <div class="exp-card-top">
          <div class="exp-card-role">${e.role}</div>
          <div class="exp-card-date">${e.date}</div>
        </div>
        <div class="exp-card-company">${e.company}</div>
        <div class="exp-card-desc">${e.desc}</div>
        <div class="exp-card-tags">${e.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
      `;
      featuredWrap.appendChild(el);
    });

    /* =============================================
       SERVICES
    ============================================= */
    const servicesGrid = document.getElementById('servicesGrid');
    services.forEach((s, i) => {
      const el = document.createElement('div');
      el.className = 'service-card reveal reveal-delay-' + ((i % 3) + 1);
      el.innerHTML = `
        <div class="service-num">${String(i + 1).padStart(2, '0')}</div>
        <div class="service-icon">${s.icon}</div>
        <div class="service-title">${s.title}</div>
        <div class="service-desc">${s.desc}</div>
        <ul class="service-list">${s.list.map(item => `<li>${item}</li>`).join('')}</ul>
      `;
      servicesGrid.appendChild(el);
      observer.observe(el);
    });

    /* =============================================
       TESTIMONIALS CAROUSEL
    ============================================= */
    const testiTrack = document.getElementById('testimonialsTrack');
    let testiIdx = 0;

    testimonials.forEach(t => {
      const el = document.createElement('div');
      el.className = 'testimonial-card';
      el.innerHTML = `
        <div class="testimonial-quote">"</div>
        <p class="testimonial-text">${t.text}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.initials}</div>
          <div>
            <div class="author-name">${t.name}</div>
            <div class="author-role">${t.role}</div>
          </div>
        </div>
      `;
      testiTrack.appendChild(el);
    });

    function updateTesti() {
      const cardW = testiTrack.children[0].offsetWidth + 24;
      testiTrack.style.transform = `translateX(-${testiIdx * cardW}px)`;
    }
    document.getElementById('testiNext').addEventListener('click', () => {
      testiIdx = Math.min(testiIdx + 1, testimonials.length - 2);
      updateTesti();
    });
    document.getElementById('testiPrev').addEventListener('click', () => {
      testiIdx = Math.max(testiIdx - 1, 0);
      updateTesti();
    });

    /* =============================================
       CONTACT FORM
    ============================================= */
    // for testing purposes, commenting out contact form submission logic, might need to uncomment later when form backend is set up
    // document.getElementById('contactForm').addEventListener('submit', e => {
    //   e.preventDefault();
    //   const btn = e.target.querySelector('.btn-submit');
    //   btn.textContent = 'Message Sent ✓';
    //   btn.style.background = '#2d6a4f';
    //   setTimeout(() => {
    //     btn.innerHTML = 'Send Message <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    //     btn.style.background = '';
    //     e.target.reset();
    //   }, 3000);
    // });

document.addEventListener("DOMContentLoaded", function () {

  // Initialize EmailJS
  emailjs.init({
    publicKey: "pv7KxaqzUXCPmWvO9"
  });

  const form = document.getElementById("contactForm");
  if (!form) return;

  const btn = form.querySelector(".btn-submit");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const originalBtn = btn.innerHTML;

    // Get values
    const fname = form.fname.value.trim();
    const lname = form.lname.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;
    const message = form.message.value.trim();

    // Validation
    if (!fname || !lname || !email || !message) {

      btn.innerText = "Please fill all fields";
      btn.style.background = "#c1121f";

      setTimeout(() => {
        btn.innerHTML = originalBtn;
        btn.style.background = "";
      }, 2500);

      return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (!emailPattern.test(email)) {

      btn.innerText = "Invalid Email";
      btn.style.background = "#c1121f";

      setTimeout(() => {
        btn.innerHTML = originalBtn;
        btn.style.background = "";
      }, 2500);

      return;
    }

    // Loading state
    btn.disabled = true;
    btn.innerText = "Sending...";

    // Send Email
    emailjs.send("service_e63dyf9", "template_np06u9m", {
      first_name: fname,
      last_name: lname,
      email: email,
      service: service,
      message: message
    })

    // Auto reply
    .then(() => {
      return emailjs.send("service_e63dyf9", "template_6z06g2k", {
        first_name: fname,
        last_name: lname,
        email: email,
        service: service,
        message: message
      });
    })

    // Success
    .then(() => {

      btn.innerText = "Message Sent ✓";
      btn.style.background = "#2d6a4f";

      form.reset();

    })

    // Error
    .catch((err) => {

      console.error(err);

      btn.innerText = "Failed to Send";
      btn.style.background = "#c1121f";

    })

    // Reset button
    .finally(() => {

      setTimeout(() => {
        btn.innerHTML = `
          Send Message
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"/>
          </svg>
        `;

        btn.style.background = "";
        btn.disabled = false;

      }, 3000);

    });

  });

});


    /* =============================================
       SMOOTH SCROLL FOR ANCHOR LINKS
    ============================================= */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });




    // commenting out some code for testing purposes might need to uncomment later

    // thumbs up for arlie vilan's creativity and design skills, this portfolio is looking really impressive! the use of gradients for project thumbnails adds a nice touch of visual interest while keeping the focus on the content. the dynamic generation of project cards with relevant tools and descriptions makes it easy for visitors to understand the scope of each project. overall, great work on showcasing your skills and projects in a clean and engaging way!

    
    // <div class="project-thumb-label">${p.title.split(' ').map(w => w[0]).join('').slice(0,2)}</div>




    // modal content for project details, can include video or image based on project data
    //  <div style="aspect-ratio:16/9;background:var(--bg-3);border-radius:var(--radius-lg);margin-bottom:24px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);">
    //       <div class="project-thumb-inner thumb-${p.thumb}" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-lg);overflow:hidden;">
    //         <div style="font-family:var(--font-display);font-size:80px;font-weight:800;opacity:0.1;color:var(--text);">${p.title.split(' ').map(w => w[0]).join('').slice(0,2)}</div>
    //       </div>
    //     </div>