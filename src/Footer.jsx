import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './css/Footer.css'

const Footer = () => {
    return (<>
        <footer className="footer">
            <p>© 2025 News Today. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
            </ul>
            <div className="socials">
                <a href="#"><FaFacebook size={24} /></a>
                <a href="#"><FaTwitter size={24} /></a>
                <a href="#"><FaInstagram size={24} /></a>
            </div>
        </footer>
    </>
    );
};

export default Footer;