import logo_icon from '../assets/images/logo_icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header" className='flex justify-between content-center'>
            <div>
                <img alt="IBIN logo" src={logo_icon} />
            </div>
            <div id="navigation-wrapper" className='flex flex-col justify-end'>
                <div id="navigation" className=' p-1'>
                    <Link className='text-red-500' to="/events">Events</Link>
                    <Link className='text-red-500' to="/about">About</Link>
                    <Link className='text-red-500' to="/partnerships">Partnerships</Link>
                </div>
                <div id="searchbar" className='p-1'>
                    <input type="text" placeholder="Search" className='outline rounded-sm' />
                </div>
            </div>
        </div>
    );
};

export default Header;