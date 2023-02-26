const Partnerships = () => {
    return (
        <div id="partnerships" className="mx-16">
            <div id="partnerships-header" className="pt-12 pb-2">
                <h1 className="text-lg font-sans text-red-600">Partnerships</h1>
            </div>
            <div id="payments-note" className="flex flex-col px-4 border-t border-gray-200">
                <h2>* online merchant access coming soon, please contact us directly for membership, partnership, and donations.</h2>
            </div>
            <div id="partnerships-body" className="flex flex-col px-4 border-t border-gray-200">
                <h1 className="text-lg py-4 underline underline-offset-4">Corporate Sponsorship</h1>
                <div className="membership">
                    <h2 className="pl-2">Platinum: $15,000</h2>
                    <ul className="pl-4">
                        <li>- Booth at spring/fall seminar + 1 additional event</li>
                        <li>- IPIN Contact list</li>
                        <li>- Access to all meetings</li>
                    </ul>
                </div>
                <div className="membership">
                    <h2 className="pl-2">Gold: $10,000</h2>
                    <ul className="pl-4">
                        <li>- Booth at spring/fall seminar only</li>
                        <li>- IPIN Contact list</li>
                        <li>- Access to six Meetings</li>
                    </ul>
                </div>
                <div className="membership">
                    <h2 className="pl-2">Silver: $5,000</h2>
                    <ul className="pl-4">
                        <li>- Booth at spring/fall seminar only</li>
                        <li>- IPIN Contact list</li>
                        <li>- Access to four meetings</li>
                    </ul>
                </div>
                <h1 className="text-lg py-4 underline underline-offset-4">WEBSITE Banners</h1>
                <ul>
                    <li>- Homepage Banner: $4,000</li>
                    <li>- On any other page: $2,000</li>
                </ul>
                <h1 className="text-lg py-4 underline underline-offset-4">Individual Membership</h1>
                <div className="membership">
                    <h2 className="pl-2">First Year: $150.00</h2>
                    <h2 className="pl-2">Second Year: $300.00</h2>
                    <h2 className="pl-2">Third Year: $450.00</h2>
                    <h2 className="pl-2">Fourth+ Year: $700.00</h2>
                    <p className="pl-4">What's included:</p>
                    <ul className="pl-6">
                        <li>• 20 Continuing Education Units (CEU or CEC)</li>
                        <li>• Free attendance to all events except golf tournaments</li>
                    </ul>
                </div>
            </div>
            <div id="contact-wrapper" className="pt-12 pb-2">
            <h1 className="text-lg font-sans text-red-600">Contact Us</h1>
                <div id='contact-us' className='flex flex-col items-center py-6 border-t border-gray-200'>
                    <h3 className='text-xl'>For more information, please contact us at:</h3>
                    <a className='pt-6 font-bold text-xl hover:text-red-600' href='tel:801-870-8313'>801-870-8313</a>
                    <a className='font-bold text-xl hover:text-red-600' href='mailto:mtnpond6@gmail.com'>mtnpond6@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Partnerships;