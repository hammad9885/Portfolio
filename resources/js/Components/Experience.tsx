const Experience = () => {
    return (
        <section id="experience" className="exp-section">
            <style>{`
                .exp-section {
                    padding: 4rem 2rem;
                    max-width: 1000px;
                    margin: 0 auto;
                    color: #e2e8f0;
                }

                .exp-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
                    color: #00f5c4;
                    letter-spacing: 1px;
                }

                .exp-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                }

                .exp-card {
                    background: #111827;
                    border: 1px solid #1e293b;
                    padding: 1.5rem;
                    border-radius: 12px;
                    transition: 0.3s;
                }

                .exp-card:hover {
                    border-color: rgba(0,245,196,0.4);
                    transform: translateY(-3px);
                }

                .exp-role {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #fff;
                }

                .exp-company {
                    color: #00f5c4;
                    font-size: 0.9rem;
                    margin-top: 4px;
                }

                .exp-meta {
                    font-size: 0.75rem;
                    color: #94a3b8;
                    margin-bottom: 10px;
                }

                .exp-desc {
                    font-size: 0.85rem;
                    color: #cbd5e1;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .exp-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <h2 className="exp-title">Experience</h2>

            <div className="exp-grid">

                <div className="exp-card">
                    <div className="exp-role">Full Stack Developer (Current)</div>
                    <div className="exp-company">Tecno Sphere</div>
                    <div className="exp-meta">05/2026 – Present | Pakistan</div>
                    <p className="exp-desc">
                        Working as a Full Stack Developer building scalable ERP systems using
                        React.js , Redux ,Node js, Express js or mongoDB. Responsible for developing reusable components,
                        integrating REST APIs, and improving system performance and UX.
                    </p>
                </div>

                <div className="exp-card">
                    <div className="exp-role">Frontend Developer</div>
                    <div className="exp-company">ITS Tech World</div>
                    <div className="exp-meta">12/2025 - 04/2026 </div>
                    <p className="exp-desc">
                        Developed ERP management system UI using React (TSX) and Redux.
                        Integrated APIs and built responsive dashboards for business data
                        management and workflows.
                    </p>
                </div>

                <div className="exp-card">
                    <div className="exp-role">Full Stack Developer</div>
                    <div className="exp-company">Adroit Light Solutions</div>
                    <div className="exp-meta">04/2025 – 12/2025</div>
                    <p className="exp-desc">
                        Built responsive web interfaces using React.js, Next.js, Php, Laravel or MySql.
                        Focused on performance optimization, UI consistency, and modern
                        frontend architecture.
                    </p>
                </div>

                <div className="exp-card">
                    <div className="exp-role">Freelance Full Stack Developer (Current)</div>
                    <div className="exp-company">Self-Employed</div>
                    <div className="exp-meta">1+ Year Experience</div>
                    <p className="exp-desc">
                        Delivered multiple client projects including business websites,
                        dashboards, and Next.js applications. Specialized in React, Tailwind,
                        API integration, and responsive UI development.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Experience;