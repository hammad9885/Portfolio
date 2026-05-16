import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../../css/HappyClient.css';
const testimonials = [
    {
        name: 'Ahmed Khan',
        role: 'Business Owner',
        text: 'Great work! Delivered the project on time with clean UI and smooth communication throughout.',
    },
    {
        name: 'Sarah Ali',
        role: 'Startup Founder',
        text: 'Highly professional developer. The dashboard was exactly what we wanted — clean and fast.',
    },
    {
        name: 'Usman Tariq',
        role: 'Project Manager',
        text: 'Fast delivery, clean code, and excellent frontend skills. Highly recommended for any web project!',
    },
];

const HappyClient = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setIndex((p) => (p + 1) % testimonials.length),
            4500,
        );

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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.45 }}
                    >
                        <span className="hc-badge">WhatsApp Review</span>
                        <div className="hc-stars">★ ★ ★ ★ ★</div>
                        <p className="hc-text">"{testimonials[index].text}"</p>
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
                        className={`hc-dot${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HappyClient;
