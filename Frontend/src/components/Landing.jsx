import React, { useState } from 'react';
import bookLandingPage from '../../public/bookLandingPage.jpg';
import { toast } from 'react-hot-toast';

function Landing() {
    // Step 1: Add state for email
    const [email, setEmail] = useState('');

    // Step 2: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform an action with the email, e.g., send to backend or display a message
        console.log('Email submitted:', email);
        toast.success('Email has been sent to ' + email);
        setEmail('');
    };

    return (
        <>
            <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="w-full order-2 md:order-1 md:w-1/2  mt-12 md:mt-32">
                    <div className="space-y-3 space-x-1">
                        <h1 className="text-5xl font-bold">Welcome to bookstore</h1>
                        <div className='space-y-12'>
                            <p className="text-lg text-pink-500 ">The best place to find your favorite books</p>

                            <p className="text-xl">Discover a vast collection of books across various genres, from timeless classics to the latest bestsellers.
                                Our bookstore is dedicated to providing a haven for <span className="text-pink-500">book lovers</span>.</p>
                        </div>
                    </div>
                    {/* Step 3: Update JSX to include form */}
                    <form onSubmit={handleSubmit}>
                        <label className="input input-bordered flex mt-10 items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                type="email"
                                className="grow"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>

                        <button type="submit" className="btn btn-secondary text-md px-5 mt-5">Get started</button>
                    </form>
                </div>
                <div className="w-full order-1 mt-12 md:w-1/2">
                    <img src={bookLandingPage} alt="books" className="w-full" />
                </div>
            </div>
        </>
    );
}

export default Landing;