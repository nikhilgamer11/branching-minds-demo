document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mock Data: Simulating LearnUpon API response
    const courses = [
        {
            id: 1,
            title: "MTSS Foundations: Tier 1 Best Practices",
            category: "Core Methodology",
            desc: "Learn the essential framework of Multi-Tiered System of Supports and how to apply Tier 1 interventions effectively.",
            objective: "Participants will understand the core components of MTSS, identify evidence-based Tier 1 interventions, and learn how to analyze student data for screening.",
            duration: "2h 30m",
            image: "https://placehold.co/600x400/2F5BEA/ffffff?text=MTSS+Foundations"
        },
        {
            id: 2,
            title: "Data-Based Individualization (DBI)",
            category: "Advanced",
            desc: "A deep dive into using data to individualize instruction for students with intensive needs.",
            objective: "Master the 5 steps of DBI, learn to set realistic goals, and adjust instruction based on progress monitoring data.",
            duration: "3h 15m",
            image: "https://placehold.co/600x400/F4B400/ffffff?text=DBI+Deep+Dive"
        },
        {
            id: 3,
            title: "Social-Emotional Learning in the Classroom",
            category: "Behavior",
            desc: "Strategies for integrating SEL into daily academic instruction to improve student outcomes.",
            objective: "Define the 5 core SEL competencies and implement 3 classroom routines that support emotional regulation.",
            duration: "1h 45m",
            image: "https://placehold.co/600x400/111827/ffffff?text=SEL+Strategies"
        },
        {
            id: 4,
            title: "Universal Design for Learning (UDL)",
            category: "Instruction",
            desc: "Create inclusive learning environments that cater to the variability of all learners.",
            objective: "Apply UDL principles to lesson planning and assessment design.",
            duration: "4h 00m",
            image: "https://placehold.co/600x400/2F5BEA/ffffff?text=UDL+Principles"
        },
        {
            id: 5,
            title: "Leadership in MTSS Implementation",
            category: "Leadership",
            desc: "For administrators: How to lead cultural change and structural implementation of MTSS.",
            objective: "Develop an implementation plan, allocate resources effectively, and build consensus among staff.",
            duration: "5h 00m",
            image: "https://placehold.co/600x400/F4B400/ffffff?text=Leadership"
        },
        {
            id: 6,
            title: "Progress Monitoring Tools 101",
            category: "Assessment",
            desc: "A technical guide to selecting and using the right tools for tracking student growth.",
            objective: "Compare different CBM tools and interpret growth rates correctly.",
            duration: "2h 00m",
            image: "https://placehold.co/600x400/111827/ffffff?text=Progress+Monitoring"
        },
        {
            id: 7,
            title: "Equitable Practices in Special Education",
            category: "Equity",
            desc: "Identifying and addressing disproportionality in special education referrals.",
            objective: "Analyze school data for bias and implement culturally responsive teaching practices.",
            duration: "3h 30m",
            image: "https://placehold.co/600x400/2F5BEA/ffffff?text=Equity+Focus"
        },
        {
            id: 8,
            title: "Family Engagement Strategies",
            category: "Community",
            desc: "Building strong partnerships with families to support student learning.",
            objective: "Create a communication plan that engages families in the MTSS process.",
            duration: "1h 30m",
            image: "https://placehold.co/600x400/F4B400/ffffff?text=Family+Engagement"
        }
    ];

    // 2. DOM Elements
    const gridContainer = document.getElementById('course-grid');
    const gridView = document.getElementById('view-course-grid');
    const detailView = document.getElementById('view-course-detail');
    const backBtn = document.getElementById('back-btn');
    const navCoursesBtn = document.getElementById('nav-courses-btn');

    // 3. Render Grid Function
    function renderGrid() {
        gridContainer.innerHTML = '';
        courses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.onclick = () => showDetail(course); // Click handler

            card.innerHTML = `
                <div class="card-img">
                    <img src="${course.image}" alt="${course.title}">
                </div>
                <div class="card-body">
                    <span class="card-category">${course.category}</span>
                    <h3 class="card-title">${course.title}</h3>
                    <p class="card-desc">${course.desc}</p>
                    <div class="card-footer">
                        <span>${course.duration}</span>
                        <span>Start Learning &rarr;</span>
                    </div>
                </div>
            `;
            gridContainer.appendChild(card);
        });
    }

    // 4. Show Detail Function
    function showDetail(course) {
        // Populate Detail Data
        document.getElementById('detail-title').textContent = course.title;
        document.getElementById('detail-category').textContent = course.category;
        document.getElementById('detail-desc').textContent = course.desc;
        document.getElementById('detail-objective').textContent = course.objective;
        document.getElementById('detail-duration').textContent = course.duration;
        document.getElementById('detail-image').src = course.image;

        // Toggle Views
        gridView.classList.add('hidden');
        detailView.classList.remove('hidden');
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    // 5. Back to Grid Function
    function showGrid() {
        detailView.classList.add('hidden');
        gridView.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    // 6. Event Listeners
    backBtn.addEventListener('click', showGrid);
    navCoursesBtn.addEventListener('click', showGrid); // Navbar link resets view

    // Initialize
    renderGrid();
});
