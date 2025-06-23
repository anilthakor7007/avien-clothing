import React, { useState } from 'react';
import { Facebook, Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import BrandTitle from '../components/comman/BrandTitle';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle login or registration logic here
    console.log(data);
    toast.success("Proceeding...");
  };

  const onError = () => {
    toast.error("Please fill in all fields correctly!");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
          <h2 className="text-center text-3xl font-semibold mb-6">Login with Avien</h2>

          {/* Toggle between Login and Register */}
          <div className="flex justify-center mb-6">
            <button
              className={`py-3 px-8 text-lg ${isLogin ? 'bg-teal-600 text-white' : 'bg-gray-200'} rounded-tl-lg`}
              onClick={() => setIsLogin(true)}
            >
              LOGIN
            </button>
            <Link to="/register">
              <button
                className={`py-3 px-8 text-lg ${!isLogin ? 'bg-teal-600 text-white' : 'bg-gray-200'} rounded-tr-lg`}
                onClick={() => setIsLogin(false)}
              >
                REGISTER
              </button>
            </Link>
          </div>

          {/* Social login buttons */}
          <div className="flex justify-around mb-4">
            <button className="flex items-center bg-blue-600 text-white py-3 px-4 rounded-lg">
              <Facebook />
              <span className="ml-2">Facebook</span>
            </button>
            <button className="flex items-center bg-red-500 text-white py-3 px-4 rounded-lg">
              <Google />
              <span className="ml-2">Google</span>
            </button>
          </div>

          <div className="text-center mb-4 text-gray-600">- OR -</div>

          {/* Phone number input */}
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Phone Number"
                {...register("phone", { 
                  required: "Phone number is required", 
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be 10 digits"
                  } 
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none text-lg ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>

            {/* Proceed button */}
            <button className="bg-red-500 text-white w-full py-3 rounded-lg mb-4 text-lg" type="submit">
              PROCEED
            </button>
          </form>

          {/* Link to create a new account */}
          <div className="text-center text-gray-600">
            New User? <Link to="/register" className="text-red-600">Create Account</Link>
          </div>
        </div>
      </div>


   
      <ToastContainer />
    </>
  );
};

export default Login;
