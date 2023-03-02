const Contact = () => {
    return (
        <div id="contact-wrapper" className="py-24 mx-16">
            <h1 className="text-lg font-sans text-red-600">Contact Us</h1>
                <div id='contact-us' className='flex flex-col items-center py-6 border-t border-gray-200'>
                    <h3 className='text-xl'>For more information, please contact us at:</h3>
                    <a className='pt-6 font-bold text-xl hover:text-red-600' href='tel:801-870-8313'>801-870-8313</a>
                    <a className='font-bold text-xl hover:text-red-600' href='mailto:mtnpond6@gmail.com'>mtnpond6@gmail.com</a>
                </div>
            </div>
    )
};

export default Contact;