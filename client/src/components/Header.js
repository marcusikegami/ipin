import logo_icon from '../assets/images/logo_icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header" className='flex flex-col sm:flex-row justify-between content-center px-2 md:px-6 py-2 border-b border-gray-200'>
            <div className='flex flex-row items-center'>
                <a href='/'>
                    <img alt="IBIN logo" src={logo_icon} className="h-14 sm:w-20 w-14 sm:h-20 md:w-24 md:h-24"/>
                </a>
                <a href='/'>
                    <h1 className='max-[443px]:pl-4 pl-8 text-sm sm:text-md md:text-xl font-sans text-red-600 drop-shadow-md'>Integrated Personal Injury Network</h1>
                </a>
            </div>
            <div id="navigation-wrapper" className='flex flex-col justify-center items-end'>
                {/* <div id="searchbar" className='p-1'>
                    <input type="text" placeholder="Search" className='outline rounded-sm px-1 py-0.5 w-40' />
                </div> */}
                <div id="navigation" className='p-2 md:pr-12'>
                    {/* <Link className='text-lg text-red-500 pl-6' to="/">Home</Link> */}
                    <Link className='font-sans text-md text-red-500 pl-6' to="/about">About</Link>
                    <Link className='font-sans text-md text-red-500 pl-6' to="/contact">Contact</Link>
                    {/* <Link className='font-sans text-md text-red-500 pl-6' to="/partnerships">Partnerships</Link> */}
                    {/* <Link className='text-lg text-red-500 pl-6' to="/events">Events</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;