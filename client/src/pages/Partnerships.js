const Partnerships = () => {
    return (
        <div id="partnerships" className="mx-16">
            <div id="partnerships-header" className="pt-12 pb-2">
                <h1 className="text-lg font-sans text-red-600">Partnerships</h1>
            </div>
            <div id="partnerships-body" className="flex flex-col px-4 border-t border-gray-200">
                <h1 className="text-lg py-4 underline underline-offset-4">Corporate Membership</h1>
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
                <h1 className="text-lg py-4 underline underline-offset-4">WEBSITE Banners</h1>
                <ul>
                    <li>- Homepage Banner: $4,000</li>
                    <li>- On any other page: $2,000</li>
                </ul>
            </div>
            <div id="events-header" className="pt-12 pb-2">
                <h1 className="text-lg font-sans text-red-600">Events</h1>
            </div>
            <div id="events-body" className="flex flex-col px-4 border-t border-gray-200">
                <h1 className="text-lg py-4 underline underline-offset-4">Yearly Events</h1>
                <ul className="pl-6">
                    <li>- Spring and Fall Seminars (10 CEUS each)</li>
                    <li>- Quarterly Networking Dinner events</li>
                    <li>- Grand Rounds</li>
                    <li>- Bi-Monthly Lunch</li>
                    <li>- Golf tournament</li>
                    <li>- 1 yearly Personal Injury (PI) Best Practices event</li>
                    <li className="pl-4">•  DACBR Presentation</li>
                    <li className="pl-4">• event should detail documentation, attorney/provider communication, imaging, second opinions/referrals, etc</li>
                </ul>
            </div>
        </div>
    );
}

export default Partnerships;