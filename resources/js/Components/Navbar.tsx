import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = ['about', 'skills', 'projects', 'contact'];

            for (const id of sections) {
                const el = document.getElementById(id);

                if (el) {
                    const rect = el.getBoundingClientRect();

                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(id);

                        return;
                    }
                }
            }

            setActiveSection('home');

        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        setMenuOpen(false);
        const el = document.getElementById(id);

        if (el){ 
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <>
            <style>{`
                .mh-nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 2.5rem;
                    transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
                    border-bottom: 1px solid transparent;
                }
                .mh-nav.scrolled {
                    background: rgba(10, 10, 15, 0.92);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border-bottom-color: #1e293b;
                    box-shadow: 0 4px 32px rgba(0,0,0,0.4);
                }
                .mh-logo {
                    font-family: 'Space Mono', monospace;
                    font-size: 1rem;
                    font-weight: 700;
                    color: #00f5c4;
                    letter-spacing: 2px;
                    cursor: pointer;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    animation: fadeInLeft 0.6s ease both;
                }
                .mh-logo-dot {
                    width: 7px;
                    height: 7px;
                    background: #00f5c4;
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
                .mh-nav-links {
                    display: flex;
                    align-items: center;
                    gap: 2.5rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .mh-nav-links li {
                    animation: fadeInDown 0.6s ease both;
                }
                .mh-nav-links li:nth-child(1) { animation-delay: 0.1s; }
                .mh-nav-links li:nth-child(2) { animation-delay: 0.2s; }
                .mh-nav-links li:nth-child(3) { animation-delay: 0.3s; }
                .mh-nav-links li:nth-child(4) { animation-delay: 0.4s; }
                .mh-nav-link {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.72rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #64748b;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px 0;
                    position: relative;
                    transition: color 0.2s ease;
                }
                .mh-nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: #00f5c4;
                    transition: width 0.3s ease;
                }
                .mh-nav-link:hover,
                .mh-nav-link.active {
                    color: #00f5c4;
                }
                .mh-nav-link:hover::after,
                .mh-nav-link.active::after {
                    width: 100%;
                }
                .mh-hire-btn {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.72rem;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: #0a0a0f;
                    background: #00f5c4;
                    border: none;
                    cursor: pointer;
                    padding: 8px 18px;
                    border-radius: 5px;
                    font-weight: 700;
                    transition: transform 0.2s, box-shadow 0.2s;
                    animation: fadeInDown 0.6s 0.5s ease both;
                }
                .mh-hire-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0,245,196,0.35);
                }
                .mh-hamburger {
                    display: none;
                    flex-direction: column;
                    gap: 5px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 4px;
                }
                .mh-hamburger span {
                    display: block;
                    width: 22px;
                    height: 2px;
                    background: #e2e8f0;
                    border-radius: 2px;
                    transition: all 0.3s ease;
                }
                .mh-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
                .mh-hamburger.open span:nth-child(2) { opacity: 0; }
                .mh-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
                .mh-mobile-menu {
                    display: none;
                    position: fixed;
                    top: 64px;
                    left: 0;
                    right: 0;
                    background: rgba(10,10,15,0.97);
                    backdrop-filter: blur(20px);
                    border-bottom: 1px solid #1e293b;
                    padding: 1.5rem 2.5rem;
                    flex-direction: column;
                    gap: 1.25rem;
                    z-index: 999;
                    animation: slideDown 0.3s ease;
                }
                .mh-mobile-menu.open { display: flex; }
                .mh-mobile-link {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.85rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #64748b;
                    background: none;
                    border: none;
                    cursor: pointer;
                    text-align: left;
                    padding: 8px 0;
                    border-bottom: 1px solid #1e293b;
                    transition: color 0.2s;
                }
                .mh-mobile-link:hover { color: #00f5c4; }
                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-20px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 768px) {
                    .mh-nav-links, .mh-hire-btn { display: none; }
                    .mh-hamburger { display: flex; }
                    .mh-nav { padding: 0 1.5rem; }
                }
            `}</style>

            <nav className={`mh-nav${scrolled ? ' scrolled' : ''}`}>
                <button className="mh-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="mh-logo-dot" />
                    MH.dev
                </button>

                <ul className="mh-nav-links">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                className={`mh-nav-link${activeSection === link.id ? ' active' : ''}`}
                                onClick={() => scrollTo(link.id)}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <button className="mh-hire-btn" onClick={() => scrollTo('contact')}>
                    Hire Me
                </button>

                <button
                    className={`mh-hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </nav>

            <div className={`mh-mobile-menu${menuOpen ? ' open' : ''}`}>
                {navLinks.map((link) => (
                    <button key={link.id} className="mh-mobile-link" onClick={() => scrollTo(link.id)}>
                        {link.label}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Navbar;