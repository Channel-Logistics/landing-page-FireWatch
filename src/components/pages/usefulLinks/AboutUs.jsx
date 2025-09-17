import {  Handshake } from 'lucide-react';

export default function AboutUs() {


    return (
        <section className="w-full h-full">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:py-16 text-start flex flex-row items-center gap-6">
                <div className="border-2 bg-orange-500 border-r-4 border-orange-500 p-4 rounded-lg flex items-center gap-4">
                    <Handshake className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold">About Us</h1>
            </div>

            <div className="mx-auto  px-2 pb-10 sm:pb-16 text-start space-y-8 gap-5">
                <div className="rounded-3xl ">
                    <p className="text-slate-700 leading-relaxed">
                        Space-Eyes™, Inc
                        Over the years, we have strategically broadened our capabilities to encompass a wide array of advanced technologies and services, including Space Domain Awareness, Maritime Intelligence, Wildfire Detection and Mitigation, Carbon Emissions and Biomass Tracking, and Predictive Financial Risk Analytics. Supported by a highly experienced Board of Directors and Advisory Board and two decades of proven leadership, we have built strong, lasting relationships across the Aerospace, Defense, and other vital industries.

                        Expertise Integration: Leverages a blend of advanced technology and soft skills to deliver comprehensive solutions.
                        Actionable Insights: Provides timely, precise insights that enable informed and strategic decision-making.
                        Solutions for Global Challenges: Tackles critical issues such as maritime security, environmental risk management, wildfire mitigation, and financial risk assessment.
                        Commitment to Sustainability: Promotes sustainability through accurate carbon tracking and eco-conscious solutions.
                        Real-Time Decision Support: Equips clients with real-time insights, empowering them to navigate a rapidly evolving landscape and maintain a competitive edge.
                    </p>
                </div>

            </div>
        </section>
    );
}