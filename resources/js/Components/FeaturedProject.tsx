import { useEffect, useRef, useState } from 'react';
import '../../css/FeaturedProject.css';

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
    const [activeProject, setActiveProject] = useState(0);

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
        <section
            id="projects"
            ref={sectionRef}
            className="mh-projects"
        >
            <p className="mh-section-tag">// selected work</p>

            <div className="mh-glow-line" />

            <h2 className="mh-section-title">
                Featured <br />
                Projects.
            </h2>

            <div className="mh-projects-wrapper">
                {/* LEFT SIDE BUTTONS */}
                <div className="mh-project-sidebar">
                    {projects.map((project, index) => (
                        <button
                            key={project.num}
                            className={`mh-project-tab ${
                                activeProject === index
                                    ? 'active'
                                    : ''
                            }`}
                            onClick={() =>
                                setActiveProject(index)
                            }
                        >
                            {project.title}
                        </button>
                    ))}
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div className="mh-project-content">
                    <div
                        className={`mh-proj-card ${
                            visible ? 'visible' : ''
                        }`}
                    >
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
                            {
                                projects[activeProject]
                                    .description
                            }
                        </p>

                        <div className="mh-proj-techs">
                            {projects[
                                activeProject
                            ].techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="mh-tech-badge"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <button className="mh-proj-link">
                            <i
                                className="ti ti-arrow-up-right"
                                aria-hidden="true"
                            />
                            View Project
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProject;