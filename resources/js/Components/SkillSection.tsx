import { useState } from 'react';
import '../../css/SkillSection.css';
interface Skill {
    name: string;
    percent: number;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const categories: SkillCategory[] = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML5 / CSS3', percent: 95 },
            { name: 'Bootstrap', percent: 90 },
            { name: 'Sass', percent: 87 },
            { name: 'Tailwind CSS', percent: 94 },
            { name: 'JavaScript / TypeScript', percent: 92 },
            { name: 'React JS / Redux', percent: 90 },
            { name: 'Next.js', percent: 88 },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', percent: 82 },
            { name: 'Express.js', percent: 80 },
            { name: 'PHP', percent: 84 },
            { name: 'Laravel', percent: 86 },
            { name: 'REST APIs', percent: 90 },
        ],
    },
    {
        title: 'Database',
        skills: [
            { name: 'MongoDB', percent: 88 },
            { name: 'MySQL', percent: 85 },
            { name: 'Mongoose', percent: 80 },
            { name: 'Eloquent ORM', percent: 78 },
        ],
    },
];

const SkillSection = () => {
    const [activeTab, setActiveTab] = useState('Frontend');

    const activeCategory = categories.find(
        (cat) => cat.title === activeTab
    );

    return (
        <>
           

            <section className="mh-skills" id="skills">

                <div className="mh-heading">
                    <span className="mh-tag">// MY STACK</span>
                    <h2 className="mh-title">
                        Skills <br /> Technologies
                    </h2>
                </div>

                <div className="mh-layout">

                    <div className="mh-sidebar">
                        {categories.map((cat) => (
                            <button
                                key={cat.title}
                                className={`mh-tab-btn ${
                                    activeTab === cat.title ? 'active' : ''
                                }`}
                                onClick={() => setActiveTab(cat.title)}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>

                    <div className="mh-content">
                        <h3 className="mh-content-title">
                            {activeCategory?.title}
                        </h3>

                        {activeCategory?.skills.map((skill) => (
                            <div
                                className="mh-skill-item"
                                key={skill.name}
                            >
                                <div className="mh-skill-header">
                                    <span>{skill.name}</span>
                                    <span>{skill.percent}%</span>
                                </div>

                                <div className="mh-progress-track">
                                    <div
                                        className="mh-progress-fill"
                                        style={{
                                            width: `${skill.percent}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SkillSection;