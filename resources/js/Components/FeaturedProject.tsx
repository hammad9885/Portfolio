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
        title: 'ERP System (Internal Project)',
        description:
            'Business management ERP system for handling operations, workflows, and internal business processes with structured modules.',
        techs: ['React', 'PHP', 'laravel', 'MySQL'],
        link: '#',
        github: '#',
    },
    {
        num: '04',
        type: 'Backend API',
        title: 'REST API Services',
        description:
            'Scalable backend APIs for web applications with authentication, secure routing, and database integration.',
        techs: ['Node.js', 'Express', 'MySQL'],
        link: '#',
        github: 'https://github.com/hammad9885',
    },
    {
        num: '05',
        type: 'Full Stack App',
        title: 'Business Dashboard System',
        description:
            'Full-stack dashboard application for managing data, users, and business operations with role-based access.',
        techs: ['React', 'Laravel', 'MySQL'],
        link: '#',
        github: 'https://github.com/hammad9885',
    },
];

const FeaturedProject = () => {
    const sectionRef = useRef<HTMLElement>(null);

    const [visible, setVisible] = useState(false);

    const [activeProject, setActiveProject] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            {
                threshold: 0.1,
            },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="mh-projects">
            <p className="mh-section-tag">// selected work</p>

            <div className="mh-glow-line" />

            <h2 className="mh-section-title">
                Featured
                <br />
                Projects.
            </h2>

            <div className="mh-projects-wrapper">
                {/* Sidebar */}

                <div className="mh-project-sidebar">
                    {projects.map((project, index) => (
                        <button
                            key={project.num}
                            className={`mh-project-tab ${
                                activeProject === index ? 'active' : ''
                            }`}
                            onClick={() => setActiveProject(index)}
                        >
                            {project.title}
                        </button>
                    ))}
                </div>

                {/* Content */}

                <div className="mh-project-content">
                    <div className={`mh-proj-card ${visible ? 'visible' : ''}`}>
                        <div className="mh-proj-meta">
                            <span className="mh-proj-num">
                                {projects[activeProject].num}
                            </span>

                            <span className="mh-proj-type">
                                {projects[activeProject].type}
                            </span>
                        </div>

                        <h3 className="mh-proj-title">
                            {projects[activeProject].title}
                        </h3>

                        <p className="mh-proj-desc">
                            {projects[activeProject].description}
                        </p>

                        <div className="mh-proj-techs">
                            {projects[activeProject].techs.map((tech) => (
                                <span key={tech} className="mh-tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mh-proj-actions">
                            <button
                                className="mh-proj-link"
                                onClick={() =>
                                    projects[activeProject].link &&
                                    window.open(
                                        projects[activeProject].link,
                                        '_blank',
                                    )
                                }
                            >
                                <i className="ti ti-world" />
                                Live Preview
                            </button>

                            <button
                                className="mh-proj-link"
                                onClick={() =>
                                    projects[activeProject].github &&
                                    window.open(
                                        projects[activeProject].github,
                                        '_blank',
                                    )
                                }
                            >
                                <i className="ti ti-brand-github" />
                                Source Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProject;
