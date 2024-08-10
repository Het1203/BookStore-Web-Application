import React from 'react'

function BookBlock({ data }) {
    return (
        <>
            <div className="mt-4 my-4 p-3">
                <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={data.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.name}
                            <div className="badge badge-secondary">{data.category}</div>
                        </h2>
                        <p>{data.description}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline px-2 py-1">${data.price}</div>
                            <div className="cursor-pointer px-2 py-1 badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookBlock;
