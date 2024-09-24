"use client"; // This makes this component a Client Component

import Link from "next/link";

const Log = () => {
    const google=()=>{
        window.open("http://localhost:5000/auth/google","_self")
      }
      const facebook=()=>{
        window.open("http://localhost:5000/auth/facebook","_self")
      }
      const linkedin=()=>{
        window.open("http://localhost:5000/auth/linkedin","_self")
      }
    return (
        <section className="z-0">
            <div className="py-8 min-h-screen px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col justify-center items-center text-center">
                    <img src="logowhite.png" width="200" alt="Logo" className="mb-4" />
                    <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white" style={{ color: '#eab308' }}>
                        Welcome to your professional community
                    </h1>
                    <p className="mb-6 text-base md:text-lg lg:text-xl font-normal text-gray-500 dark:text-gray-400" style={{ color: 'white', fontWeight: 'bold' }}>
                        Join our thriving community today and unlock endless opportunities for personal and professional development.
                    </p>
                </div>
                <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                    <div className="flex justify-center">
                        <h2 className="text-xl font-semibold">Login</h2>
                    </div>
                    <form className="mt-2 space-y-3" action="#">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your Email: <b style={{ color: 'red' }}>*</b>
                        </label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                </svg>
                            </div>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="example@gmail.com" required />
                        </div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your Password: <b style={{ color: 'red' }}>*</b>
                        </label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z"/>
                                </svg>
                            </div>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500" placeholder="*********" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <a href="#" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-500">Lost Password?</a>
                        </div>
                        <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                            Login to your account
                        </button>
                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="mx-4 text-gray-600">OR</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 my-4">
                            <div onClick={google}
                            className="flex items-center justify-center w-full sm:w-60 p-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 cursor-pointer"
                            >
                            <img src="/google.jpg" width="30" alt="Google Logo" className="mr-2" />
                            <span>Google</span>
                            </div>
                          
                            <div   onClick={linkedin}  className="flex items-center justify-center w-full sm:w-60 p-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 cursor-pointer">
                                <img src="linkedin.jpg" width="30" alt="LinkedIn Logo" className="mr-2" />
                                <span>LinkedIn</span>
                            </div>
                            <div  onClick={facebook} className="flex items-center justify-center w-full sm:w-60 p-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 cursor-pointer">
                                <img src="facebook.jpg" width="30" alt="Facebook Logo" className="mr-2" />
                                <span>Facebook</span>
                            </div>
                            
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            <hr className="my-2" />
                            Don't you have an account?
                            <Link href="signup">
                                <button className="w-full px-5 py-3 text-base font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 mt-2">
                                    Create Account
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Log;
