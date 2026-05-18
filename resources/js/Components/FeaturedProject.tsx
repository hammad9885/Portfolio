import { useEffect, useRef, useState } from 'react';
import '../../css/FeaturedProject.css';

interface Project {
    num: string;
    type: string;
    title: string;
    description: string;
    techs: string[];
    link?: string;
    github?: string;
}

const projects: Project[] = [
    {
        num: '01',
        type: 'Corporate Website',
        title: 'Mood Analytica',
        description:
            'Professional business website built for service showcasing, client engagement, and lead generation. Includes modern UI and contact management system.',
        techs: ['Next.js', 'CodeIgniter', 'MySQL'],
        link: 'https://moodsanalytica.com/',
        github: 'https://github.com/hammad9885',
    },
    {
        num: '02',
        type: 'IT Services Website',
        title: 'Techizh Solutions',
        description:
            'Company profile website for IT services presentation, client inquiries, and portfolio showcasing with admin-managed content structure.',
        techs: ['Next.js', 'CodeIgniter', 'MySQL'],
        link: 'https://techizh.com',
        github: 'https://github.com/hammad9885',
    },
    {
        num: '03',
        type: 'Enterprise System',
        title: 'ERP System',
        description:
            'Business management ERP system for handling operations, workflows, and internal business processes with structured modules.',
        techs: ['React', 'Laravel', 'MySQL'],
        link: '#',
        github: '#',
    },
    {
        num: '04',
        type: 'Pick My booking',
        title: 'Air booking Services',
        description:
            'Online flight booking platform offering seamless travel planning, real-time availability, and secure booking services.',
        techs: ['React', 'TypeScript', 'Redux', 'Bootstrap'],
        link: 'https://pickmybooking.com/',
        github: '#',
    },
    {
        num: '05',
        type: 'Store',
        title: 'Online Furniture Store',
        description:
            'Modern online furniture store with product browsing, secure shopping experience, and responsive user interface.',
        techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        link: '#',
        github: 'https://github.com/hammad9885',
    },
];

const FeaturedProject = () => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleCards, setVisibleCards] = useState<boolean[]>(
        new Array(projects.length).fill(false),
    );

    useEffect(() => {
        const observers = cardRefs.current.map((el, i) => {
            if (!el) {
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
                        }, i * 100);
                        obs.disconnect();
                    }
                },
                { threshold: 0.08 },
            );
            obs.observe(el);

            return obs;
        });

        return () => observers.forEach((o) => o?.disconnect());
    }, []);

    const openLink = (url?: string) => {
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    };

    return (
        <section id="projects" className="fp-section">
            <div className="fp-header">
                <p className="fp-tag">// selected work</p>
                <div className="fp-glow" />
                <h2 className="fp-title">
                    Featured
                    <br />
                    Projects.
                </h2>
            </div>

            <div className="fp-grid">
                {projects.map((project, i) => (
                    <div
                        key={project.num}
                        ref={(el) => {
                            cardRefs.current[i] = el;
                        }}
                        className={`fp-card ${visibleCards[i] ? 'fp-visible' : ''}`}
                    >
                        <div className="fp-card-top">
                            <span className="fp-num">{project.num}</span>
                            <span className="fp-type-badge">
                                {project.type}
                            </span>
                        </div>

                        <h3 className="fp-name">{project.title}</h3>

                        <p className="fp-desc">{project.description}</p>

                        <div className="fp-techs">
                            {project.techs.map((t) => (
                                <span key={t} className="fp-tech">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="fp-actions">
                            <button
                                className="fp-btn"
                                onClick={() => openLink(project.link)}
                            >
                                <i className="ti ti-world" aria-hidden="true" />
                                Live Preview
                            </button>
                            <button
                                className="fp-btn"
                                onClick={() => openLink(project.github)}
                            >
                                <i
                                    className="ti ti-brand-github"
                                    aria-hidden="true"
                                />
                                Source Code
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProject;
