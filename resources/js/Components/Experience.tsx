import '../../css/Experience.css';

const experiences = [
    {
        role: 'Freelance Full Stack Developer',
        company: 'Self-Employed',
        meta: 'Jan 2025 – Present · 1 yr 4 mos · Remote',
        desc: 'Delivering custom web solutions for international clients — from landing pages to full-stack applications. Handling end-to-end development, client communication, and project delivery independently.',
        badge: 'Freelancing',
    },
    {
        role: 'Full Stack Developer',
        company: 'Tecno Sphere',
        meta: '2026 – Present · Pakistan',
        desc: 'Building scalable ERP systems using React.js, Node.js, Express, and MySQL. Responsible for architecture design, API integration, and performance optimization.',
    },
    {
        role: 'Frontend Developer',
        company: 'ITS Tech World',
        meta: '2025 – 2026',
        desc: 'Developed ERP dashboards using React + Redux. Focused on UI systems, reusable components, and seamless API integration.',
    },
    {
        role: 'Full Stack Developer',
        company: 'Adroit Light Solutions',
        meta: '2025',
        desc: 'Built full-stack applications using React, Laravel, and MySQL with a focus on clean architecture and responsive UI design.',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="exp-section">

            <div className="exp-header">
                <p className="exp-tag">// Selected Experience</p>
                <div className="exp-glow" />
                <h2 className="exp-title">Professional Journey</h2>
            </div>

            <div className="exp-timeline">
                {experiences.map((exp, i) => (
                    <div className="exp-card" key={i}>
                        <div className="exp-left">
                            <span className="exp-dot" />
                            <span className="exp-line" />
                        </div>

                        <div className="exp-content">
                            {'badge' in exp && (
                                <span className="exp-badge">{exp.badge} · Active</span>
                            )}
                            <div className="exp-role">{exp.role}</div>
                            <div className="exp-company">{exp.company}</div>
                            <div className="exp-meta">{exp.meta}</div>
                            <p className="exp-desc">{exp.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Experience;