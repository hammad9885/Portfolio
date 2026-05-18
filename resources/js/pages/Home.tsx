import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import Experience from '@/components/Experience';
import FeaturedProject from '@/components/FeaturedProject';
import Footer from '@/components/Footer';
import HappyClient from '@/components/HappyClient';
import Navbar from '@/components/Navbar';
import SkillSection from '@/components/SkillSection';
import '../../css/Home.css';

const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Muhammad_Hammad_Resume.pdf';
    link.download = 'Muhammad_Hammad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const FadeIn = ({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.12 },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
            }}
        >
            {children}
        </div>
    );
};

export default function Home() {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const box = document.querySelector('.mh-contact-box') as HTMLElement;
        if (!box) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = box.getBoundingClientRect();
            box.style.setProperty('--mx', `${e.clientX - rect.left}px`);
            box.style.setProperty('--my', `${e.clientY - rect.top}px`);
        };

        const handleMouseLeave = () => {
            box.style.setProperty('--mx', '50%');
            box.style.setProperty('--my', '50%');
        };

        box.addEventListener('mousemove', handleMouseMove);
        box.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            box.removeEventListener('mousemove', handleMouseMove);
            box.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    const openWhatsApp = () => {
        const message =
            'Hi Muhammad Hammad, I came across your portfolio and would like to discuss a project opportunity with you. Are you available?';

        const encodedMessage = encodeURIComponent(message);

        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = `whatsapp://send?phone=923476789885&text=${encodedMessage}`;
        } else {
            window.open(
                `https://web.whatsapp.com/send?phone=923476789885&text=${encodedMessage}`,
                '_blank',
            );
        }
    };

    return (
        <>
            <Head title="Muhammad Hammad — Full Stack Developer" />

            <Navbar theme={theme} setTheme={setTheme} />

            <section className="mh-hero">
                <div className="mh-hero-inner">
                    <div className="mh-hero-tag">
                        <span className="mh-dot" />
                        Available for Work
                    </div>

                    <h1>
                        Muhammad
                        <br />
                        <span>Hammad</span>
                    </h1>

                    <p className="mh-hero-sub">
                        Full Stack Developer — <b>MERN Stack</b> specialist
                        building scalable web applications with modern
                        technologies.
                    </p>

                    <div className="mh-hero-btns">
                        <button
                            className="mh-btn-primary"
                            onClick={() => scrollTo('projects')}
                        >
                            View Projects
                        </button>
                        <button
                            className="mh-btn-ghost"
                            onClick={() => scrollTo('contact')}
                        >
                            Hire Me
                        </button>
                    </div>

                    <div className="mh-hero-stats">
                        {[
                            { num: '15+', label: 'Technologies' },
                            { num: '50+', label: 'Projects Built' },
                            { num: '3+', label: 'Years Coding' },
                        ].map((s) => (
                            <div key={s.label}>
                                <div className="mh-stat-num">{s.num}</div>
                                <div className="mh-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mh-scroll-hint">
                    <div className="mh-scroll-line" />
                    Scroll
                </div>
            </section>

            <section id="about" className="mh-about">
                <FadeIn>
                    <p className="mh-section-tag">// about me</p>
                    <div className="mh-glow-line" />
                    <div className="mh-about-grid">
                        <div>
                            <h2 className="mh-section-title">
                                Passionate
                                <br />
                                Developer.
                            </h2>
                            <div className="mh-about-text">
                                <p>
                                    I am a <b>Full Stack Developer</b> who
                                    handles everything from frontend interfaces
                                    to backend APIs. I love writing clean,
                                    maintainable code and building fast,
                                    scalable applications.
                                </p>
                                <p>
                                    MERN stack is my core expertise, and I am
                                    equally comfortable working with{' '}
                                    <b>Laravel, Next.js, and TypeScript</b>. I
                                    follow best practices on every project.
                                </p>
                                <p>
                                    Learning new technologies is a habit — I
                                    always stay <b>up-to-date</b> with the
                                    latest industry trends and tools.
                                </p>
                            </div>
                        </div>

                        <div className="mh-about-card">
                            {[
                                {
                                    icon: 'ti-user',
                                    label: 'Full Name',
                                    value: 'Muhammad Hammad',
                                },
                                {
                                    icon: 'ti-map-pin',
                                    label: 'Location',
                                    value: 'Gujranwala, Punjab, PK',
                                },
                                {
                                    icon: 'ti-briefcase',
                                    label: 'Role',
                                    value: 'Full Stack Developer',
                                },
                                {
                                    icon: 'ti-language',
                                    label: 'Languages',
                                    value: 'Urdu, English',
                                },
                                {
                                    icon: 'ti-circle-check',
                                    label: 'Status',
                                    value: 'Open to Work ✦',
                                    highlight: true,
                                },
                            ].map((item) => (
                                <div key={item.label} className="mh-about-item">
                                    <div className="mh-about-icon">
                                        <i
                                            className={`ti ${item.icon}`}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div>
                                        <div className="mh-about-label">
                                            {item.label}
                                        </div>
                                        <div
                                            className="mh-about-val"
                                            style={
                                                item.highlight
                                                    ? { color: '#00f5c4' }
                                                    : undefined
                                            }
                                        >
                                            {item.value}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </section>

            <SkillSection />
            <FeaturedProject />
            <Experience />
            <HappyClient />

            <section id="contact" className="mh-contact">
                <FadeIn>
                    <p className="mh-section-tag">// get in touch</p>
                    <div className="mh-glow-line" />
                    <div className="mh-contact-box">
                        <h2>
                            Let's Build
                            <br />
                            <span>Together.</span>
                        </h2>
                        <p>
                            Have a project idea or a freelance / full-time
                            opportunity? I am available — let's talk!
                        </p>
                        <p className="mh-email">mrhammadghg@gmail.com</p>
                        <div className="mh-social-links">
                            {[
                                {
                                    icon: 'ti-brand-github',
                                    label: 'GitHub',
                                    href: 'https://github.com/hammad9885',
                                },
                                {
                                    icon: 'ti-brand-linkedin',
                                    label: 'LinkedIn',
                                    href: 'https://www.linkedin.com/in/muhammad-hammad-dev/',
                                },
                                {
                                    icon: 'ti-brand-whatsapp',
                                    label: 'WhatsApp',
                                    action: openWhatsApp,
                                },
                                {
                                    icon: 'ti-mail',
                                    label: 'Email',
                                    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mrhammadghg@gmail.com&su=Project%20Inquiry%20%7C%20Muhammad%20Hammad&body=Hi%20Muhammad%20Hammad%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0AProject%20Details%3A%0A-%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ARegards%2C',
                                },
                            ].map((s) =>
                                s.action ? (
                                    <button
                                        key={s.label}
                                        onClick={s.action}
                                        className="mh-footer-social"
                                    >
                                        <span className="mh-footer-social-icon">
                                            <i
                                                className={`ti ${s.icon}`}
                                                aria-hidden="true"
                                            />
                                        </span>
                                        {s.label}
                                    </button>
                                ) : (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mh-footer-social"
                                    >
                                        <span className="mh-footer-social-icon">
                                            <i
                                                className={`ti ${s.icon}`}
                                                aria-hidden="true"
                                            />
                                        </span>
                                        {s.label}
                                    </button>
                                ),
                            )}
                        </div>
                        <button className="mh-cv-btn" onClick={downloadCV}>
                            <i className="ti ti-download" /> Download CV
                        </button>
                    </div>
                </FadeIn>
            </section>

            <Footer />
        </>
    );
}