import logo_icon from '../assets/images/logo_icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header" className='flex justify-between content-center p-4 border-b border-gray-200'>
            <div>
                <img alt="IBIN logo" src={logo_icon} />
            </div>
            <div id="navigation-wrapper" className='flex flex-col justify-center items-end'>
                <div id="searchbar" className='p-1'>
                    <input type="text" placeholder="Search" className='outline rounded-sm' />
                </div>
                <div id="navigation" className=' p-5'>
                    <Link className='text-lg text-red-500 pl-5' to="/events">Events</Link>
                    <Link className='text-lg text-red-500 pl-5' to="/about">About</Link>
                    <Link className='text-lg text-red-500 pl-5' to="/partnerships">Partnerships</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;