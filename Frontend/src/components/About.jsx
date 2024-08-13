import React from 'react';
import bookLandingPage from '../../public/bookLandingPage.jpg';

function About() {
    return (
        <div className="max-w-screen-2xl container mt-20 mx-auto md:px-20 px-4 flex flex-col my-10">

            <h1 className="items-center justify-center text-center mt-5 text-4xl text-pink-500">About Us</h1>

            <div className="flex flex-col md:flex-row">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12">
                    <p className="text-lg mb-4">
                        Welcome to BookStore! We are dedicated to providing a wide selection of books to cater to all readers. Our mission is to foster a love for reading and to make books accessible to everyone.
                    </p>
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Our Mission:</h2>
                    <p className="text-lg mb-4">
                        Our mission is to create a community of readers by offering a diverse range of books and promoting literacy. We believe that books have the power to change lives and we are committed to making them available to all.
                    </p>
                    <h2 className="text-2xl font-semibold mb-2 text-pink-500">Our Team:</h2>
                    <p className="text-lg mb-4">
                        Our team is composed of passionate individuals who love books and are dedicated to providing the best service to our customers. We are here to help you find your next great read!
                    </p>
                </div>

                <div className="w-full order-1 mt-12 md:w-1/2">
                    <img src={bookLandingPage} alt="books" className="w-full" />
                </div>
            </div>

            <div className="w-full mt-12">
                <h2 className="text-2xl font-semibold mb-2 text-pink-500">About the Creator:</h2>
                <p className="text-lg mb-4">
                    Hi, I'm Het Prajapati, the creator of this BookStore web application. I am passionate about web development and creating user-friendly applications. I hope you enjoy using this application as much as I enjoyed building it.
                </p>
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
    );
}

export default About;