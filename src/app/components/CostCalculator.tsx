import { useState } from "react";
import AnimatedButton from "./AnimatedButton";


export default function CostCalculator() {
    const [showForm, setShowForm] = useState(false);

    return (
        <section className="">
            <div className="max-w-[1320px] pb-14 pt-8 lg:pt-16 lg:pb-24 mx-auto px-6">
                <div className="rounded-4xl p-6 lg:p-20 bg-[var(--blue)] flex items-center justify-center">
                    <div className="w-full max-w-[700px]">
                        {!showForm ? (
                            <>
                                <h2 className="text-white lg:text-7xl text-3xl font-bold mb-4 text-center">
                                    Cost Calculator
                                </h2>
                                <p className="text-white lg:text-lg mb-10 text-center max-w-[460px] mx-auto">
                                    Get an estimated cost of your company setup in under a minute with our interactive cost calculator
                                </p>
                                <form className="space-y-5 calculator-form" onSubmit={e => e.preventDefault()}>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <select className="bg-[var(--blue1)] text-white rounded-xl p-4 w-full focus:outline-none">
                                            <option>Choose your Business Activity</option>
                                        </select>
                                        <select className="bg-[var(--blue1)] text-white rounded-xl p-4 w-full focus:outline-none">
                                            <option>What Premises You Require?</option>
                                        </select>
                                        <select className="bg-[var(--blue1)] text-white rounded-xl p-4 w-full focus:outline-none">
                                            <option>No. of Visas Required</option>
                                        </select>
                                        <select className="bg-[var(--blue1)] text-white rounded-xl p-4 w-full focus:outline-none">
                                            <option>No. of Owners</option>
                                        </select>
                                    </div>
                                    <select className="bg-[var(--blue1)] text-white rounded-xl p-4 w-full focus:outline-none">
                                        <option>Choose Your Jurisdiction</option>
                                    </select>

                                    <AnimatedButton type="button" onClick={() => setShowForm(true)}  label="Calculate Now" className="w-full text-white lg:mt-2" />
                                </form>
                            </>
                        ) : (
                            <>

                                <h2 className="text-white lg:text-7xl text-3xl font-bold mb-4 text-center">
                                    Fill Your Details
                                </h2>
                                <p className="text-white lg:text-lg mb-10 text-center max-w-[500px] mx-auto">
                                    Once the contact information is received, designate a responsible team or individual to review the submitted inquiries
                                </p>

                                <form className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <input type="text" placeholder="First Name" className="bg-[var(--blue1)] text-white rounded-xl px-4 py-3 w-full focus:outline-none" />
                                        <input type="text" placeholder="Second Name" className="bg-[var(--blue1)] text-white rounded-xl px-4 py-3 w-full focus:outline-none" />
                                        <input type="tel" placeholder="Phone Number" className="bg-[var(--blue1)] text-white rounded-xl px-4 py-3 w-full focus:outline-none" />
                                        <input type="email" placeholder="Email" className="bg-[var(--blue1)] text-white rounded-xl px-4 py-3 w-full focus:outline-none" />
                                    </div>
                                    <textarea placeholder="Message" rows={4} className="bg-[var(--blue1)] text-white rounded-xl px-4 py-3 w-full focus:outline-none"></textarea>

                                    <AnimatedButton   label="Submit" className="w-full text-white lg:mt-2" />

                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
