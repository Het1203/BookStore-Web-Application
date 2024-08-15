import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onSubmit = async (data) => {
        setLoading(true);
        setMessage("");
        try {
            const res = await axios.post("http://localhost:4001/contact", data);
            console.log(res.data);
            if (res.data) {
                setMessage('Your message has been sent successfully!');
                reset();
            }
        } catch (err) {
            setMessage("There was an error sending your message. Please try again. " + err);
            reset();
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <h1 className="mt-24 items-center justify-center text-center text-4xl">
                    Get In Touch With Us
                </h1>
                <div className="flex justify-center mt-10">
                    <div className="modal-box w-full md:w-1/2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-5">
                                <span className="text-lg">Name:</span>
                                <br />
                                <input type="text" {...register("name", { required: true })} className="input input-bordered w-full px-3" placeholder="Enter your name" />
                                {errors.name && <span className="text-sm text-red-600">This field is required</span>}
                            </div>
                            <div className="mt-5">
                                <span className="text-lg">Email:</span>
                                <br />
                                <input type="email" {...register("email", { required: true })} className="input input-bordered w-full px-3" placeholder="Enter your email" />
                                {errors.email && <span className="text-sm text-red-600">This field is required</span>}
                            </div>
                            <div className="mt-5">
                                <span className="text-lg">Message:</span>
                                <br />
                                <textarea {...register("message", { required: true })} className="input input-bordered w-full px-3" placeholder="Enter your message" rows="5"></textarea>
                                {errors.message && <span className="text-sm text-red-600">This field is required</span>}
                            </div>
                            <div className="mt-8 text-center">
                                <button type="submit" className="bg-pink-500 hover:bg-pink-700 hover:text-black btn text-white px-10" disabled={loading}>
                                    {loading ? "Sending..." : "Submit"}
                                </button>
                            </div>
                            {message && <div className="mt-5 text-center text-lg">{message}</div>}
                        </form>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="text-center">
                        <h2 className="text-2xl">Follow Us</h2>
                        <div className="flex justify-center space-x-4 mt-4 mb-5">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Facebook</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black-600">Twitter</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-800">Instagram</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;