import { Head } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import FeaturedProject from '@/Components/FeaturedProject';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import SkillSection from '@/Components/SkillSection';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.12 }
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
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            <Head title="Muhammad Hammad — Full Stack Developer" />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');
                @import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css');

                *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

                :root {
                    --bg:     #0a0a0f;
                    --bg2:    #111118;
                    --bg3:    #16161f;
                    --bg4:    #1e1e2a;
                    --neon:   #00f5c4;
                    --neon2:  #7c3aed;
                    --text:   #e2e8f0;
                    --muted:  #64748b;
                    --border: #1e293b;
                }

                html { scroll-behavior: smooth; }

                body {
                    background: var(--bg);
                    color: var(--text);
                    font-family: 'Syne', sans-serif;
                    line-height: 1.6;
                    overflow-x: hidden;
                }

                /* ── Hero ── */
                .mh-hero {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    padding: 8rem 2.5rem 4rem;
                }
                .mh-hero::before {
                    content: '';
                    position: absolute;
                    top: -220px; right: -220px;
                    width: 560px; height: 560px;
                    background: radial-gradient(circle, rgba(0,245,196,0.07) 0%, transparent 70%);
                    pointer-events: none;
                    animation: floatA 8s ease-in-out infinite;
                }
                .mh-hero::after {
                    content: '';
                    position: absolute;
                    bottom: -200px; left: -120px;
                    width: 480px; height: 480px;
                    background: radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%);
                    pointer-events: none;
                    animation: floatB 10s ease-in-out infinite;
                }
                @keyframes floatA {
                    0%, 100% { transform: translate(0, 0); }
                    50%       { transform: translate(-20px, 20px); }
                }
                @keyframes floatB {
                    0%, 100% { transform: translate(0, 0); }
                    50%       { transform: translate(20px, -20px); }
                }
                .mh-hero-inner { max-width: 1000px; margin: 0 auto; width: 100%; }

                .mh-hero-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(0,245,196,0.08);
                    border: 1px solid rgba(0,245,196,0.2);
                    color: var(--neon);
                    padding: 6px 16px;
                    border-radius: 100px;
                    font-size: 0.72rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 2rem;
                    font-family: 'Space Mono', monospace;
                    animation: fadeUp 0.7s 0.1s ease both;
                }
                .mh-dot {
                    width: 6px; height: 6px;
                    background: var(--neon);
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }

                .mh-hero h1 {
                    font-size: clamp(2.8rem, 7vw, 5rem);
                    font-weight: 800;
                    line-height: 1.05;
                    margin-bottom: 1.25rem;
                    animation: fadeUp 0.7s 0.2s ease both;
                    letter-spacing: -1px;
                }
                .mh-hero h1 span { color: var(--neon); }

                .mh-hero-sub {
                    font-size: clamp(0.95rem, 2vw, 1.2rem);
                    color: var(--muted);
                    margin-bottom: 2.5rem;
                    max-width: 520px;
                    font-weight: 400;
                    animation: fadeUp 0.7s 0.3s ease both;
                }
                .mh-hero-sub b { color: var(--text); }

                .mh-hero-btns {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    animation: fadeUp 0.7s 0.4s ease both;
                }
                .mh-btn-primary {
                    background: var(--neon);
                    color: #0a0a0f;
                    padding: 13px 30px;
                    border: none;
                    border-radius: 6px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    cursor: pointer;
                    font-family: 'Space Mono', monospace;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .mh-btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 28px rgba(0,245,196,0.35);
                }
                .mh-btn-ghost {
                    background: transparent;
                    color: var(--text);
                    padding: 13px 30px;
                    border: 1px solid var(--border);
                    border-radius: 6px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    cursor: pointer;
                    font-family: 'Space Mono', monospace;
                    transition: border-color 0.2s, color 0.2s;
                }
                .mh-btn-ghost:hover { border-color: var(--neon); color: var(--neon); }

                .mh-hero-stats {
                    display: flex;
                    gap: 3rem;
                    flex-wrap: wrap;
                    margin-top: 4rem;
                    padding-top: 2.5rem;
                    border-top: 1px solid var(--border);
                    animation: fadeUp 0.7s 0.5s ease both;
                }
                .mh-stat-num {
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: var(--neon);
                    font-family: 'Space Mono', monospace;
                    line-height: 1;
                }
                .mh-stat-label {
                    font-size: 0.7rem;
                    color: var(--muted);
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-top: 4px;
                }

                .mh-scroll-hint {
                    position: absolute;
                    bottom: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                    color: var(--muted);
                    font-family: 'Space Mono', monospace;
                    font-size: 0.6rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    animation: fadeUp 1s 1s ease both;
                }
                .mh-scroll-line {
                    width: 1px; height: 40px;
                    background: linear-gradient(to bottom, var(--neon), transparent);
                    animation: scrollAnim 2s ease-in-out infinite;
                }
                @keyframes scrollAnim {
                    0%   { transform: scaleY(0); transform-origin: top; }
                    50%  { transform: scaleY(1); transform-origin: top; }
                    51%  { transform: scaleY(1); transform-origin: bottom; }
                    100% { transform: scaleY(0); transform-origin: bottom; }
                }

                /* ── About ── */
                .mh-about {
                    border-top: 1px solid var(--border);
                    padding: 5rem 2.5rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .mh-section-tag {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.68rem;
                    color: var(--neon);
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    margin-bottom: 0.75rem;
                }
                .mh-glow-line {
                    width: 60px; height: 2px;
                    background: var(--neon);
                    margin-bottom: 1rem;
                    box-shadow: 0 0 12px rgba(0,245,196,0.6);
                }
                .mh-section-title {
                    font-size: clamp(1.8rem, 4vw, 2.5rem);
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    line-height: 1.2;
                    color: var(--text);
                }
                .mh-about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    align-items: start;
                }
                .mh-about-text { color: var(--muted); font-size: 0.93rem; line-height: 1.85; }
                .mh-about-text p { margin-bottom: 1rem; }
                .mh-about-text b { color: var(--text); }
                .mh-about-card {
                    background: var(--bg3);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 1.5rem;
                    transition: border-color 0.3s;
                }
                .mh-about-card:hover { border-color: rgba(0,245,196,0.25); }
                .mh-about-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 10px 0;
                    border-bottom: 1px solid var(--border);
                }
                .mh-about-item:last-child { border-bottom: none; }
                .mh-about-icon { color: var(--neon); font-size: 1.1rem; margin-top: 2px; }
                .mh-about-label {
                    font-size: 0.68rem;
                    color: var(--muted);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 2px;
                }
                .mh-about-val { font-size: 0.88rem; color: var(--text); font-weight: 600; }

                /* ── Contact ── */
                .mh-contact {
                    border-top: 1px solid var(--border);
                    padding: 5rem 2.5rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .mh-contact-box {
                    background: var(--bg3);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    padding: 3.5rem 2.5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    margin-top: 2.5rem;
                }
                .mh-contact-box::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at 50% 0%, rgba(0,245,196,0.05) 0%, transparent 60%);
                    pointer-events: none;
                }
                .mh-contact-box h2 {
                    font-size: clamp(1.6rem, 4vw, 2.6rem);
                    font-weight: 800;
                    margin-bottom: 0.75rem;
                    color: var(--text);
                }
                .mh-contact-box h2 span { color: var(--neon); }
                .mh-contact-box p { color: var(--muted); max-width: 420px; margin: 0 auto 1.5rem; font-size: 0.9rem; }
                .mh-email {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.95rem;
                    color: var(--neon);
                    margin-bottom: 2rem;
                    letter-spacing: 0.5px;
                }
                .mh-social-links {
                    display: flex;
                    justify-content: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                    margin-bottom: 2rem;
                }
                .mh-social-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: var(--bg4);
                    border: 1px solid var(--border);
                    color: var(--text);
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-size: 0.8rem;
                    cursor: pointer;
                    font-family: 'Syne', sans-serif;
                    font-weight: 600;
                    transition: border-color 0.2s, color 0.2s, transform 0.2s;
                }
                .mh-social-btn:hover {
                    border-color: var(--neon);
                    color: var(--neon);
                    transform: translateY(-2px);
                }

                /* ── Shared animations ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.3; }
                }

                @media (max-width: 768px) {
                    .mh-about-grid { grid-template-columns: 1fr; }
                    .mh-hero { padding: 7rem 1.5rem 4rem; }
                    .mh-hero-stats { gap: 2rem; }
                    .mh-about, .mh-contact { padding: 4rem 1.5rem; }
                }
            `}</style>

            <Navbar />

            {/* ── HERO ── */}
            <section className="mh-hero">
                <div className="mh-hero-inner">
                    <div className="mh-hero-tag">
                        <span className="mh-dot" />
                        Available for Work
                    </div>

                    <h1>
                        Muhammad<br />
                        <span>Hammad</span>
                    </h1>

                    <p className="mh-hero-sub">
                        Full Stack Developer —{' '}
                        <b>MERN Stack</b> specialist building scalable web applications with modern technologies.
                    </p>

                    <div className="mh-hero-btns">
                        <button className="mh-btn-primary" onClick={() => scrollTo('projects')}>
                            View Projects
                        </button>
                        <button className="mh-btn-ghost" onClick={() => scrollTo('contact')}>
                            Hire Me
                        </button>
                    </div>

                    <div className="mh-hero-stats">
                        {[
                            { num: '15+', label: 'Technologies' },
                            { num: '50+', label: 'Projects Built' },
                            { num: '3+',  label: 'Years Coding' },
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
                            <h2 className="mh-section-title">Passionate<br />Developer.</h2>
                            <div className="mh-about-text">
                                <p>
                                    I am a <b>Full Stack Developer</b> who handles everything from frontend interfaces to backend APIs. I love writing clean, maintainable code and building fast, scalable applications.
                                </p>
                                <p>
                                    MERN stack is my core expertise, and I am equally comfortable working with <b>Laravel, Next.js, and TypeScript</b>. I follow best practices on every project.
                                </p>
                                <p>
                                    Learning new technologies is a habit — I always stay <b>up-to-date</b> with the latest industry trends and tools.
                                </p>
                            </div>
                        </div>

                        <div className="mh-about-card">
                            {[
                                { icon: 'ti-user',         label: 'Full Name',  value: 'Muhammad Hammad' },
                                { icon: 'ti-map-pin',      label: 'Location',   value: 'Gujranwala, Punjab, PK' },
                                { icon: 'ti-briefcase',    label: 'Role',       value: 'Full Stack Developer' },
                                { icon: 'ti-language',     label: 'Languages',  value: 'Urdu, English' },
                                { icon: 'ti-circle-check', label: 'Status',     value: 'Open to Work ✦', highlight: true },
                            ].map((item) => (
                                <div key={item.label} className="mh-about-item">
                                    <div className="mh-about-icon">
                                        <i className={`ti ${item.icon}`} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <div className="mh-about-label">{item.label}</div>
                                        <div
                                            className="mh-about-val"
                                            style={item.highlight ? { color: '#00f5c4' } : undefined}
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

            {/* ── SKILLS ── */}
            <SkillSection />

            {/* ── PROJECTS ── */}
            <FeaturedProject />

            {/* ── CONTACT ── */}
            <section id="contact" className="mh-contact">
                <FadeIn>
                    <p className="mh-section-tag">// get in touch</p>
                    <div className="mh-glow-line" />
                    <div className="mh-contact-box">
                        <h2>
                            Let's Build<br />
                            <span>Together.</span>
                        </h2>
                        <p>Have a project idea or a freelance / full-time opportunity? I am available — let's talk!</p>
                        <p className="mh-email">mrhammadghg@gmail.com</p>
                        <div className="mh-social-links">
                            {[
                                { icon: 'ti-brand-github',   label: 'GitHub' },
                                { icon: 'ti-brand-linkedin', label: 'LinkedIn' },
                                { icon: 'ti-brand-whatsapp', label: 'WhatsApp' },
                                { icon: 'ti-mail',           label: 'Email' },
                            ].map((s) => (
                                <button key={s.label} className="mh-social-btn">
                                    <i className={`ti ${s.icon}`} aria-hidden="true" />
                                    {s.label}
                                </button>
                            ))}
                        </div>
                        <button className="mh-btn-primary" onClick={() => {}}>
                            Download CV
                        </button>
                    </div>
                </FadeIn>
            </section>

            <Footer />
        </>
    );
}