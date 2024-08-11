import React, { useEffect } from 'react'
import BookBlock from './BookBlock';
import axios from 'axios';

function Book() {

    // calling from backend database to get all books
    const [books, setBooks] = React.useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get('http://localhost:4001/books');
                setBooks(res.data);
            } catch (error) {
                console.log('Error: ', error);
            }
        }
        getBook();
    }, []);


    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-24 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">
                        We're delighted to have you <span className="text-pink-500">
                            here! :)
                        </span>
                    </h1>
                    <p className="mt-10">Welcome to our bookstore! Explore a wide range of books, from free titles that you can enjoy at no cost
                        to premium selections that are worth every penny. Whether you're in the mood for a classic novel, contemporary fiction,
                        or educational material, we have something for everyone. Start your reading adventure with us today!
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {books.map((data) => (<BookBlock data={data} key={data.id} />))}
                </div>
            </div>
        </>
    )
}

export default Book;
