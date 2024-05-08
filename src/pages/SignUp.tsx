import { useState } from "react";
import { Link } from "react-router-dom";

import { useRegisterMutation } from "../redux/features/auth/authApi";

const SignUp = () => {
  const [registerUser, { isLoading, isError }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Call the registerUser mutation function with user data
      const result = await registerUser(formData);
      if ("data" in result) {
        console.log("User registered:", result.data);
      } else {
        console.error("Registration failed:", result.error);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }

    // Clear form inputs
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left side - Image */}
      <div className="md:w-1/3 bg-cover bg-center hidden md:block signup-image"></div>

      {/* Right side - Login Form */}
      <div className="md:w-2/3 bg-gray-100 flex justify-center">
        <div className="max-w-lg w-full signup-form flex flex-col justify-center px-5">
          <h2 className="text-3xl text-light sm:text-dark font-primary font-bold mb-6 text-center">
            Sign Up
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="text-light sm:text-dark font-semibold font-tertiary block mb-1"
                htmlFor="email"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 custom-input-field"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                className="text-light sm:text-dark font-semibold font-tertiary block mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 custom-input-field"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                className="text-light sm:text-dark font-semibold font-tertiary block mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2  custom-input-field"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white py-2 rounded-md bg-primary hover:bg-secondary"
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
            {isError && (
              <p className="text-red-500">
                Registration failed. Please try again.
              </p>
            )}
            <p className="text-light sm:text-dark">
              Already have an accout?{" "}
              <Link
                className="underline text-secondary font-secondary"
                to="/login"
              >
                login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
