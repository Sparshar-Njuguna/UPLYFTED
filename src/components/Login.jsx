import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col gap-4">
      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1 relative">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          className="p-2 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* Forgot password link */}
      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
          onClick={() => alert('Forgot password flow here!')}
        >
          Forgot password?
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
      >
        Log In
      </button>
    </form>
  );
}
