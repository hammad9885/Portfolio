import { useEffect, useRef, useState } from 'react';

interface SkillBar {
    label: string;
    percent: number;
}

interface SkillCategory {
    title: string;
    icon: string;
    tags: string[];
}

const coreBars: SkillBar[] = [
    { label: 'JavaScript / TypeScript', percent: 95 },
    { label: 'React JS / Redux', percent: 92 },
    { label: 'Next.js', percent: 88 },
    { label: 'Node.js / Express.js', percent: 90 },
    { label: 'PHP / Laravel', percent: 82 },
];

const categories: SkillCategory[] = [
    {
        title: 'Frontend',
        icon: 'ti-layout',
        tags: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React JS', 'Redux', 'Next.js'],
    },
    {
        title: 'Backend',
        icon: 'ti-server',
        tags: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
    },
    {
        title: 'Database',
        icon: 'ti-database',
        tags: ['MongoDB', 'MySQL', 'Mongoose', 'Eloquent ORM'],
    },
];

const SkillSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated) {
                    setAnimated(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [animated]);

    return (
        <>
            <style>{`
                .mh-skills {
                    border-top: 1px solid #1e293b;
                    padding: 5rem 2rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .mh-section-tag {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.68rem;
                    color: #00f5c4;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    margin-bottom: 0.75rem;
                }
                .mh-glow-line {
                    width: 60px;
                    height: 2px;
                    background: #00f5c4;
                    margin-bottom: 1rem;
                    box-shadow: 0 0 12px rgba(0,245,196,0.6);
                }
                .mh-section-title {
                    font-size: clamp(1.8rem, 4vw, 2.5rem);
                    font-weight: 800;
                    margin-bottom: 3rem;
                    line-height: 1.2;
                    color: #e2e8f0;
                }
                .mh-core-card {
                    background: #16161f;
                    border: 1px solid #1e293b;
                    border-radius: 12px;
                    padding: 1.75rem;
                    margin-bottom: 1.5rem;
                    transition: border-color 0.3s;
                }
                .mh-core-card:hover { border-color: rgba(0,245,196,0.25); }
                .mh-core-label {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.65rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #00f5c4;
                    margin-bottom: 1.25rem;
                }
                .mh-bar-row { margin-bottom: 14px; }
                .mh-bar-row:last-child { margin-bottom: 0; }
                .mh-bar-header {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.78rem;
                    margin-bottom: 6px;
                    color: #e2e8f0;
                }
                .mh-bar-header span { color: #64748b; }
                .mh-bar-track {
                    height: 4px;
                    background: #1e1e2a;
                    border-radius: 100px;
                    overflow: hidden;
                }
                .mh-bar-fill {
                    height: 100%;
                    border-radius: 100px;
                    background: linear-gradient(90deg, #00f5c4, #7c3aed);
                    width: 0%;
                    transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .mh-cats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                    margin-top: 1.5rem;
                }
                .mh-cat-card {
                    background: #16161f;
                    border: 1px solid #1e293b;
                    border-radius: 12px;
                    padding: 1.5rem;
                    transition: border-color 0.3s, transform 0.3s;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: border-color 0.3s, transform 0.5s ease, opacity 0.5s ease;
                }
                .mh-cat-card.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .mh-cat-card:nth-child(1) { transition-delay: 0s; }
                .mh-cat-card:nth-child(2) { transition-delay: 0.1s; }
                .mh-cat-card:nth-child(3) { transition-delay: 0.2s; }
                .mh-cat-card:hover { border-color: rgba(0,245,196,0.3); }
                .mh-cat-title {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.68rem;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: #00f5c4;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .mh-tags-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                .mh-tag {
                    background: #1e1e2a;
                    border: 1px solid #1e293b;
                    color: #e2e8f0;
                    padding: 5px 12px;
                    border-radius: 6px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    cursor: default;
                    transition: all 0.2s ease;
                }
                .mh-tag:hover {
                    border-color: #00f5c4;
                    color: #00f5c4;
                    background: rgba(0,245,196,0.05);
                }
                @media (max-width: 480px) {
                    .mh-skills { padding: 4rem 1.5rem; }
                }
            `}</style>

            <section id="skills" ref={sectionRef} className="mh-skills">
                <p className="mh-section-tag">// tech stack</p>
                <div className="mh-glow-line" />
                <h2 className="mh-section-title">
                    Skills &<br />Technologies.
                </h2>

                <div className="mh-core-card">
                    <p className="mh-core-label">Core Proficiency</p>
                    {coreBars.map((bar) => (
                        <div key={bar.label} className="mh-bar-row">
                            <div className="mh-bar-header">
                                {bar.label}
                                <span>{bar.percent}%</span>
                            </div>
                            <div className="mh-bar-track">
                                <div
                                    className="mh-bar-fill"
                                    style={{ width: animated ? `${bar.percent}%` : '0%' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mh-cats-grid">
                    {categories.map((cat) => (
                        <div key={cat.title} className={`mh-cat-card${animated ? ' visible' : ''}`}>
                            <p className="mh-cat-title">
                                <i className={`ti ${cat.icon}`} aria-hidden="true" />
                                {cat.title}
                            </p>
                            <div className="mh-tags-wrap">
                                {cat.tags.map((tag) => (
                                    <span key={tag} className="mh-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default SkillSection;