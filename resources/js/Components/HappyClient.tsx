import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

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
        const interval = setInterval(() => setIndex(p => (p + 1) % testimonials.length), 4500);
        
        return () => clearInterval(interval);

    }, []);

    return (
        <section className="hc-section">
            <style>{`
                .hc-section {
                    border-top: 1px solid #1e293b;
                    padding: 6rem 2.5rem;
                    max-width: 1000px; margin: 0 auto;
                }
                .hc-header { margin-bottom: 3rem; }
                .hc-tag {
                    font-family: 'Space Mono', monospace; font-size: .66rem;
                    color: #00e5b8; letter-spacing: 3px; text-transform: uppercase;
                    margin-bottom: .75rem;
                }
                .hc-glow {
                    width: 60px; height: 2px; background: #00e5b8;
                    margin-bottom: 1.25rem;
                    box-shadow: 0 0 16px rgba(0,229,184,.6);
                }
                .hc-title {
                    font-size: clamp(1.8rem,4vw,2.6rem); font-weight: 800;
                    color: #e2e8f0; line-height: 1.15;
                }
                .hc-stage { position: relative; height: 220px; }
                .hc-card {
                    background: #0d1117;
                    border: 1px solid #1e293b;
                    padding: 2rem 2.2rem;
                    border-radius: 16px;
                    text-align: center;
                    position: absolute; inset: 0;
                    overflow: hidden;
                }
                .hc-card::before {
                    content: '';
                    position: absolute; inset: 0;
                    background: radial-gradient(ellipse at 50% 0%, rgba(0,229,184,.05) 0%, transparent 65%);
                    pointer-events: none;
                }
                .hc-badge {
                    position: absolute; top: 14px; right: 14px;
                    background: #25D366; color: #fff;
                    font-size: .65rem; font-family: 'Space Mono', monospace;
                    padding: 4px 10px; border-radius: 20px; letter-spacing: .5px;
                }
                .hc-stars { color: #00e5b8; margin-bottom: .75rem; font-size: 1rem; letter-spacing: 2px; }
                .hc-text {
                    font-size: .92rem; color: #94a3b8; line-height: 1.7;
                    margin: .5rem 0 1rem; max-width: 580px; margin-left: auto; margin-right: auto;
                }
                .hc-name { font-weight: 700; color: #e2e8f0; font-size: 1rem; }
                .hc-role { font-size: .74rem; color: #64748b; margin-top: 2px; letter-spacing: .5px; }
                .hc-dots {
                    display: flex; justify-content: center; gap: 8px; margin-top: 1.5rem;
                }
                .hc-dot {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: #1e293b; cursor: pointer; transition: background .3s, transform .2s;
                    border: none;
                }
                .hc-dot.active { background: #00e5b8; transform: scale(1.3); }
                @media (max-width: 640px) {
                    .hc-section { padding: 4rem 1.5rem; }
                    .hc-stage { height: 260px; }
                }
            `}</style>

            <div className="hc-header">
                <p className="hc-tag">// happy clients</p>
                <div className="hc-glow" />
                <h2 className="hc-title">What Clients<br />Say.</h2>
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
                        <div className="hc-name">{testimonials[index].name}</div>
                        <div className="hc-role">{testimonials[index].role}</div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="hc-dots">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        className={`hc-dot${i === index ? ' active' : ''}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HappyClient;