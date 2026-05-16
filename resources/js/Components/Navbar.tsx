import { useState, useEffect } from 'react';
import '../../css/Navbar.css';
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = [
                'about',
                'skills',
                'projects',
                'contact',
                'happyClients',
                'experience',
            ];

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

        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Experience', id: 'experience' },
        { label: 'Happy Clients', id: 'happyClients' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <>
            <nav className={`mh-nav${scrolled ? 'scrolled' : ''}`}>
                <button
                    className="mh-logo"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                >
                    <span className="mh-logo-dot" />
                    MH.dev
                </button>

                <ul className="mh-nav-links">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                className={`mh-nav-link${activeSection === link.id ? 'active' : ''}`}
                                onClick={() => scrollTo(link.id)}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    className="mh-hire-btn"
                    onClick={() => scrollTo('contact')}
                >
                    Hire Me
                </button>

                <button
                    className={`mh-hamburger${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            <div className={`mh-mobile-menu${menuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        className="mh-mobile-link"
                        onClick={() => scrollTo(link.id)}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Navbar;
