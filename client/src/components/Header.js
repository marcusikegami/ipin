import logo_icon from '../assets/images/logo_icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div>
                <img alt="IBIN logo" src={logo_icon} />
            </div>
            <div id="navigation">
                <Link className='text-red-500' to="/events">Events</Link>
                <Link className='text-red-500' to="/about">About</Link>
                <Link className='text-red-500' to="/partnerships">Partnerships</Link>
            </div>
            <div id="searchbar">
                <input type="text" placeholder="Search" />
            </div>
        </div>
    );
};

export default Header;