import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div id="footer" className='flex justify-between content-center mt-12 bg-red-600 px-6 py-2 border-b border-gray-200'>
            <div id="navigation-wrapper" className='flex flex-col justify-center items-end'>
                <div id="navigation" className=' p-2'>
                    <Link className='font-sans text-md text-white pl-6 hover:underline hover:underline-offset-4' to="/about">About</Link>
                    <Link className='font-sans text-md text-white pl-6 hover:underline hover:underline-offset-4' to="/partnerships">Partnerships</Link>
                    <Link className='font-sans text-md text-white pl-6 hover:underline hover:underline-offset-4' to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    )
};

export default Footer;