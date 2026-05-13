import { useEffect, useRef, useState } from 'react';

interface Project {
    num: string;
    type: string;
    title: string;
    description: string;
    techs: string[];
    link?: string;
}

const projects: Project[] = [
    {
        num: '01',
        type: 'Web App',
        title: 'E-Commerce Platform',
        description:
            'Full-stack online store with product catalog, shopping cart, payment gateway, admin dashboard, and real-time order tracking.',
        techs: ['Next.js', 'Node.js', 'MongoDB', 'Redux'],
        link: '#',
    },
    {
        num: '02',
        type: 'SaaS',
        title: 'Task Management App',
        description:
            'Real-time collaborative productivity tool with drag-and-drop Kanban boards, team roles, and analytics dashboard.',
        techs: ['React', 'Express.js', 'MySQL', 'TypeScript'],
        link: '#',
    },
    {
        num: '03',
        type: 'CMS',
        title: 'Blog & CMS System',
        description:
            'Feature-rich content management system with role-based auth, media uploads, rich-text editor, and built-in SEO tools.',
        techs: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
        link: '#',
    },
    {
        num: '04',
        type: 'API / Backend',
        title: 'REST API Backend',
        description:
            'Scalable RESTful API with JWT authentication, rate limiting, Swagger documentation, and automated test coverage.',
        techs: ['Node.js', 'Express', 'MongoDB', 'JWT'],
        link: '#',
    },
    {
        num: '05',
        type: 'React + Laravel',
        title: 'Full Stack App',
        description:
            'Modern full-stack application with React JS frontend and Laravel backend, featuring authentication and CRUD operations.',
        techs: ['React JS', 'Laravel', 'MySQL', 'Inertia.js'],
        link: '#',
    },
];

const FeaturedProject = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                .mh-projects {
                    border-top: 1px solid #1e293b;
                    padding: 5rem 2rem;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .mh-projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                    margin-top: 2.5rem;
                }
                .mh-proj-card {
                    background: #16161f;
                    border: 1px solid #1e293b;
                    border-radius: 12px;
                    padding: 1.5rem;
                    cursor: pointer;
                    opacity: 0;
                    transform: translateY(24px);
                    transition:
                        opacity 0.5s ease,
                        transform 0.5s ease,
                        border-color 0.25s,
                        box-shadow 0.25s;
                    position: relative;
                    overflow: hidden;
                    text-decoration: none;
                    display: block;
                }
                .mh-proj-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 50% 0%, rgba(0,245,196,0.04) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.3s;
                    pointer-events: none;
                }
                .mh-proj-card.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .mh-proj-card:nth-child(1) { transition-delay: 0s; }
                .mh-proj-card:nth-child(2) { transition-delay: 0.08s; }
                .mh-proj-card:nth-child(3) { transition-delay: 0.16s; }
                .mh-proj-card:nth-child(4) { transition-delay: 0.24s; }
                .mh-proj-card:nth-child(5) { transition-delay: 0.32s; }
                .mh-proj-card:hover {
                    border-color: rgba(0,245,196,0.35);
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0,0,0,0.4);
                }
                .mh-proj-card:hover::before { opacity: 1; }
                .mh-proj-meta {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 0.75rem;
                }
                .mh-proj-num {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.65rem;
                    color: #00f5c4;
                    opacity: 0.6;
                }
                .mh-proj-type {
                    font-family: 'Space Mono', monospace;
                    font-size: 0.62rem;
                    color: #64748b;
                    background: #1e1e2a;
                    border: 1px solid #1e293b;
                    padding: 3px 8px;
                    border-radius: 4px;
                    letter-spacing: 1px;
                }
                .mh-proj-title {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #e2e8f0;
                    margin-bottom: 0.5rem;
                    line-height: 1.3;
                }
                .mh-proj-desc {
                    font-size: 0.82rem;
                    color: #64748b;
                    line-height: 1.75;
                    margin-bottom: 1.25rem;
                }
                .mh-proj-techs {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    margin-bottom: 1.25rem;
                }
                .mh-tech-badge {
                    background: rgba(0,245,196,0.07);
                    border: 1px solid rgba(0,245,196,0.15);
                    color: #00f5c4;
                    padding: 3px 10px;
                    border-radius: 100px;
                    font-size: 0.68rem;
                    font-family: 'Space Mono', monospace;
                    letter-spacing: 0.5px;
                }
                .mh-proj-link {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-family: 'Space Mono', monospace;
                    font-size: 0.68rem;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: #64748b;
                    transition: color 0.2s;
                    border-top: 1px solid #1e293b;
                    padding-top: 1rem;
                    background: none;
                    border-left: none;
                    border-right: none;
                    border-bottom: none;
                    cursor: pointer;
                    width: 100%;
                    text-align: left;
                }
                .mh-proj-card:hover .mh-proj-link { color: #00f5c4; }
                .mh-proj-link i { transition: transform 0.2s; }
                .mh-proj-card:hover .mh-proj-link i { transform: translate(2px, -2px); }
                @media (max-width: 480px) {
                    .mh-projects { padding: 4rem 1.5rem; }
                    .mh-projects-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <section id="projects" ref={sectionRef} className="mh-projects">
                <p className="mh-section-tag">// selected work</p>
                <div className="mh-glow-line" />
                <h2 className="mh-section-title">
                    Featured<br />Projects.
                </h2>

                <div className="mh-projects-grid">
                    {projects.map((project) => (
                        <div key={project.num} className={`mh-proj-card${visible ? ' visible' : ''}`}>
                            <div className="mh-proj-meta">
                                <span className="mh-proj-num">{project.num}</span>
                                <span className="mh-proj-type">{project.type}</span>
                            </div>
                            <h3 className="mh-proj-title">{project.title}</h3>
                            <p className="mh-proj-desc">{project.description}</p>
                            <div className="mh-proj-techs">
                                {project.techs.map((tech) => (
                                    <span key={tech} className="mh-tech-badge">{tech}</span>
                                ))}
                            </div>
                            <button className="mh-proj-link">
                                <i className="ti ti-arrow-up-right" aria-hidden="true" />
                                View Project
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FeaturedProject;