import React, { useEffect } from 'react'
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookBlock from './BookBlock'

function FreeBooks() {

    // calling from backend database to get all books
    const [books, setBooks] = React.useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get('http://localhost:4001/books');
                const data = res.data.filter((item) => item.category === "Free");
                setBooks(res.data);
            } catch (error) {
                console.log('Error: ', error);
            }
        }
        getBook();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Free Books</h1>
                    <p className="pb-3">Explore our collection of free books, carefully curated to provide you with a diverse range of genres and topics.
                        Whether you're looking for classic literature, contemporary fiction, or educational resources, our free books section has something for everyone.
                        Dive into a new adventure without spending a dime!</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {books.map((data) => (
                            <BookBlock data={data} key={data.id} />
                        ))}
                    </Slider>

                </div>
            </div>
        </>
    )
}

export default FreeBooks;
