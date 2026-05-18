import {
    House,
    User,
    Code2,
    FolderKanban,
    Briefcase,
    MessageCircle,
    Mail,
    SunMedium,
    Moon,
} from 'lucide-react';

import { useState, useEffect } from 'react';

import '../../css/Navbar.css';

const Navbar = ({
    theme,
    setTheme,
}: {
    theme: 'dark' | 'light';
    setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}) => {
    const [activeSection, setActiveSection] = useState('home');
    // const [theme, setTheme] = useState('dark');

    // useEffect(() => {
    //     document.body.setAttribute('data-theme', theme);
    // }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'about',
                'skills',
                'projects',
                'experience',
                'happyClients',
                'contact',
            ];

            for (const id of sections) {
                const el = document.getElementById(id);

                if (el) {
                    const rect = el.getBoundingClientRect();

                    if (rect.top <= 120 && rect.bottom >= 120) {
                        setActiveSection(id);

                        return;
                    }
                }
            }

            setActiveSection('home');
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const navLinks = [
        {
            label: 'About',
            id: 'about',
            icon: <User size={16} />,
        },
        {
            label: 'Skills',
            id: 'skills',
            icon: <Code2 size={16} />,
        },
        {
            label: 'Projects',
            id: 'projects',
            icon: <FolderKanban size={16} />,
        },
        {
            label: 'Experience',
            id: 'experience',
            icon: <Briefcase size={16} />,
        },
        {
            label: 'Clients',
            id: 'happyClients',
            icon: <MessageCircle size={16} />,
        },
        {
            label: 'Contact',
            id: 'contact',
            icon: <Mail size={16} />,
        },
    ];

    return (
        <nav className="mh-nav">
            <div className="mh-left">MH.dev</div>

            <div className="mh-nav-center">
                <button
                    className={`mh-nav-link ${
                        activeSection === 'home' ? 'active' : ''
                    }`}
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        })
                    }
                >
                    <House size={16} />
                </button>

                <div className="mh-divider"></div>

                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        className={`mh-nav-link ${
                            activeSection === link.id ? 'active' : ''
                        }`}
                        onClick={() => scrollTo(link.id)}
                    >
                        {link.icon}

                        <span>{link.label}</span>
                    </button>
                ))}

                <div className="mh-divider"></div>

                <button
                    className="mh-theme-btn"
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    {theme === 'dark' ? (
                        <SunMedium size={16} />
                    ) : (
                        <Moon size={16} />
                    )}
                </button>
            </div>

            <button
                className="mh-btn-ghost1 mh-time"
                onClick={() => scrollTo('contact')}
            >
                Hire Me
            </button>
        </nav>
    );
};

export default Navbar;