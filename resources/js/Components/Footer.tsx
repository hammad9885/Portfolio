const Footer = () => {
    const year = new Date().getFullYear();

    const links = [
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <style>{`
                .mh-footer {
                    border-top: 1px solid #1e293b;
                    padding: 3rem 2.5rem 2rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .mh-footer-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 2rem;
                    margin-bottom: 2.5rem;
                }
                .mh-footer-brand {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .mh-footer-logo {
                    font-family: 'Space Mono', monospace;
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #00f5c4;
                    letter-spacing: 2px;
                }
                .mh-footer-tagline {
                    font-size: 0.82rem;
                    color: #64748b;
                    line-height: 1.6;
                    max-width: 220px;
                }
                .mh-footer-heading {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.65rem;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: #00f5c4;
                    margin-bottom: 1rem;
                }
                .mh-footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .mh-footer-link-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 0.82rem;
                    color: #64748b;
                    text-align: left;
                    padding: 0;
                    transition: color 0.2s;
                    font-family: 'Syne', sans-serif;
                }
                .mh-footer-link-btn:hover { color: #e2e8f0; }
                .mh-footer-socials {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                }
                .mh-footer-social {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.82rem;
                    color: #64748b;
                    text-decoration: none;
                    transition: color 0.2s;
                    cursor: pointer;
                }
                .mh-footer-social:hover { color: #00f5c4; }
                .mh-footer-social-icon {
                    width: 28px;
                    height: 28px;
                    background: #1e1e2a;
                    border: 1px solid #1e293b;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    transition: border-color 0.2s;
                }
                .mh-footer-social:hover .mh-footer-social-icon {
                    border-color: rgba(0,245,196,0.3);
                }
                .mh-footer-bottom {
                    border-top: 1px solid #1e293b;
                    padding-top: 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }
                .mh-footer-copy {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.72rem;
                    color: #64748b;
                }
                .mh-footer-copy span { color: #00f5c4; }
                .mh-footer-made {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.68rem;
                    color: #3f4f63;
                    letter-spacing: 1px;
                }
                @media (max-width: 768px) {
                    .mh-footer-grid { grid-template-columns: 1fr 1fr; }
                    .mh-footer-brand { grid-column: 1 / -1; }
                }
                @media (max-width: 480px) {
                    .mh-footer-grid { grid-template-columns: 1fr; }
                    .mh-footer { padding: 2.5rem 1.5rem 1.5rem; }
                }
            `}</style>

            <footer className="mh-footer">
                <div className="mh-footer-grid">
                    <div className="mh-footer-brand">
                        <div className="mh-footer-logo">MH.dev</div>
                        <p className="mh-footer-tagline">
                            Full Stack Developer building scalable, modern web applications with clean code and great UX.
                        </p>
                    </div>

                    <div>
                        <p className="mh-footer-heading">Navigation</p>
                        <ul className="mh-footer-links">
                            {links.map((l) => (
                                <li key={l.id}>
                                    <button className="mh-footer-link-btn" onClick={() => scrollTo(l.id)}>
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mh-footer-heading">Connect</p>
                        <div className="mh-footer-socials">
                            {[
                                { icon: 'ti-brand-github', label: 'GitHub' },
                                { icon: 'ti-brand-linkedin', label: 'LinkedIn' },
                                { icon: 'ti-brand-whatsapp', label: 'WhatsApp' },
                                { icon: 'ti-mail', label: 'Email' },
                            ].map((s) => (
                                <div key={s.label} className="mh-footer-social">
                                    <span className="mh-footer-social-icon">
                                        <i className={`ti ${s.icon}`} aria-hidden="true" />
                                    </span>
                                    {s.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mh-footer-bottom flex justify-center items-center">
                    <p className="mh-footer-copy ">
                        © {year} — Designed & Developed by <span>Muhammad Hammad</span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;