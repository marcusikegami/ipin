import { useState, useEffect } from 'react';
import Officers from '../components/Officers';
import Board from '../components/Board';

const About = () => {
    const tabs = ['Officers', 'Board'];
    // const tabs = ['Officers', 'Board', 'Doctors and Lawyers'];
    const [selectedTab, setTab] = useState(tabs[0]);

    return (
        <div id="about">
            <div id="about-tabs" className="flex flex-row px-12 pt-12 pb-2">
                <ul className="flex flex-row">
                    {tabs.map(tab => {
                        return (
                            <li className={`px-4 py-1 font-sans outline-2 rounded-sm border-inherit bg-red-500 text-white mr-2 ${(selectedTab === tab) ? 'text-red-600 underline underline-offset-4' : 'text-black'} hover:underline hover:underline-offset-4`} onClick={() => {setTab(tab)}}>{tab}</li>
                        )
                    })}
                </ul>
            </div>
            {selectedTab === 'Officers' && <Officers />}
            {selectedTab === 'Board' && <Board />}
            {/* {selectedTab === 'Doctors and Lawyers' && <div>Doctors and Lawyers</div>} */}
        </div>
    );
}

export default About;