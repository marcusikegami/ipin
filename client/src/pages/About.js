import { useState, useEffect } from 'react';
import Officers from '../components/Officers';

const About = () => {
    const [tab, setTab] = useState('');

    return (
        <div id="about">
            <div id="about-header" className="flex flex-row px-12 py-12">
                <h1>About Us</h1>
            </div>
            <Officers />
        </div>
    );
}

export default About;