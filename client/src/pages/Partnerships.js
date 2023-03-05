import { useState, useEffect } from 'react';
import Sponsorship from './Sponsorship';
import Membership from './Membership';
import Donations from './Donations';

const Partnerships = ({selection}) => {
    const tabs = ['Sponsorship', 'Membership', 'Donations'];
    const [selectedTab, setTab] = useState('Sponsorship');

    const handleSelection = () => {
        if(selection){
            setTab(selection);
            return;
        }
        setTab(tabs[0]);
        return;
    };

    useEffect(() => {handleSelection()}, [selection]);


    return (
        <div id="partnerships" className="mx-16">
            <div id="partnerships-header" className="pt-12 pb-2">
                <h1 className="text-lg font-sans text-red-600">Partnerships</h1>
            </div>
            <div id="partnerships-tabs" className="flex flex-row px-12 pt-12 pb-2">
                <ul className="flex flex-row">
                    {tabs.map(tab => {
                        return (
                            <li className={`px-4 py-1 font-sans outline-2 rounded-sm border-inherit text-white mr-2 ${(selectedTab === tab) ? 'text-white bg-red-500 underline underline-offset-4' : 'bg-red-600 drop-shadow-md text-stone-100'} hover:underline hover:underline-offset-4`} onClick={() => {setTab(tab)}}>{tab}</li>
                        )
                    })}
                </ul>
            </div>
            <div id="payments-note" className="flex flex-col px-4 border-t border-gray-200">
                <h2>* online merchant access coming soon, please contact us directly for membership, partnership, and donations.</h2>
            </div>
            <div id="partnerships-body" className="flex flex-col px-4 border-t border-gray-200">
            {selectedTab === 'Sponsorship' && <Sponsorship />}
            {selectedTab === 'Membership' && <Membership />}
            {selectedTab === 'Donations' && <Donations />}
                
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