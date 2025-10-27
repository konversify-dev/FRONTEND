import React from "react";
import loginIllustration from "../assets/sales/login-illustration.png";

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row h-screen font-lato">
      {/* Kanan - Gambar & Logo (muncul di atas pada mobile) */}
      <div className="w-full md:w-1/2 bg-secondary-light flex flex-col justify-between py-8 px-8 md:px-12 order-1 md:order-2">
        <div className="text-right md:text-right mb-6 md:mb-0">
          <h2 className="text-primary-light font-bold text-lg font-montserrat">
            Conversify
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={loginIllustration}
            alt="Login Illustration"
            className="max-w-sm w-full h-auto md:max-w-md"
          />
        </div>
      </div>

      {/* Kiri - Form Login (muncul di bawah pada mobile) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-24 py-10 bg-white order-2 md:order-1">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-primary-light font-montserrat">
            Welcome Back
          </h1>
          <p className="text-primary-dark mb-8 text-sm md:text-base">
            Please enter your details!
          </p>
        </div>

        <form className="flex flex-col space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-primary-darkest mb-1"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full border text-sm border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-primary-darkest mb-1"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              className="w-full border text-sm border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>

          <button
            type="submit"
            className="bg-primary-light text-white font-semibold py-2 rounded-lg hover:bg-orange-500 transition"
          >
            Login
          </button>
        </form>

        <footer className="text-sm text-center text-primary-dark mt-10 md:mt-20">
          © 2025 Conversify all rights reserved
        </footer>
      </div>
    </div>
  );
}
