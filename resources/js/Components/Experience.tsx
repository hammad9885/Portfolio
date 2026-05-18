import { useEffect, useRef, useState } from 'react';
import '../../css/Experience.css';

const experiences = [
    {
        role: 'Freelance Full Stack Developer',
        company: 'Self-Employed',
        meta: 'Jan 2025 – Present · 1 yr 4 mos · Remote',
        desc: 'Delivering custom web solutions for international clients — from landing pages to full-stack applications. Handling end-to-end development, client communication, and project delivery independently.',
        badge: 'Freelancing · Active',
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
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const headerRef = useRef<HTMLDivElement>(null);
    const [visibleCards, setVisibleCards] = useState<boolean[]>(
        new Array(experiences.length).fill(false),
    );
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        const headerObs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeaderVisible(true);
                    headerObs.disconnect();
                }
            },
            { threshold: 0.2 },
        );

        if (headerRef.current){ 
            headerObs.observe(headerRef.current)
        }

        
        const cardObservers = cardRefs.current.map((el, i) => {
            if (!el){
                 return null;
            }

            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisibleCards((prev) => {
                                const next = [...prev];
                                next[i] = true;

                                return next;
                            });
                        }, i * 120);
                        obs.disconnect();
                    }
                },
                { threshold: 0.1 },
            );
            obs.observe(el);

            return obs;
        });

        return () => {
            headerObs.disconnect();
            cardObservers.forEach((o) => o?.disconnect());
        };
    }, []);

    return (
        <section id="experience" className="exp-section">

            <div
                ref={headerRef}
                className={`exp-header ${headerVisible ? 'exp-header-visible' : ''}`}
            >
                <p className="exp-tag">// Selected Experience</p>
                <div className="exp-glow" />
                <h2 className="exp-title">Professional Journey</h2>
            </div>

            <div className="exp-grid">
                {experiences.map((exp, i) => (
                    <div
                        className={`exp-card ${visibleCards[i] ? 'exp-card-visible' : ''}`}
                        key={i}
                        ref={(el) => {
                            cardRefs.current[i] = el;
                        }}
                    >
                        <div className="exp-card-top">
                            {'badge' in exp && (
                                <span className="exp-badge">{exp.badge}</span>
                            )}
                            <span
                                className="exp-dot"
                                style={'badge' in exp ? {} : { marginLeft: 'auto' }}
                            />
                        </div>

                        <div className="exp-role">{exp.role}</div>
                        <div className="exp-company">{exp.company}</div>
                        <div className="exp-meta">{exp.meta}</div>
                        <p className="exp-desc">{exp.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Experience;