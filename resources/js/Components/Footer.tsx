import '../../css/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    const links = [
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const openWhatsApp = () => {
        const message =
            'Hi Muhammad Hammad, I came across your portfolio and would like to discuss a project opportunity with you. Are you available?';

        const encodedMessage = encodeURIComponent(message);

        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = `whatsapp://send?phone=923476789885&text=${encodedMessage}`;
        } else {
            window.open(
                `https://web.whatsapp.com/send?phone=923476789885&text=${encodedMessage}`,
                '_blank',
            );
        }
    };

    return (
        <>
            <footer className="mh-footer">
                <div className="mh-footer-grid">
                    <div className="mh-footer-brand">
                        <div className="mh-footer-logo">MH.dev</div>
                        <p className="mh-footer-tagline">
                            Full Stack Developer building scalable, modern web
                            applications with clean code and great UX.
                        </p>
                    </div>

                    <div>
                        <p className="mh-footer-heading">Navigation</p>
                        <ul className="mh-footer-links">
                            {links.map((l) => (
                                <li key={l.id}>
                                    <button
                                        className="mh-footer-link-btn"
                                        onClick={() => scrollTo(l.id)}
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mh-footer-heading">Connect</p>
                        <div className="mh-footer-socials">
                            {[
                                {
                                    icon: 'ti-brand-github',
                                    label: 'GitHub',
                                    href: 'https://github.com/hammad9885',
                                },
                                {
                                    icon: 'ti-brand-linkedin',
                                    label: 'LinkedIn',
                                    href: 'https://www.linkedin.com/in/muhammad-hammad-dev/',
                                },
                                {
                                    icon: 'ti-brand-whatsapp',
                                    label: 'WhatsApp',
                                    action: openWhatsApp,
                                },
                                {
                                    icon: 'ti-mail',
                                    label: 'Email',
                                    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mrhammadghg@gmail.com&su=Project%20Inquiry%20%7C%20Muhammad%20Hammad&body=Hi%20Muhammad%20Hammad%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0AProject%20Details%3A%0A-%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ARegards%2C',
                                },
                            ].map((s) =>
                                s.action ? (
                                    <button
                                        key={s.label}
                                        onClick={s.action}
                                        className="mh-footer-social"
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            padding: 0,
                                        }}
                                    >
                                        <span className="mh-footer-social-icon">
                                            <i
                                                className={`ti ${s.icon}`}
                                                aria-hidden="true"
                                            />
                                        </span>
                                        {s.label}
                                    </button>
                                ) : (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mh-footer-social"
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            padding: 0,
                                        }}
                                    >
                                        <span className="mh-footer-social-icon">
                                            <i
                                                className={`ti ${s.icon}`}
                                                aria-hidden="true"
                                            />
                                        </span>
                                        {s.label}
                                    </a>
                                ),
                            )}
                        </div>
                    </div>
                </div>

                <div className="mh-footer-bottom">
                    <p className="mh-footer-copy">
                        © {year} — Designed & Developed by{' '}
                        <span>Muhammad Hammad</span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
