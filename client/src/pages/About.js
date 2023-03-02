import { useState, useEffect } from 'react';
import Officers from './Officers';
import Board from './Board';
import Events from './Events';

const About = ({selection}) => {
    const tabs = ['Officers', 'Board', 'Events'];
    // const tabs = ['Officers', 'Board', 'Doctors and Lawyers'];
    const [selectedTab, setTab] = useState(tabs[0]);

    const handleSelection = () => {
        if(selection){
            setTab(selection);
            return;
        }
        setTab(tabs[0]);
        return;
    };

    return (
        <div id="about">
            <div id="mission-statement" className="mx-auto w-1/2 py-16 flex flex-col items-center justify-center">
                <h1 className='text-lg font-sans text-red-600 py-2'>Our Mission</h1>
                <p className='text-center'>
                The Integrated Personal Injury Network mission is twofold. First, IPIN goal is to raise funding via
                charitable donations and grant writing to help those without the necessary financial resources to obtain
                the healthcare they need when recovering from a personal injury accident. Second, IPIN will provide top
                notch resources and continuing education for all professionals that work in the personal injury space.
                </p>
            </div>
            <div id="about-tabs" className="flex flex-row px-12 pt-12 pb-2">
                <ul className="flex flex-row">
                    {tabs.map(tab => {
                        return (
                            <li className={`px-4 py-1 font-sans outline-2 rounded-sm border-inherit text-white mr-2 ${(selectedTab === tab) ? 'text-white bg-red-500 underline underline-offset-4' : 'bg-red-600 drop-shadow-md text-stone-100'} hover:underline hover:underline-offset-4`} onClick={() => {setTab(tab)}}>{tab}</li>
                        )
                    })}
                </ul>
            </div>
            {selectedTab === 'Officers' && <Officers />}
            {selectedTab === 'Board' && <Board />}
            {selectedTab === 'Events' && <Events />}
            {/* {selectedTab === 'Doctors and Lawyers' && <div>Doctors and Lawyers</div>} */}
        </div>
    );
}

export default About;