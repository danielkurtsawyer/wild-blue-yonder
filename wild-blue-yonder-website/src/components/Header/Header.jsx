import './header.css';
import wildBlueYonderLogo from '../../../public/images/Graphics/logo.png';
import NavMenu from '../Nav Menu/NavMenu.jsx';

function Header(){

    return(
        <>
            <div className="logo-wrapper">
                <img src={wildBlueYonderLogo} className="logo" alt="Wild Blue Yonder Logo" />
                <h2>Wild Blue Yonder</h2>
            </div>
            <NavMenu/>
        </>
    )
}

export default Header;