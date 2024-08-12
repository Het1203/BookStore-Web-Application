import React, { useState } from 'react';
import { set, useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (isLogin) {
            // Handle login
            const loginInfo = {
                email: data.email,
                password: data.password
            };
            await axios.post('http://localhost:4001/user/login', loginInfo)
                .then((res) => {
                    console.log(res.data);
                    if (res.data) {
                        toast.success('User Logged In Successfully!');
                        closeModal();
                        setTimeout(() => {
                            window.location.reload();
                            localStorage.setItem('users', JSON.stringify(res.data.user));
                        }, 3000);
                    }
                }).catch((err) => {
                    if (err.response) {
                        console.log(err);
                        toast.error('Error: ' + err.response.data.message);
                        setTimeout(() => { }, 3000);
                    }
                });
        } else {
            // Handle signup
            const userInfo = {
                name: data.name,
                email: data.email,
                password: data.password
            };
            await axios.post('http://localhost:4001/user/signup', userInfo)
                .then((res) => {
                    console.log(res.data);
                    if (res.data) {
                        toast.success('User SignUp Successfully!');
                        // closeModal();
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    }
                }).catch((err) => {
                    if (err.response) {
                        console.log(err);
                        toast.error('Error: ' + err.response.data.message);
                        setTimeout(() => { }, 3000);
                    }
                });
        }
    };

    const closeModal = () => {
        document.getElementById('my_modal_3').close();
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>

                        <h3 className="font-bold text-xl text-center">{isLogin ? 'Login' : 'Register'}</h3>

                        {isLogin ? (
                            <>
                                {/* Login Form */}
                                <div className="mt-5">
                                    <span className="text-lg">Email:</span>
                                    <br />
                                    <input type="email" {...register("email", { required: true })} className="input input-bordered w-full px-3" placeholder="Enter your email" />
                                    {errors.email && <span className="text-sm text-red-600">This field is required</span>}
                                </div>

                                <div className="mt-8 mb-6">
                                    <span className="text-lg">Password:</span>
                                    <br />
                                    <input type="password" {...register("password", { required: true })} className="input input-bordered w-full px-3" placeholder="Enter your password" />
                                    {errors.password && <span className="text-sm text-red-600">This field is required</span>}
                                </div>

                                <div className="mt-8 text-center">
                                    <button className="bg-pink-600 hover:bg-pink-700 hover:text-black btn text-white px-10">Login</button>
                                </div>

                                <div className="mt-5 text-center">
                                    <p>Don't have an account? <span className="underline text-blue-500 cursor-pointer" onClick={toggleForm}>Register</span></p>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Register Form */}
                                <div className="mt-5">
                                    <span className="text-lg">Name:</span>
                                    <br />
                                    <input type="text" {...register("name", { required: true })} className="input input-bordered w-full px-3" placeholder="Enter your  name" />
                                    {errors.name && <span className="text-sm text-red-600">This field is required</span>}
                                </div>

                                <div className="mt-5">
                                    <span className="text-lg">Email:</span>
                                    <br />
                                    <input type="email" {...register("email", { required: true })} className="input input-bordered w-full px-3" placeholder="Enter your email" />
                                    {errors.email && <span className="text-sm text-red-600">This field is required</span>}
                                </div>

                                <div className="mt-5">
                                    <span className="text-lg">Password:</span>
                                    <br />
                                    <input type="password" {...register("password", { required: true })} className="input input-bordered w-full px-3" placeholder="Enter your password" />
                                    {errors.password && <span className="text-sm text-red-600">This field is required</span>}
                                </div>

                                <div className="mt-8 text-center">
                                    <button className="bg-pink-600 hover:bg-pink-700 hover:text-black btn text-white px-10">Register</button>
                                </div>

                                <div className="mt-5 text-center">
                                    <p>Already have an account? <span className="underline text-blue-500 cursor-pointer" onClick={toggleForm}>Login</span></p>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;












// import React from 'react'

// function Login() {
//     return (
//         <div>
//             <dialog id="my_modal_3" className="modal">
//                 <div className="modal-box">
//                     <form method="dialog">
//                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//                     </form>

//                     <h3 className="font-bold text-xl text-center">Login</h3>

//                    1. Email
//                     <div className="mt-5">
//                         <span className="text-lg">
//                             Email:
//                         </span>
//                         <br />
//                         <input type="email" className="input input-bordered w-full px-3" placeholder="Enter your email" />
//                     </div>

//                     2. Password
//                     <div className="mt-8 mb-6">
//                         <span className="text-lg">
//                             Password:
//                         </span>
//                         <br />
//                         <input type="text" className="input input-bordered w-full px-3" placeholder="Enter your password" />
//                     </div>

//                     3. Login Button
//                     <div className="mt-8 text-center">
//                         <button className="bg-pink-600 hover:bg-pink-700 hover:text-black btn text-white px-10">Login</button>
//                     </div>

//                     4. Register
//                     <div className="mt-5 text-center">
//                         <p>Don't have an account? <span className="underline text-blue-500 cursor-pointer">
//                             <a href="#">Register</a>
//                         </span> </p>
//                     </div>
//                 </div>
//             </dialog>
//         </div>
//     )
// }

// export default Login;

