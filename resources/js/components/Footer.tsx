import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconMail,
} from '@tabler/icons-react';

import '../../css/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    const openWhatsApp = () => {
        const message =
            'Hi Muhammad Hammad, I came across your portfolio and would like to discuss a project opportunity with you. Are you available?';

        const encodedMessage = encodeURIComponent(message);

        const isMobile = /Android|iPhone|iPad|iPod/i.test(
            navigator.userAgent,
        );

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
        <footer className="mh-footer">
            <div className="mh-footer-content">
                <div className="mh-footer-left">
                    <p>
                        © {year} — Designed & Developed by <span>Muhammad Hammad</span>
                    </p>
                </div>

                <div className="mh-footer-socials">
                    <a
                        href="https://github.com/hammad9885"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mh-footer-social"
                    >
                        <IconBrandGithub size={18} stroke={1.8} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/muhammad-hammad-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mh-footer-social"
                    >
                        <IconBrandLinkedin size={18} stroke={1.8} />
                    </a>

                    <button
                        onClick={openWhatsApp}
                        className="mh-footer-social"
                    >
                        <IconBrandWhatsapp size={18} stroke={1.8} />
                    </button>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mrhammadghg@gmail.com&su=Project%20Inquiry%20%7C%20Muhammad%20Hammad&body=Hi%20Muhammad%20Hammad%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0AProject%20Details%3A%0A-%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ARegards%2C"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mh-footer-social"
                    >
                        <IconMail size={18} stroke={1.8} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;