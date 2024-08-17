import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [authUser, setAuthUser] = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

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
                        setAuthUser(res.data.user);
                        closeModal();
                        setTimeout(() => {
                            window.location.reload();
                            localStorage.setItem('users', JSON.stringify(res.data.user));
                        }, 1000);
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

    useEffect(() => {
        if (location.pathname === '/books' && !authUser) {
            document.getElementById('my_modal_3').showModal();
            navigate('/login');
        } else if (location.pathname === '/login') {
            document.getElementById('my_modal_3').showModal();
        }
    }, [location, authUser, navigate]);

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
                                    <button className="bg-pink-600 hover:bg-pink-700 hover:text-black btn text-white px-10">LOGIN</button>
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
                                    <button className="bg-pink-600 hover:bg-pink-700 hover:text-black btn text-white px-10">REGISTER</button>
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