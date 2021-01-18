import teslaLogo from '../assets/teslaLogoSmall.svg'
import './Navbar.css'

const Navbar = () => {
    return (  
        <div className="nav__bar">
            <div className="navbar__logo">
                <img src={teslaLogo} alt="tesla logo" />
            </div>
            <div className="navbar__center">
                <p><a href="/">MODEL S</a></p>
                <p><a href="/">MODEL X</a></p>
                <p><a href="/">MODEL Y</a></p>
                <p><a href="/">MODEL 3</a></p>
                <p><a href="/">SOLAR ROOF</a></p>
                <p><a href="/">SOLAR PANELS</a></p>
            </div>
            <div className="navbar__right">
                <p><a href="/">SHOP</a></p>
                <p><a href="/">TESLA ACCOUNT</a></p>
            </div>
        </div>
    );
}
 
export default Navbar;