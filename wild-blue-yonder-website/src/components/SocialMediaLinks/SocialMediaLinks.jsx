import spotifyLogo from '../../../public/icons/spotify-icon.svg';
import appleMusicLogo from '../../../public/icons/musical-notes.svg';
import instagramLogo from '../../../public/icons/logo-instagram.svg';
import youtubeLogo from '../../../public/icons/logo-youtube.svg';
import facebookLogo from '../../../public/icons/logo-facebook.svg';
import tiktokLogo from '../../../public/icons/logo-tiktok.svg';

import './social-media-links.css';

function SocialMediaLinks(){
    return(
        <div className="social-media-links-wrapper">
            <a href="https://open.spotify.com/artist/7CneY53wJ8pyuYpU0uk3vE?si=NFtAy3c_TgCLIgtTSds-Og" target='_blank' rel='noopener noreferrer'>
                <img src={spotifyLogo} alt="Spotify" />
            </a>
            <a href="https://music.apple.com/us/artist/wild-blue-yonder/1483149496" target='_blank' rel='noopener noreferrer'>
                <img src={appleMusicLogo} alt="Apple Music" />
            </a>
            <a href="https://instagram.com/wildblueyonderjams" target='_blank' rel='noopener noreferrer'>
                <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@wildblueyonder3557" target='_blank' rel='noopener noreferrer'>
                <img src={youtubeLogo} alt="Youtube" />
            </a>
            <a href="https://tiktok.com/@wildblueyonderjams" target='_blank' rel='noopener noreferrer'>
                <img src={tiktokLogo} alt="TikTok" />
            </a>
            <a href="https://www.facebook.com/WildBlueYonderJams/" target='_blank' rel='noopener noreferrer'>
                <img src={facebookLogo} alt="FaceBook" />
            </a>

        </div>
    )
}

export default SocialMediaLinks;