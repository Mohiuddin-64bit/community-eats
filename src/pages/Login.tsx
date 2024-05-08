import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { Link, useNavigate } from "react-router-dom";

import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading, isError }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
      const result = await loginUser(formData);
      if ("data" in result) {
        const user = verifyToken(result.data.token);

        dispatch(setUser({ user: user, token: result.data.token }));
        navigate("/");
      } else {
        console.error("Login failed:", result.error);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
    // Clear form after submission
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left side - Image */}
      <div className="md:w-1/3 bg-cover bg-center hidden md:block login-image"></div>

      {/* Right side - Login Form */}
      <div className="md:w-2/3 bg-gray-100 flex justify-center">
        <div className="max-w-lg w-full login-form flex flex-col justify-center px-5">
          <h2 className="text-3xl text-light sm:text-dark font-primary font-bold mb-6 text-center">
            Login
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                className="w-full border border-gray-300 rounded-md px-3 py-2 custom-input-field"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white py-2 rounded-md bg-primary hover:bg-secondary"
            >
              {isLoading ? "Logging In..." : "Login"}
            </button>
            {isError && (
              <p className="text-red-500">Login failed. Please try again.</p>
            )}
            <p className="text-light sm:text-dark">
              Don't have an accout?{" "}
              <Link
                className="underline text-secondary font-secondary"
                to="/register"
              >
                register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
