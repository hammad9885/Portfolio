import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../../css/HappyClient.css';

const testimonials = [
    {
        name: 'Ahmed Khan',
        role: 'CEO • E-commerce Brand',
        text: 'Muhammad Hammad completely transformed our website experience. The UI feels premium, performance improved significantly, and communication throughout the project was excellent.',
    },
    {
        name: 'Sarah Ali',
        role: 'Founder • SaaS Startup',
        text: 'One of the most reliable developers I have worked with. The dashboard was beautifully designed, responsive on every device, and delivered ahead of schedule.',
    },
    {
        name: 'Usman Tariq',
        role: 'Project Manager • Software Agency',
        text: 'Clean architecture, scalable codebase, and exceptional frontend skills. Every requirement was handled professionally with attention to detail.',
    },
    {
        name: 'Daniel Cooper',
        role: 'Client • United Kingdom',
        text: 'Very impressed with the overall quality and professionalism. The animations, responsiveness, and modern design exceeded expectations.',
    },
    {
        name: 'Hassan Raza',
        role: 'Startup Owner',
        text: 'Fast delivery, excellent communication, and extremely polished work. Hammad understood the vision immediately and implemented everything perfectly.',
    },
    {
        name: 'Emily Watson',
        role: 'Marketing Director',
        text: 'Our landing page conversion rate improved noticeably after the redesign. The interface feels modern, smooth, and highly optimized.',
    },
];

const HappyClient = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hc-section" id="happyClients">
            <div className="hc-header">
                <p className="hc-tag">// happy clients</p>

                <div className="hc-glow" />

                <h2 className="hc-title">
                    What Clients
                    <br />
                    Say.
                </h2>
            </div>

            <div className="hc-stage">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        className="hc-card"
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -40,
                            scale: 0.96,
                        }}
                        transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <span className="hc-badge">
                            WhatsApp Review
                        </span>

                        <div className="hc-stars">
                            ★ ★ ★ ★ ★
                        </div>

                        <p className="hc-text">
                            "{testimonials[index].text}"
                        </p>

                        <div className="hc-name">
                            {testimonials[index].name}
                        </div>

                        <div className="hc-role">
                            {testimonials[index].role}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="hc-dots">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        className={`hc-dot ${
                            i === index ? 'active' : ''
                        }`}
                        onClick={() => setIndex(i)}
                        aria-label={`Testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HappyClient;