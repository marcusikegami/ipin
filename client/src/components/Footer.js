import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div id="footer" className='flex justify-between content-center mt-12 bg-red-600 px-6 py-2 border-b border-gray-200'>
            <div id="navigation-wrapper" className='flex flex-col justify-center items-end'>
                <div id="navigation" className='flex flex-col md:flex-row md:justify-center p-2'>
                    <div className='max-md:pb-4'>
                        <Link className='font-sans text-sm sm:text-md text-white pl-6 hover:underline hover:underline-offset-4' to="/partnerships/sponsorship">Sponsorship</Link>
                        <Link className='font-sans text-sm sm:text-md text-white pl-6 hover:underline hover:underline-offset-4' to="/partnerships/membership">Membership</Link>
                        <Link className='font-sans text-sm sm:text-md text-white pl-6 hover:underline hover:underline-offset-4' to="/about/board">Board</Link>
                    </div>
                    <div>
                        <Link className='font-sans text-sm sm:text-md text-white pl-6 hover:underline hover:underline-offset-4' to="/about/officers">Officers</Link>
                        <Link className='font-sans text-sm sm:text-md text-white pl-6 hover:underline hover:underline-offset-4' to="/about/events">Events</Link>
                        <Link className='font-sans text-sm sm:text-md text-white pl-6 hover:underline hover:underline-offset-4' to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;