import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BrandTitle from '../components/comman/BrandTitle';
import Footer from '../components/Footer';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Registration successful!");
  };

  const onError = () => {
    toast.error("Please fill in all fields correctly!");
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-7 ">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
          <h2 className="text-center text-3xl font-semibold mb-6">Register with Avien</h2>

          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {/* First Name Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name *"
                {...register("firstName", { required: "First name is required" })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none text-lg ${errors.firstName ? 'border-red-500' : ''}`}
              />
              {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
            </div>

            {/* Last Name Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none text-lg"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email ID *"
                {...register("email", { required: "Email is required" })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none text-lg ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Choose New Password *"
                {...register("password", { required: "Password is required" })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none text-lg ${errors.password ? 'border-red-500' : ''}`}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              >
                {showPassword ? (
                  <VisibilityOff  className="h-5 w-5 text-gray-500" />
                ) : (
                  <Visibility className="h-5 w-5 text-gray-500" />
                )}
              </span>
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4 relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password *"
                {...register("confirmPassword", { required: "Please confirm your password" })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none text-lg ${errors.confirmPassword ? 'border-red-500' : ''}`}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              >
                {showConfirmPassword ? (
                  <VisibilityOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Visibility className="h-5 w-5 text-gray-500" />
                )}
              </span>
              {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
            </div>

            {/* Birthdate Input */}
            <div className="mb-4">
              <input
                type="date"
                {...register("birthdate", { required: "Please enter your birthdate" })}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none text-lg ${errors.birthdate ? 'border-red-500' : ''}`}
              />
              {errors.birthdate && <span className="text-red-500 text-sm">{errors.birthdate.message}</span>}
            </div>

            {/* Mobile Number Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Mobile Number (For order status update) *"
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

            {/* Gender Selection */}
            <div className="mb-4">
              <span className="text-lg font-medium">Gender</span>
              <div className="flex items-center mt-2">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="male"
                    {...register("gender", { required: "Gender is required" })}
                  />
                  Male
                </label>
                <label className="mr-4">
                  <input
                    type="radio"
                    value="female"
                    {...register("gender")}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    value="other"
                    {...register("gender")}
                  />
                  Other
                </label>
              </div>
              {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
            </div>

            {/* Register Button */}
            <button className="bg-red-500 text-white w-full py-3 rounded-lg mb-4 text-lg" type="submit">
              REGISTER
            </button>
          </form>

          <div className="text-center text-gray-600">
            Already a Customer? <Link to="/login" className="text-red-600">Login</Link>
          </div>
        </div>
        <ToastContainer />
      </div>
      <BrandTitle />

    </>
  );
};

export default RegisterForm;
