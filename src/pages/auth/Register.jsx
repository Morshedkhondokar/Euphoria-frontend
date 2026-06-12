import { useForm } from "react-hook-form";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthForm from "../../components/auth/AuthForm";
import SocialButton from "../../components/auth/SocialButton";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { TfiReload } from "react-icons/tfi";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axiosPublic.post("/register", data);

      toast.success(res.data.message);
      console.log(res.data.user);

      navigate("/");
    } catch (err) {
      console.log("ERROR:", err.response?.data);
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Handel google login...");
  };

  const handleFaceLogin = () => {
    console.log("Handel Face login...");
  };

  return (
    <AuthLayout>
      <AuthForm
        title="Sign Up"
        subtitle="Create a new account"
      >
        {/* social Login */}
        <div className="space-y-4">
          <SocialButton onClick={handleGoogleLogin}>
            <FcGoogle size={24} />
            <span className="text-violet-600 font-medium">
              Continue With Google
            </span>
          </SocialButton>

          <SocialButton onClick={handleFaceLogin}>
            <FaFacebook
              size={24}
              className="text-blue-500"
            />
            <span className="text-violet-600 font-medium">
              Continue With Facebook
            </span>
          </SocialButton>
        </div>

        <div className="my-6" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              User Name
            </label>

            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "name is required",
              })}
              className="w-full h-14 px-4 border border-gray-400 rounded-md outline-none focus:border-violet-500"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full h-14 px-4 border border-gray-400 rounded-md outline-none focus:border-violet-500"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-gray-700 font-medium">Password</label>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center gap-2 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
                <span>{showPassword ? "Hide" : "Show"}</span>
              </button>
            </div>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full h-14 px-4 border border-gray-400 rounded-md outline-none focus:border-violet-500"
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <button disabled={isSubmitting} className="btn bg-violet-500  w-full   p-3 rounded-2xl text-white cursor-pointer">
              {isSubmitting ? <TfiReload className="animate-spin text-2xl mx-auto"  /> :"Register"}
            </button>
            <p className="text-xs ml-5">
              Already have an account?
              <Link
                to="/login"
                className="text-violet-500 underline ml-2"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </AuthForm>
    </AuthLayout>
  );
};

export default Register;
