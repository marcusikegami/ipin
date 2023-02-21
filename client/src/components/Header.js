import logo_icon from '../assets/images/logo_icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header" className='flex justify-between content-center px-6 py-2 border-b border-gray-200'>
            <div className='flex flex-row items-center'>
                <a href='/'>
                    <img alt="IBIN logo" src={logo_icon} />
                </a>
                <h1 className='pl-8 text-lg font-mono text-red-600'>Integrated Personal Injury Network</h1>
            </div>
            <div id="navigation-wrapper" className='flex flex-col justify-center items-end'>
                {/* <div id="searchbar" className='p-1'>
                    <input type="text" placeholder="Search" className='outline rounded-sm px-1 py-0.5 w-40' />
                </div> */}
                <div id="navigation" className=' p-2'>
                    {/* <Link className='text-lg text-red-500 pl-6' to="/">Home</Link> */}
                    <Link className='font-sans text-md text-red-500 pl-6' to="/about">About</Link>
                    <Link className='font-sans text-md text-red-500 pl-6' to="/partnerships">Partnerships</Link>
                    {/* <Link className='text-lg text-red-500 pl-6' to="/events">Events</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;