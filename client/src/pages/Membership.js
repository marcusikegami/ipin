const Membership = () => {
    return (
        <div id="sponsorship">
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
        </div>
    );
};

export default Membership;