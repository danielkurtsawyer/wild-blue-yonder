import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import './footer.css';

function Footer(){
    return(
        <div className="footer-wrapper">
            <SocialMediaLinks/>
            <span className="smallest-text">Copyright © 2025 Wild Blue Yonder LLC</span>
        </div>
    )
}

export default Footer;