import logo_icon from '../assets/images/logo_icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header" className='flex justify-between content-center p-4 border-b border-gray-200'>
            <div>
                <a href='/'>
                    <img alt="IBIN logo" src={logo_icon} />
                </a>
            </div>
            <div id="navigation-wrapper" className='flex flex-col justify-center items-end'>
                <div id="searchbar" className='p-1'>
                    <input type="text" placeholder="Search" className='outline rounded-sm px-1 py-0.5 w-40' />
                </div>
                <div id="navigation" className=' p-1'>
                    <Link className='text-lg text-red-500 pl-5' to="/about">About</Link>
                    <Link className='text-lg text-red-500 pl-5' to="/partnerships">Partnerships</Link>
                    <Link className='text-lg text-red-500 pl-5' to="/events">Events</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;