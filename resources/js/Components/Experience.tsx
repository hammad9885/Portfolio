import '../../css/Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="exp-section">
            <p className="mh-section-tag">// Selected Experience</p>

            <div className="mh-glow-line" />
            <h2 className="mh-section-title">Experience</h2>
            <div className="exp-grid">
                <div className="exp-card">
                    <div className="exp-role">
                        Full Stack Developer (Current)
                    </div>
                    <div className="exp-company">Tecno Sphere</div>
                    <div className="exp-meta">05/2026 – Present | Pakistan</div>
                    <p className="exp-desc">
                        Working as a Full Stack Developer building scalable ERP
                        systems using React.js , Redux ,Node js, Express js or
                        mongoDB. Responsible for developing reusable components,
                        integrating REST APIs, and improving system performance
                        and UX.
                    </p>
                </div>

                <div className="exp-card">
                    <div className="exp-role">Frontend Developer</div>
                    <div className="exp-company">ITS Tech World</div>
                    <div className="exp-meta">12/2025 - 04/2026 </div>
                    <p className="exp-desc">
                        Developed ERP management system UI using React (TSX) and
                        Redux. Integrated APIs and built responsive dashboards
                        for business data management and workflows.
                    </p>
                </div>

                <div className="exp-card">
                    <div className="exp-role">Full Stack Developer</div>
                    <div className="exp-company">Adroit Light Solutions</div>
                    <div className="exp-meta">04/2025 – 12/2025</div>
                    <p className="exp-desc">
                        Built responsive web interfaces using React.js, Next.js,
                        Php, Laravel or MySql. Focused on performance
                        optimization, UI consistency, and modern frontend
                        architecture.
                    </p>
                </div>

                <div className="exp-card">
                    <div className="exp-role">
                        Freelance Full Stack Developer (Current)
                    </div>
                    <div className="exp-company">Self-Employed</div>
                    <div className="exp-meta">1+ Year Experience</div>
                    <p className="exp-desc">
                        Delivered multiple client projects including business
                        websites, dashboards, and Next.js applications.
                        Specialized in React, Tailwind, API integration, and
                        responsive UI development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
